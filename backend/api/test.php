<?php
require_once '../config/cors.php';
require_once '../config/database.php';

// Test de conexión a la base de datos
$database = new Database();
$db = $database->getConnection();

if ($db) {
    http_response_code(200);
    echo json_encode(array(
        "success" => true,
        "message" => "✅ Conexión a la base de datos exitosa",
        "database" => "fittrack_db",
        "php_version" => phpversion(),
        "server_time" => date('Y-m-d H:i:s')
    ));
} else {
    http_response_code(500);
    echo json_encode(array(
        "success" => false,
        "message" => "❌ Error al conectar con la base de datos",
        "php_version" => phpversion()
    ));
}
?>
