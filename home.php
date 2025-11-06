<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Inicio - FitTrack';

// Get user data
$userId = getUserId();
$stmt = $pdo->prepare("SELECT * FROM user_data WHERE user_id = ?");
$stmt->execute([$userId]);
$userData = $stmt->fetch();

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>¡Bienvenido, <?php echo htmlspecialchars(getUserName()); ?>!</h1>
        <p>Calcula tus necesidades calóricas y macronutrientes</p>
    </div>

    <!-- Macro Calculator -->
    <div class="card">
        <div class="card-header">
            <h2>Calculadora de Macros</h2>
        </div>
        <div class="card-body">
            <form id="macroForm" class="form">
                <div class="grid grid-2">
                    <div class="form-group">
                        <label for="weight">Peso (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            step="0.1"
                            required
                            placeholder="70"
                            value="<?php echo $userData['weight'] ?? ''; ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="height">Altura (cm)</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            step="0.1"
                            required
                            placeholder="170"
                            value="<?php echo $userData['height'] ?? ''; ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="age">Edad</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            placeholder="25"
                            value="<?php echo $userData['age'] ?? ''; ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="gender">Género</label>
                        <select id="gender" name="gender" required>
                            <option value="male" <?php echo ($userData['gender'] ?? '') === 'male' ? 'selected' : ''; ?>>Masculino</option>
                            <option value="female" <?php echo ($userData['gender'] ?? '') === 'female' ? 'selected' : ''; ?>>Femenino</option>
                            <option value="other" <?php echo ($userData['gender'] ?? '') === 'other' ? 'selected' : ''; ?>>Otro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="activityLevel">Nivel de Actividad</label>
                        <select id="activityLevel" name="activityLevel" required>
                            <option value="sedentary" <?php echo ($userData['activity_level'] ?? '') === 'sedentary' ? 'selected' : ''; ?>>Sedentario (poco o ningún ejercicio)</option>
                            <option value="light" <?php echo ($userData['activity_level'] ?? '') === 'light' ? 'selected' : ''; ?>>Ligero (ejercicio 1-3 días/semana)</option>
                            <option value="moderate" <?php echo ($userData['activity_level'] ?? '') === 'moderate' ? 'selected' : ''; ?>>Moderado (ejercicio 3-5 días/semana)</option>
                            <option value="active" <?php echo ($userData['activity_level'] ?? '') === 'active' ? 'selected' : ''; ?>>Activo (ejercicio 6-7 días/semana)</option>
                            <option value="veryActive" <?php echo ($userData['activity_level'] ?? '') === 'veryActive' ? 'selected' : ''; ?>>Muy Activo (ejercicio intenso diario)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="goal">Objetivo</label>
                        <select id="goal" name="goal" required>
                            <option value="lose">Perder peso</option>
                            <option value="maintain" selected>Mantener peso</option>
                            <option value="gain">Ganar peso/músculo</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="goalWeight">Peso Objetivo (kg)</label>
                        <input
                            type="number"
                            id="goalWeight"
                            name="goalWeight"
                            step="0.1"
                            placeholder="65"
                            value="<?php echo $userData['goal_weight'] ?? ''; ?>"
                        >
                    </div>
                </div>

                <div class="mt-3">
                    <button type="submit" class="btn btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        Calcular
                    </button>
                    <button type="button" id="saveDataBtn" class="btn btn-secondary" style="display: none;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        Guardar Datos
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Results -->
    <div id="resultsContainer" style="display: none;">
        <div class="grid grid-2 mt-4">
            <div class="card">
                <div class="card-header">
                    <h2>Calorías Diarias</h2>
                </div>
                <div class="card-body">
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; font-weight: 700; background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">
                            <span id="dailyCalories">0</span>
                        </div>
                        <p style="color: var(--text-secondary);">calorías por día</p>
                        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                            <p style="font-size: 0.875rem; color: var(--text-light);">
                                <strong>BMR:</strong> <span id="bmrValue">0</span> cal/día
                            </p>
                            <p style="font-size: 0.875rem; color: var(--text-light); margin-top: 0.5rem;">
                                <strong>TDEE:</strong> <span id="tdeeValue">0</span> cal/día
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2>Macronutrientes</h2>
                </div>
                <div class="card-body">
                    <div class="grid grid-3" style="text-align: center;">
                        <div>
                            <div style="font-size: 2rem; font-weight: 700; color: var(--primary);">
                                <span id="proteinValue">0</span>g
                            </div>
                            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.25rem;">Proteína</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; font-weight: 700; color: var(--secondary);">
                                <span id="carbsValue">0</span>g
                            </div>
                            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.25rem;">Carbohidratos</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; font-weight: 700; color: var(--warning);">
                                <span id="fatValue">0</span>g
                            </div>
                            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 0.25rem;">Grasas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-header">
                <h2>Recomendaciones</h2>
            </div>
            <div class="card-body">
                <div id="recommendationsText"></div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('macroForm');
    const resultsContainer = document.getElementById('resultsContainer');
    const saveDataBtn = document.getElementById('saveDataBtn');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = document.getElementById('activityLevel').value;
        const goal = document.getElementById('goal').value;
        const goalWeight = parseFloat(document.getElementById('goalWeight').value) || weight;

        // Calculate BMR
        const bmr = calculateBMR(weight, height, age, gender);

        // Calculate TDEE
        const tdee = calculateTDEE(bmr, activityLevel);

        // Calculate goal calories
        const dailyCalories = calculateGoalCalories(tdee, goal);

        // Calculate macros
        const macros = calculateMacros(dailyCalories, goal);

        // Display results
        document.getElementById('bmrValue').textContent = Math.round(bmr);
        document.getElementById('tdeeValue').textContent = Math.round(tdee);
        document.getElementById('dailyCalories').textContent = Math.round(dailyCalories);
        document.getElementById('proteinValue').textContent = macros.protein;
        document.getElementById('carbsValue').textContent = macros.carbs;
        document.getElementById('fatValue').textContent = macros.fat;

        // Show recommendations
        showRecommendations(goal, weight, goalWeight);

        resultsContainer.style.display = 'block';
        saveDataBtn.style.display = 'inline-flex';

        // Automatically save weight to progress
        await saveWeightToProgress(weight);

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    saveDataBtn.addEventListener('click', async function() {
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
            showAlert('Datos guardados exitosamente', 'success');
        } else {
            showAlert(result.message || 'Error al guardar los datos', 'error');
        }
    });

    function showRecommendations(goal, currentWeight, goalWeight) {
        const container = document.getElementById('recommendationsText');
        let html = '<div style="color: var(--text-secondary); line-height: 1.8;">';

        if (goal === 'lose') {
            const weightToLose = currentWeight - goalWeight;
            const weeks = Math.ceil(weightToLose / 0.5); // 0.5kg per week
            html += `
                <p><strong>🎯 Tu objetivo:</strong> Perder ${weightToLose.toFixed(1)} kg</p>
                <p><strong>⏱️ Tiempo estimado:</strong> ${weeks} semanas (pérdida saludable de 0.5kg/semana)</p>
                <p><strong>💪 Recomendaciones:</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    <li>Mantén un déficit calórico de 500 calorías diarias</li>
                    <li>Consume suficiente proteína para preservar masa muscular</li>
                    <li>Combina cardio con entrenamiento de fuerza</li>
                    <li>Mantente bien hidratado</li>
                    <li>Prioriza alimentos nutritivos y saciantes</li>
                </ul>
            `;
        } else if (goal === 'gain') {
            const weightToGain = goalWeight - currentWeight;
            const weeks = Math.ceil(weightToGain / 0.25); // 0.25kg per week
            html += `
                <p><strong>🎯 Tu objetivo:</strong> Ganar ${weightToGain.toFixed(1)} kg</p>
                <p><strong>⏱️ Tiempo estimado:</strong> ${weeks} semanas (ganancia saludable de 0.25kg/semana)</p>
                <p><strong>💪 Recomendaciones:</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    <li>Mantén un superávit calórico de 300 calorías diarias</li>
                    <li>Consume 1.6-2.2g de proteína por kg de peso corporal</li>
                    <li>Enfócate en entrenamiento de fuerza progresivo</li>
                    <li>Consume carbohidratos alrededor de tus entrenamientos</li>
                    <li>Descansa adecuadamente para la recuperación muscular</li>
                </ul>
            `;
        } else {
            html += `
                <p><strong>🎯 Tu objetivo:</strong> Mantener tu peso actual</p>
                <p><strong>💪 Recomendaciones:</strong></p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                    <li>Consume las calorías de tu TDEE</li>
                    <li>Mantén una dieta balanceada en macronutrientes</li>
                    <li>Realiza ejercicio regular para mantener tu composición corporal</li>
                    <li>Monitorea tu peso semanalmente para ajustar si es necesario</li>
                    <li>Enfócate en la calidad de los alimentos</li>
                </ul>
            `;
        }

        html += '</div>';
        container.innerHTML = html;
    }

    async function saveWeightToProgress(weight) {
        try {
            const progressData = {
                user_id: <?php echo getUserId(); ?>,
                date: new Date().toISOString().split('T')[0],
                weight: weight,
                body_fat: null,
                notes: 'Peso registrado automáticamente desde calculadora de macros'
            };

            const result = await API.post('api/progress.php', progressData);

            if (result.success) {
                showAlert('Peso guardado en progreso automáticamente', 'success');
            }
        } catch (error) {
            // Silent fail - don't interrupt the macro calculation
            console.error('Error saving weight to progress:', error);
        }
    }
});
</script>

<?php include 'includes/footer.php'; ?>
