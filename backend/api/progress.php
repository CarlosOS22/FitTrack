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

// OBTENER PROGRESO DEL USUARIO
if ($method === 'GET') {
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

    if (!$user_id) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    $query = "SELECT * FROM progress WHERE user_id = :user_id ORDER BY date ASC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":user_id", $user_id);
    $stmt->execute();

    $progress = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode(array("success" => true, "progress" => $progress));
}

// AÑADIR ENTRADA DE PROGRESO
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->date) || empty($data->weight)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "INSERT INTO progress (user_id, date, weight, body_fat, notes)
              VALUES (:user_id, :date, :weight, :body_fat, :notes)";
    $stmt = $db->prepare($query);

    $body_fat = isset($data->body_fat) ? $data->body_fat : null;
    $notes = isset($data->notes) ? $data->notes : null;

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":date", $data->date);
    $stmt->bindParam(":weight", $data->weight);
    $stmt->bindParam(":body_fat", $body_fat);
    $stmt->bindParam(":notes", $notes);

    if ($stmt->execute()) {
        $progress_id = $db->lastInsertId();

        // Obtener la entrada creada
        $query = "SELECT * FROM progress WHERE id = :id";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":id", $progress_id);
        $stmt->execute();
        $entry = $stmt->fetch(PDO::FETCH_ASSOC);

        http_response_code(201);
        echo json_encode(array(
            "success" => true,
            "message" => "Progreso añadido",
            "entry" => $entry
        ));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al añadir progreso"));
    }
}

// ELIMINAR ENTRADA DE PROGRESO
elseif ($method === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->progress_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "DELETE FROM progress WHERE id = :progress_id AND user_id = :user_id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":progress_id", $data->progress_id);
    $stmt->bindParam(":user_id", $data->user_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Entrada de progreso eliminada"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al eliminar progreso"));
    }
}

else {
    http_response_code(404);
    echo json_encode(array("success" => false, "message" => "Endpoint no encontrado"));
}
?>
