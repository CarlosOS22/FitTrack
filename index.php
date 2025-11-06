<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

// If already logged in, redirect to home
if (isLoggedIn()) {
    header('Location: home.php');
    exit;
}

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $result = login($pdo, $email, $password);

    if ($result['success']) {
        setUserSession($result['user']);
        header('Location: home.php');
        exit;
    } else {
        $error = $result['message'];
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitTrack - Iniciar Sesión</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="auth-page">
    <div class="auth-container">
        <div class="auth-box">
            <div class="auth-header">
                <h1>FitTrack</h1>
                <p>Tu aplicación de fitness y nutrición</p>
            </div>

            <?php if ($error): ?>
                <div class="alert alert-error">
                    <p><?php echo htmlspecialchars($error); ?></p>
                </div>
            <?php endif; ?>

            <form method="POST" class="auth-form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>"
                    >
                </div>

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="••••••••"
                    >
                </div>

                <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
            </form>

            <div class="auth-footer">
                <p>¿No tienes una cuenta? <a href="register.php">Regístrate aquí</a></p>
            </div>
        </div>
    </div>
</body>
</html>
