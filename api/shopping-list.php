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

        $stmt = $pdo->prepare("SELECT * FROM shopping_list WHERE user_id = ? ORDER BY checked ASC, created_at DESC");
        $stmt->execute([$userId]);
        $shoppingList = $stmt->fetchAll();

        echo json_encode([
            'success' => true,
            'shoppingList' => $shoppingList
        ]);

    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();
        $ingredient = $data['ingredient'];
        $quantity = $data['quantity'] ?? '';
        $checked = $data['checked'] ?? false;

        $stmt = $pdo->prepare("
            INSERT INTO shopping_list (user_id, ingredient, quantity, checked)
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([$userId, $ingredient, $quantity, $checked]);

        echo json_encode([
            'success' => true,
            'message' => 'Ingrediente agregado a la lista'
        ]);

    } elseif ($method === 'PUT') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();
        $id = $data['id'];

        if (isset($data['checked'])) {
            $checked = $data['checked'] ? 1 : 0;
            $stmt = $pdo->prepare("UPDATE shopping_list SET checked = ? WHERE id = ? AND user_id = ?");
            $stmt->execute([$checked, $id, $userId]);
        }

        echo json_encode([
            'success' => true,
            'message' => 'Lista actualizada'
        ]);

    } elseif ($method === 'DELETE') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();
        $id = $data['id'];

        if ($id === 'all') {
            $stmt = $pdo->prepare("DELETE FROM shopping_list WHERE user_id = ?");
            $stmt->execute([$userId]);
        } else {
            $stmt = $pdo->prepare("DELETE FROM shopping_list WHERE id = ? AND user_id = ?");
            $stmt->execute([$id, $userId]);
        }

        echo json_encode([
            'success' => true,
            'message' => 'Item eliminado'
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al procesar la solicitud: ' . $e->getMessage()
    ]);
}
?>
