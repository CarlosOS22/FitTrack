<?php
require_once '../includes/config.php';
require_once '../includes/auth.php';

header('Content-Type: application/json');

if (!isLoggedIn()) {
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    if ($method === 'GET') {
        $userId = $_GET['user_id'] ?? getUserId();

        $stmt = $pdo->prepare("SELECT * FROM user_data WHERE user_id = ?");
        $stmt->execute([$userId]);
        $userData = $stmt->fetch();

        echo json_encode([
            'success' => true,
            'userData' => $userData ?: null
        ]);

    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        $userId = $data['user_id'] ?? getUserId();
        $weight = $data['weight'] ?? null;
        $height = $data['height'] ?? null;
        $age = $data['age'] ?? null;
        $gender = $data['gender'] ?? null;
        $activityLevel = $data['activity_level'] ?? null;
        $goalWeight = $data['goal_weight'] ?? null;

        // Check if user data exists
        $stmt = $pdo->prepare("SELECT id FROM user_data WHERE user_id = ?");
        $stmt->execute([$userId]);
        $exists = $stmt->fetch();

        if ($exists) {
            // Update
            $stmt = $pdo->prepare("
                UPDATE user_data
                SET weight = ?, height = ?, age = ?, gender = ?, activity_level = ?, goal_weight = ?, updated_at = NOW()
                WHERE user_id = ?
            ");
            $stmt->execute([$weight, $height, $age, $gender, $activityLevel, $goalWeight, $userId]);
        } else {
            // Insert
            $stmt = $pdo->prepare("
                INSERT INTO user_data (user_id, weight, height, age, gender, activity_level, goal_weight)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([$userId, $weight, $height, $age, $gender, $activityLevel, $goalWeight]);
        }

        echo json_encode([
            'success' => true,
            'message' => 'Datos guardados exitosamente'
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al procesar la solicitud: ' . $e->getMessage()
    ]);
}
?>
