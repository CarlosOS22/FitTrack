<?php
require_once '../includes/config.php';
require_once '../includes/auth.php';

header('Content-Type: application/json');

// Require authentication
requireLogin();

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

$userId = $input['user_id'] ?? null;
$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$age = $input['age'] ?? null;
$gender = $input['gender'] ?? null;

// Validate user ID matches session
if (!$userId || $userId != getUserId()) {
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}

// Validate inputs
if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Nombre y email son requeridos']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

try {
    // Check if email already exists for another user
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? AND id != ?");
    $stmt->execute([$email, $userId]);
    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'message' => 'El email ya está en uso']);
        exit;
    }

    // Update users table
    $stmt = $pdo->prepare("UPDATE users SET name = ?, email = ?, updated_at = NOW() WHERE id = ?");
    $stmt->execute([$name, $email, $userId]);

    // Update user_data table if age and gender provided
    if ($age !== null && $gender !== null) {
        // Check if user_data exists
        $stmt = $pdo->prepare("SELECT user_id FROM user_data WHERE user_id = ?");
        $stmt->execute([$userId]);

        if ($stmt->fetch()) {
            // Update existing record
            $stmt = $pdo->prepare("UPDATE user_data SET age = ?, gender = ? WHERE user_id = ?");
            $stmt->execute([$age, $gender, $userId]);
        } else {
            // Insert new record
            $stmt = $pdo->prepare("INSERT INTO user_data (user_id, age, gender) VALUES (?, ?, ?)");
            $stmt->execute([$userId, $age, $gender]);
        }
    }

    // Update session
    $_SESSION['user_name'] = $name;
    $_SESSION['user_email'] = $email;

    echo json_encode([
        'success' => true,
        'message' => 'Perfil actualizado exitosamente'
    ]);

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al actualizar el perfil: ' . $e->getMessage()
    ]);
}
?>
