<?php
// Database configuration
define('DB_HOST', '127.0.0.1:3307'); // 👈 importante: puerto cambiado
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'fittrack');

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Database connection
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch(PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Base URL
define('BASE_URL', '/FitTrack/');
?>
