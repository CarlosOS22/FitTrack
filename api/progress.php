<?php
require_once '../includes/config.php';
require_once '../includes/auth.php';

header('Content-Type: application/json');

if (!isLoggedIn()) {
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

try {
    if ($method === 'GET') {
        $userId = $_GET['user_id'] ?? getUserId();

        $stmt = $pdo->prepare("SELECT * FROM progress WHERE user_id = ? ORDER BY date DESC");
        $stmt->execute([$userId]);
        $progress = $stmt->fetchAll();

        echo json_encode([
            'success' => true,
            'progress' => $progress
        ]);

    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();

        if ($action === 'update') {
            $progressId = $data['progress_id'];
            $date = $data['date'];
            $weight = $data['weight'];
            $bodyFat = $data['body_fat'] ?? null;
            $notes = $data['notes'] ?? '';

            $stmt = $pdo->prepare("
                UPDATE progress
                SET date = ?, weight = ?, body_fat = ?, notes = ?
                WHERE id = ? AND user_id = ?
            ");
            $stmt->execute([$date, $weight, $bodyFat, $notes, $progressId, $userId]);

            echo json_encode([
                'success' => true,
                'message' => 'Progreso actualizado'
            ]);
        } else {
            $date = $data['date'];
            $weight = $data['weight'];
            $bodyFat = $data['body_fat'] ?? null;
            $notes = $data['notes'] ?? '';

            $stmt = $pdo->prepare("
                INSERT INTO progress (user_id, date, weight, body_fat, notes)
                VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([$userId, $date, $weight, $bodyFat, $notes]);

            echo json_encode([
                'success' => true,
                'message' => 'Progreso registrado'
            ]);
        }

    } elseif ($method === 'DELETE') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();
        $progressId = $data['progress_id'];

        $stmt = $pdo->prepare("DELETE FROM progress WHERE id = ? AND user_id = ?");
        $stmt->execute([$progressId, $userId]);

        echo json_encode([
            'success' => true,
            'message' => 'Progreso eliminado'
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al procesar la solicitud: ' . $e->getMessage()
    ]);
}
?>
