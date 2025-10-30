<?php
require_once '../config/cors.php';
require_once '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$database = new Database();
$db = $database->getConnection();

if (!$db) {
    http_response_code(500);
    echo json_encode(array("success" => false, "message" => "Error de conexión a la base de datos"));
    exit();
}

// OBTENER PLAN SEMANAL
if ($method === 'GET') {
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

    if (!$user_id) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "ID de usuario requerido"));
        exit();
    }

    // Obtener recetas
    $query_recipes = "SELECT * FROM weekly_plan_recipes WHERE user_id = :user_id ORDER BY day, id";
    $stmt_recipes = $db->prepare($query_recipes);
    $stmt_recipes->bindParam(":user_id", $user_id);
    $stmt_recipes->execute();
    $recipes = $stmt_recipes->fetchAll(PDO::FETCH_ASSOC);

    // Obtener ejercicios
    $query_exercises = "SELECT * FROM weekly_plan_exercises WHERE user_id = :user_id ORDER BY day, id";
    $stmt_exercises = $db->prepare($query_exercises);
    $stmt_exercises->bindParam(":user_id", $user_id);
    $stmt_exercises->execute();
    $exercises = $stmt_exercises->fetchAll(PDO::FETCH_ASSOC);

    // Organizar por día
    $weeklyPlan = array(
        'Lunes' => array('recipes' => array(), 'exercises' => array()),
        'Martes' => array('recipes' => array(), 'exercises' => array()),
        'Miércoles' => array('recipes' => array(), 'exercises' => array()),
        'Jueves' => array('recipes' => array(), 'exercises' => array()),
        'Viernes' => array('recipes' => array(), 'exercises' => array()),
        'Sábado' => array('recipes' => array(), 'exercises' => array()),
        'Domingo' => array('recipes' => array(), 'exercises' => array())
    );

    foreach ($recipes as $recipe) {
        $recipe['recipe_data'] = json_decode($recipe['recipe_data'], true);
        $weeklyPlan[$recipe['day']]['recipes'][] = $recipe;
    }

    foreach ($exercises as $exercise) {
        $exercise['exercise_data'] = json_decode($exercise['exercise_data'], true);
        $weeklyPlan[$exercise['day']]['exercises'][] = $exercise;
    }

    http_response_code(200);
    echo json_encode(array("success" => true, "weeklyPlan" => $weeklyPlan));
}

// AÑADIR RECETA AL PLAN
elseif ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/add-recipe') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->day) || empty($data->recipe)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "INSERT INTO weekly_plan_recipes (user_id, day, recipe_id, recipe_name, recipe_data)
              VALUES (:user_id, :day, :recipe_id, :recipe_name, :recipe_data)";
    $stmt = $db->prepare($query);

    $recipe_data_json = json_encode($data->recipe);

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":day", $data->day);
    $stmt->bindParam(":recipe_id", $data->recipe->id);
    $stmt->bindParam(":recipe_name", $data->recipe->name);
    $stmt->bindParam(":recipe_data", $recipe_data_json);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("success" => true, "message" => "Receta añadida al plan"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al añadir receta"));
    }
}

// AÑADIR EJERCICIO AL PLAN
elseif ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/add-exercise') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->day) || empty($data->exercise)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "INSERT INTO weekly_plan_exercises (user_id, day, exercise_id, exercise_name, exercise_data)
              VALUES (:user_id, :day, :exercise_id, :exercise_name, :exercise_data)";
    $stmt = $db->prepare($query);

    $exercise_data_json = json_encode($data->exercise);

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":day", $data->day);
    $stmt->bindParam(":exercise_id", $data->exercise->id);
    $stmt->bindParam(":exercise_name", $data->exercise->name);
    $stmt->bindParam(":exercise_data", $exercise_data_json);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("success" => true, "message" => "Ejercicio añadido al plan"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al añadir ejercicio"));
    }
}

// ELIMINAR RECETA DEL PLAN
elseif ($method === 'DELETE' && strpos($_SERVER['REQUEST_URI'], '/remove-recipe') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->day) || empty($data->recipe_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "DELETE FROM weekly_plan_recipes WHERE user_id = :user_id AND day = :day AND id = :id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":day", $data->day);
    $stmt->bindParam(":id", $data->recipe_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Receta eliminada del plan"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al eliminar receta"));
    }
}

// ELIMINAR EJERCICIO DEL PLAN
elseif ($method === 'DELETE' && strpos($_SERVER['REQUEST_URI'], '/remove-exercise') !== false) {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->user_id) || empty($data->day) || empty($data->exercise_id)) {
        http_response_code(400);
        echo json_encode(array("success" => false, "message" => "Datos incompletos"));
        exit();
    }

    $query = "DELETE FROM weekly_plan_exercises WHERE user_id = :user_id AND day = :day AND id = :id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":day", $data->day);
    $stmt->bindParam(":id", $data->exercise_id);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Ejercicio eliminado del plan"));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error al eliminar ejercicio"));
    }
}

else {
    http_response_code(404);
    echo json_encode(array("success" => false, "message" => "Endpoint no encontrado"));
}
?>
