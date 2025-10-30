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

// OBTENER DATOS DEL USUARIO
if ($method === 'GET') {
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

    if (!$user_id) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    $query = "SELECT * FROM user_data WHERE user_id = :user_id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":user_id", $user_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $userData = $stmt->fetch(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode(array("success" => true, "userData" => $userData));
    } else {
        http_response_code(200);
        echo json_encode(array("success" => true, "userData" => null));
    }
}

// GUARDAR/ACTUALIZAR DATOS DEL USUARIO
elseif ($method === 'POST' || $method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    // Verificar si ya existen datos para este usuario
    $query = "SELECT id FROM user_data WHERE user_id = :user_id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // UPDATE
        $query = "UPDATE user_data SET
                  weight = :weight,
                  height = :height,
                  age = :age,
                  gender = :gender,
                  activity_level = :activity_level,
                  goal_weight = :goal_weight
                  WHERE user_id = :user_id";
    } else {
        // INSERT
        $query = "INSERT INTO user_data (user_id, weight, height, age, gender, activity_level, goal_weight)
                  VALUES (:user_id, :weight, :height, :age, :gender, :activity_level, :goal_weight)";
    }

    $stmt = $db->prepare($query);

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":weight", $data->weight);
    $stmt->bindParam(":height", $data->height);
    $stmt->bindParam(":age", $data->age);
    $stmt->bindParam(":gender", $data->gender);
    $stmt->bindParam(":activity_level", $data->activity_level);
    $stmt->bindParam(":goal_weight", $data->goal_weight);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Datos guardados correctamente"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al guardar datos"));
    }
}

else {
    http_response_code(404);
    echo json_encode(array("success" => false, "message" => "Endpoint no encontrado"));
}
?>
