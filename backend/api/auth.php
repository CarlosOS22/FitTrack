<?php
require_once '../config/cors.php';
require_once '../config/database.php';

// Obtener método HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Crear conexión a la base de datos
$database = new Database();
$db = $database->getConnection();

if (!$db) {
    http_response_code(500);
    echo json_encode(array("success" => false, "message" => "Error de conexión a la base de datos"));
    exit();
}

// REGISTRO DE USUARIO
if ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/register') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    // Validar datos
    if (empty($data->email) || empty($data->password) || empty($data->name)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Faltan datos obligatorios"));
        exit();
    }

    // Validar email
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Email inválido"));
        exit();
    }

    // Validar contraseña
    if (strlen($data->password) < 6) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "La contraseña debe tener al menos 6 caracteres"));
        exit();
    }

    // Verificar si el email ya existe
    $query = "SELECT id FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":email", $data->email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Este email ya está registrado"));
        exit();
    }

    // Hashear la contraseña
    $password_hash = password_hash($data->password, PASSWORD_BCRYPT);

    // Insertar nuevo usuario
    $query = "INSERT INTO users (name, email, password, age, gender) VALUES (:name, :email, :password, :age, :gender)";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":password", $password_hash);
    $age = isset($data->age) ? $data->age : null;
    $gender = isset($data->gender) ? $data->gender : null;
    $stmt->bindParam(":age", $age);
    $stmt->bindParam(":gender", $gender);

    if ($stmt->execute()) {
        $user_id = $db->lastInsertId();

        // Obtener datos del usuario creado
        $query = "SELECT id, name, email, age, gender, created_at FROM users WHERE id = :id";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":id", $user_id);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        http_response_code(201);
        echo json_encode(array(
            "success" => true,
            "message" => "Registro exitoso",
            "user" => $user
        ));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al crear usuario"));
    }
}

// LOGIN DE USUARIO
elseif ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/login') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    // Validar datos
    if (empty($data->email) || empty($data->password)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Email y contraseña son obligatorios"));
        exit();
    }

    // Buscar usuario por email
    $query = "SELECT id, name, email, password, age, gender, created_at FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":email", $data->email);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        http_response_code(401);
        echo json_encode(array("success" => false, "message" => "Email o contraseña incorrectos"));
        exit();
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verificar contraseña
    if (password_verify($data->password, $user['password'])) {
        // Eliminar password del array antes de devolver
        unset($user['password']);

        http_response_code(200);
        echo json_encode(array(
            "success" => true,
            "message" => "Inicio de sesión exitoso",
            "user" => $user
        ));
    } else {
        http_response_code(401);
        echo json_encode(array("success" => false, "message" => "Email o contraseña incorrectos"));
    }
}

// ACTUALIZAR PERFIL
elseif ($method === 'PUT' && strpos($_SERVER['REQUEST_URI'], '/profile') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    $query = "UPDATE users SET name = :name, age = :age, gender = :gender WHERE id = :user_id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":age", $data->age);
    $stmt->bindParam(":gender", $data->gender);
    $stmt->bindParam(":user_id", $data->user_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Perfil actualizado"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al actualizar perfil"));
    }
}

else {
    http_response_code(404);
    echo json_encode(array("success" => false, "message" => "Endpoint no encontrado"));
}
?>
