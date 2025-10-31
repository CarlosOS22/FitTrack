<?php
class Database {
    // Configuración para InfinityFree
    private $host = "sql304.infinityfree.com";
    private $database_name = "if0_40300482_fittrack";
    private $username = "if0_40300482";
    private $password = "TU_PASSWORD_VPANEL_AQUI"; // IMPORTANTE: Reemplaza esto con tu contraseña de vPanel
    public $conn;

    // Obtener la conexión a la base de datos
    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->database_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
