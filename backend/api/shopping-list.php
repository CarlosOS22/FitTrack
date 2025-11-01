<?php
require_once '../config/cors.php';
require_once '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$database = new Database();
$db = $database->getConnection();

if (!$db) {
    http_response_code(500);
    echo json_encode(array("success" => false, "message" => "Error de conexión a la base de datos"));
    exit();
}

// OBTENER LISTA DE COMPRA DEL USUARIO
if ($method === 'GET') {
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

    if (!$user_id) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    $query = "SELECT * FROM shopping_list WHERE user_id = :user_id ORDER BY checked ASC, created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":user_id", $user_id);
    $stmt->execute();

    $shoppingList = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode(array("success" => true, "shoppingList" => $shoppingList));
}

// AÑADIR INGREDIENTE A LA LISTA
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->ingredient)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "INSERT INTO shopping_list (user_id, ingredient, quantity, checked)
              VALUES (:user_id, :ingredient, :quantity, :checked)";
    $stmt = $db->prepare($query);

    $quantity = isset($data->quantity) ? $data->quantity : null;
    $checked = isset($data->checked) ? $data->checked : 0;

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":ingredient", $data->ingredient);
    $stmt->bindParam(":quantity", $quantity);
    $stmt->bindParam(":checked", $checked);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("success" => true, "message" => "Ingrediente añadido a la lista"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al añadir ingrediente"));
    }
}

// ACTUALIZAR INGREDIENTE (marcar como comprado/no comprado o editar)
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->id) || !isset($data->user_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    // Verificar que el item pertenece al usuario
    $query = "SELECT id FROM shopping_list WHERE id = :id AND user_id = :user_id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $data->id);
    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        http_response_code(404);
        echo json_encode(array("success" => false, "message" => "Ingrediente no encontrado"));
        exit();
    }

    // Actualizar el ingrediente
    $query = "UPDATE shopping_list SET checked = :checked";

    // Si se proporciona ingrediente o cantidad, también actualizarlos
    if (isset($data->ingredient)) {
        $query .= ", ingredient = :ingredient";
    }
    if (isset($data->quantity)) {
        $query .= ", quantity = :quantity";
    }

    $query .= " WHERE id = :id AND user_id = :user_id";

    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $data->id);
    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":checked", $data->checked);

    if (isset($data->ingredient)) {
        $stmt->bindParam(":ingredient", $data->ingredient);
    }
    if (isset($data->quantity)) {
        $stmt->bindParam(":quantity", $data->quantity);
    }

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Ingrediente actualizado"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al actualizar ingrediente"));
    }
}

// ELIMINAR INGREDIENTE DE LA LISTA
elseif ($method === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->id) || empty($data->user_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "DELETE FROM shopping_list WHERE id = :id AND user_id = :user_id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $data->id);
    $stmt->bindParam(":user_id", $data->user_id);

    if ($stmt->execute()) {
        if ($stmt->rowCount() > 0) {
            http_response_code(200);
            echo json_encode(array("success" => true, "message" => "Ingrediente eliminado"));
        } else {
            http_response_code(404);
            echo json_encode(array("success" => false, "message" => "Ingrediente no encontrado"));
        }
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al eliminar ingrediente"));
    }
}

// Método no permitido
else {
    http_response_code(405);
    echo json_encode(array("success" => false, "message" => "Método no permitido"));
}
?>
