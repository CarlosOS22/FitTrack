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
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirm_password'] ?? '';
    $age = $_POST['age'] ?? null;
    $gender = $_POST['gender'] ?? 'other';

    if ($password !== $confirmPassword) {
        $error = 'Las contraseñas no coinciden';
    } else {
        $result = register($pdo, $name, $email, $password, $age, $gender);

        if ($result['success']) {
            setUserSession($result['user']);
            header('Location: home.php');
            exit;
        } else {
            $error = $result['message'];
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitTrack - Registro</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="auth-page">
    <div class="auth-container">
        <div class="auth-box">
            <div class="auth-header">
                <h1>FitTrack</h1>
                <p>Crea tu cuenta</p>
            </div>

            <?php if ($error): ?>
                <div class="alert alert-error">
                    <p><?php echo htmlspecialchars($error); ?></p>
                </div>
            <?php endif; ?>

            <form method="POST" class="auth-form">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Tu nombre"
                        value="<?php echo isset($_POST['name']) ? htmlspecialchars($_POST['name']) : ''; ?>"
                    >
                </div>

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

                <div class="form-row">
                    <div class="form-group">
                        <label for="age">Edad</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            min="13"
                            max="120"
                            placeholder="25"
                            value="<?php echo isset($_POST['age']) ? htmlspecialchars($_POST['age']) : ''; ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="gender">Género</label>
                        <select id="gender" name="gender">
                            <option value="male" <?php echo (isset($_POST['gender']) && $_POST['gender'] === 'male') ? 'selected' : ''; ?>>Masculino</option>
                            <option value="female" <?php echo (isset($_POST['gender']) && $_POST['gender'] === 'female') ? 'selected' : ''; ?>>Femenino</option>
                            <option value="other" <?php echo (isset($_POST['gender']) && $_POST['gender'] === 'other') ? 'selected' : ''; ?>>Otro</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minlength="6"
                        placeholder="••••••••"
                    >
                </div>

                <div class="form-group">
                    <label for="confirm_password">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        required
                        minlength="6"
                        placeholder="••••••••"
                    >
                </div>

                <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
            </form>

            <div class="auth-footer">
                <p>¿Ya tienes una cuenta? <a href="index.php">Inicia sesión aquí</a></p>
            </div>
        </div>
    </div>
</body>
</html>
