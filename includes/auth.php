<?php
// Authentication functions

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: ' . BASE_URL . 'index.php');
        exit;
    }
}

function getUserId() {
    return $_SESSION['user_id'] ?? null;
}

function getUserName() {
    return $_SESSION['user_name'] ?? '';
}

function getUserEmail() {
    return $_SESSION['user_email'] ?? '';
}

function setUserSession($user) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_name'] = $user['name'];
    $_SESSION['user_email'] = $user['email'];
}

function clearUserSession() {
    unset($_SESSION['user_id']);
    unset($_SESSION['user_name']);
    unset($_SESSION['user_email']);
    session_destroy();
}

function register($pdo, $name, $email, $password, $age, $gender) {
    // Validate input
    if (empty($name) || empty($email) || empty($password)) {
        return ['success' => false, 'message' => 'Todos los campos son requeridos'];
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['success' => false, 'message' => 'Email inválido'];
    }

    if (strlen($password) < 6) {
        return ['success' => false, 'message' => 'La contraseña debe tener al menos 6 caracteres'];
    }

    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        return ['success' => false, 'message' => 'El email ya está registrado'];
    }

    // Create user
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, age, gender, created_at) VALUES (?, ?, ?, ?, ?, NOW())");

    try {
        $stmt->execute([$name, $email, $hashedPassword, $age, $gender]);
        $userId = $pdo->lastInsertId();

        return [
            'success' => true,
            'message' => 'Usuario registrado exitosamente',
            'user' => [
                'id' => $userId,
                'name' => $name,
                'email' => $email
            ]
        ];
    } catch (PDOException $e) {
        return ['success' => false, 'message' => 'Error al registrar usuario'];
    }
}

function login($pdo, $email, $password) {
    if (empty($email) || empty($password)) {
        return ['success' => false, 'message' => 'Todos los campos son requeridos'];
    }

    $stmt = $pdo->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user) {
        return ['success' => false, 'message' => 'Credenciales inválidas'];
    }

    if (!password_verify($password, $user['password'])) {
        return ['success' => false, 'message' => 'Credenciales inválidas'];
    }

    return [
        'success' => true,
        'message' => 'Login exitoso',
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ]
    ];
}
?>
