<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Perfil - FitTrack';

// Get user info
$userId = getUserId();
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$userId]);
$user = $stmt->fetch();

$stmt = $pdo->prepare("SELECT * FROM user_data WHERE user_id = ?");
$stmt->execute([$userId]);
$userData = $stmt->fetch();

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Mi Perfil</h1>
        <p>Gestiona tu información personal</p>
    </div>

    <div class="grid grid-2">
        <!-- User Info -->
        <div class="card">
            <div class="card-header">
                <h2>Información Personal</h2>
            </div>
            <div class="card-body">
                <form id="profileForm">
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" value="<?php echo htmlspecialchars($user['name']); ?>" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="age">Edad</label>
                            <input type="number" id="age" value="<?php echo $userData['age'] ?? ''; ?>">
                        </div>
                        <div class="form-group">
                            <label for="gender">Género</label>
                            <select id="gender">
                                <option value="male" <?php echo ($userData['gender'] ?? '') === 'male' ? 'selected' : ''; ?>>Masculino</option>
                                <option value="female" <?php echo ($userData['gender'] ?? '') === 'female' ? 'selected' : ''; ?>>Femenino</option>
                                <option value="other" <?php echo ($userData['gender'] ?? '') === 'other' ? 'selected' : ''; ?>>Otro</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        Guardar Cambios
                    </button>
                </form>
            </div>
        </div>

        <!-- Physical Data -->
        <div class="card">
            <div class="card-header">
                <h2>Datos Físicos</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="weight">Peso Actual (kg)</label>
                    <input type="number" id="weight" step="0.1" value="<?php echo $userData['weight'] ?? ''; ?>">
                </div>
                <div class="form-group">
                    <label for="height">Altura (cm)</label>
                    <input type="number" id="height" step="0.1" value="<?php echo $userData['height'] ?? ''; ?>">
                </div>
                <div class="form-group">
                    <label for="goalWeight">Peso Objetivo (kg)</label>
                    <input type="number" id="goalWeight" step="0.1" value="<?php echo $userData['goal_weight'] ?? ''; ?>">
                </div>
                <div class="form-group">
                    <label for="activityLevel">Nivel de Actividad</label>
                    <select id="activityLevel">
                        <option value="sedentary" <?php echo ($userData['activity_level'] ?? '') === 'sedentary' ? 'selected' : ''; ?>>Sedentario</option>
                        <option value="light" <?php echo ($userData['activity_level'] ?? '') === 'light' ? 'selected' : ''; ?>>Ligero</option>
                        <option value="moderate" <?php echo ($userData['activity_level'] ?? '') === 'moderate' ? 'selected' : ''; ?>>Moderado</option>
                        <option value="active" <?php echo ($userData['activity_level'] ?? '') === 'active' ? 'selected' : ''; ?>>Activo</option>
                        <option value="veryActive" <?php echo ($userData['activity_level'] ?? '') === 'veryActive' ? 'selected' : ''; ?>>Muy Activo</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="savePhysicalData()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Guardar Datos Físicos
                </button>
            </div>
        </div>
    </div>

    <!-- Change Password -->
    <div class="card mt-4">
        <div class="card-header">
            <h2>Cambiar Contraseña</h2>
        </div>
        <div class="card-body">
            <form id="passwordForm">
                <div class="grid grid-3">
                    <div class="form-group">
                        <label for="currentPassword">Contraseña Actual</label>
                        <input type="password" id="currentPassword" required placeholder="••••••••">
                    </div>
                    <div class="form-group">
                        <label for="newPassword">Nueva Contraseña</label>
                        <input type="password" id="newPassword" required placeholder="••••••••" minlength="6">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirmar Contraseña</label>
                        <input type="password" id="confirmPassword" required placeholder="••••••••" minlength="6">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Cambiar Contraseña
                </button>
            </form>
        </div>
    </div>

    <!-- Account Stats -->
    <div class="card mt-4">
        <div class="card-header">
            <h2>Estadísticas de la Cuenta</h2>
        </div>
        <div class="card-body">
            <div class="grid grid-4">
                <div style="text-align: center; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">
                        <?php
                        $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM weekly_plan_recipes WHERE user_id = ?");
                        $stmt->execute([$userId]);
                        echo $stmt->fetch()['count'];
                        ?>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">Recetas en Plan</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--secondary);">
                        <?php
                        $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM weekly_plan_exercises WHERE user_id = ?");
                        $stmt->execute([$userId]);
                        echo $stmt->fetch()['count'];
                        ?>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">Ejercicios en Plan</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--info);">
                        <?php
                        $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM progress WHERE user_id = ?");
                        $stmt->execute([$userId]);
                        echo $stmt->fetch()['count'];
                        ?>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">Registros de Progreso</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--success);">
                        <?php
                        $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM shopping_list WHERE user_id = ?");
                        $stmt->execute([$userId]);
                        echo $stmt->fetch()['count'];
                        ?>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">Items en Lista</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.getElementById('profileForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Update user table
    const result = await API.post('api/user-update.php', {
        user_id: <?php echo getUserId(); ?>,
        name: name,
        email: email,
        age: age,
        gender: gender
    });

    if (result.success) {
        showAlert('Información actualizada', 'success');
        // Update displayed name if needed
        setTimeout(() => window.location.reload(), 1000);
    } else {
        showAlert(result.message || 'Error al actualizar la información', 'error');
    }
});

async function savePhysicalData() {
    const data = {
        user_id: <?php echo getUserId(); ?>,
        weight: parseFloat(document.getElementById('weight').value),
        height: parseFloat(document.getElementById('height').value),
        age: parseInt(document.getElementById('age').value),
        gender: document.getElementById('gender').value,
        activity_level: document.getElementById('activityLevel').value,
        goal_weight: parseFloat(document.getElementById('goalWeight').value)
    };

    const result = await API.post('api/user-data.php', data);

    if (result.success) {
        showAlert('Datos físicos actualizados', 'success');
        // Reload to update all views with new data
        setTimeout(() => window.location.reload(), 1000);
    } else {
        showAlert(result.message || 'Error al guardar los datos', 'error');
    }
}

document.getElementById('passwordForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (newPassword !== confirmPassword) {
        showAlert('Las contraseñas no coinciden', 'error');
        return;
    }

    // Validate password length
    if (newPassword.length < 6) {
        showAlert('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }

    const result = await API.post('api/change-password.php', {
        user_id: <?php echo getUserId(); ?>,
        current_password: currentPassword,
        new_password: newPassword
    });

    if (result.success) {
        showAlert('Contraseña cambiada exitosamente', 'success');
        document.getElementById('passwordForm').reset();
    } else {
        showAlert(result.message || 'Error al cambiar la contraseña', 'error');
    }
});
</script>

<?php include 'includes/footer.php'; ?>
