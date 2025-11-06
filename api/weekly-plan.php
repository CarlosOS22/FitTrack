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

        // Get recipes
        $stmt = $pdo->prepare("SELECT * FROM weekly_plan_recipes WHERE user_id = ? ORDER BY FIELD(day, 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo')");
        $stmt->execute([$userId]);
        $recipes = $stmt->fetchAll();

        // Get exercises
        $stmt = $pdo->prepare("SELECT * FROM weekly_plan_exercises WHERE user_id = ? ORDER BY FIELD(day, 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo')");
        $stmt->execute([$userId]);
        $exercises = $stmt->fetchAll();

        // Organize by day
        $weeklyPlan = [];
        $days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

        foreach ($days as $day) {
            $weeklyPlan[$day] = [
                'recipes' => [],
                'exercises' => []
            ];
        }

        foreach ($recipes as $recipe) {
            $recipeData = json_decode($recipe['recipe_data'], true);
            $recipeData['db_id'] = $recipe['id'];
            $weeklyPlan[$recipe['day']]['recipes'][] = $recipeData;
        }

        foreach ($exercises as $exercise) {
            $exerciseData = json_decode($exercise['exercise_data'], true);
            $exerciseData['db_id'] = $exercise['id'];
            $weeklyPlan[$exercise['day']]['exercises'][] = $exerciseData;
        }

        echo json_encode([
            'success' => true,
            'weeklyPlan' => $weeklyPlan
        ]);

    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();

        if ($action === 'add-recipe') {
            $day = $data['day'];
            $recipe = $data['recipe'];

            $stmt = $pdo->prepare("
                INSERT INTO weekly_plan_recipes (user_id, day, recipe_id, recipe_name, recipe_data)
                VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([
                $userId,
                $day,
                $recipe['id'],
                $recipe['name'],
                json_encode($recipe)
            ]);

            echo json_encode([
                'success' => true,
                'message' => 'Receta agregada al plan semanal'
            ]);

        } elseif ($action === 'add-exercise') {
            $day = $data['day'];
            $exercise = $data['exercise'];

            $stmt = $pdo->prepare("
                INSERT INTO weekly_plan_exercises (user_id, day, exercise_id, exercise_name, exercise_data)
                VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([
                $userId,
                $day,
                $exercise['id'],
                $exercise['name'],
                json_encode($exercise)
            ]);

            echo json_encode([
                'success' => true,
                'message' => 'Ejercicio agregado al plan semanal'
            ]);
        }

    } elseif ($method === 'DELETE') {
        $data = json_decode(file_get_contents('php://input'), true);
        $userId = $data['user_id'] ?? getUserId();

        if ($action === 'remove-recipe') {
            $dbId = $data['db_id'];
            $stmt = $pdo->prepare("DELETE FROM weekly_plan_recipes WHERE id = ? AND user_id = ?");
            $stmt->execute([$dbId, $userId]);

            echo json_encode([
                'success' => true,
                'message' => 'Receta eliminada del plan semanal'
            ]);

        } elseif ($action === 'remove-exercise') {
            $dbId = $data['db_id'];
            $stmt = $pdo->prepare("DELETE FROM weekly_plan_exercises WHERE id = ? AND user_id = ?");
            $stmt->execute([$dbId, $userId]);

            echo json_encode([
                'success' => true,
                'message' => 'Ejercicio eliminado del plan semanal'
            ]);
        }
    }

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al procesar la solicitud: ' . $e->getMessage()
    ]);
}
?>
