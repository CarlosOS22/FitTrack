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

// OBTENER TODAS LAS SUGERENCIAS (para admin)
if ($method === 'GET') {
    $status = isset($_GET['status']) ? $_GET['status'] : null;

    if ($status) {
        $query = "SELECT * FROM recipe_suggestions WHERE status = :status ORDER BY created_at DESC";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":status", $status);
    } else {
        $query = "SELECT * FROM recipe_suggestions ORDER BY created_at DESC";
        $stmt = $db->prepare($query);
    }

    $stmt->execute();
    $suggestions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode(array("success" => true, "suggestions" => $suggestions));
}

// CREAR SUGERENCIA DE RECETA
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->name) || empty($data->category) || empty($data->email)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "INSERT INTO recipe_suggestions
              (name, category, calories, protein, carbs, fat, ingredients, instructions, email)
              VALUES (:name, :category, :calories, :protein, :carbs, :fat, :ingredients, :instructions, :email)";
    $stmt = $db->prepare($query);

    $ingredients_json = json_encode($data->ingredients);
    $instructions_json = json_encode($data->instructions);

    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":category", $data->category);
    $stmt->bindParam(":calories", $data->calories);
    $stmt->bindParam(":protein", $data->protein);
    $stmt->bindParam(":carbs", $data->carbs);
    $stmt->bindParam(":fat", $data->fat);
    $stmt->bindParam(":ingredients", $ingredients_json);
    $stmt->bindParam(":instructions", $instructions_json);
    $stmt->bindParam(":email", $data->email);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("success" => true, "message" => "Sugerencia enviada correctamente"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al enviar sugerencia"));
    }
}

// ACTUALIZAR ESTADO DE SUGERENCIA (aprobar/rechazar)
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->suggestion_id) || empty($data->status)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "UPDATE recipe_suggestions SET status = :status WHERE id = :suggestion_id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":status", $data->status);
    $stmt->bindParam(":suggestion_id", $data->suggestion_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Estado actualizado"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al actualizar estado"));
    }
}

else {
    http_response_code(404);
    echo json_encode(array("success" => false, "message" => "Endpoint no encontrado"));
}
?>
