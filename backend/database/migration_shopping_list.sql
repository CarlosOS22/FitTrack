-- Migración: Añadir tabla de lista de la compra
-- Ejecuta este script si ya tienes la base de datos creada y solo quieres añadir la nueva tabla

USE fittrack;

-- Crear tabla de lista de la compra si no existe
CREATE TABLE IF NOT EXISTS shopping_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    ingredient VARCHAR(255) NOT NULL,
    quantity VARCHAR(100),
    checked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Mensaje de confirmación
SELECT 'Tabla shopping_list creada exitosamente' AS mensaje;
