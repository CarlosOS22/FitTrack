<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Plan Semanal - FitTrack';

// Get user data for calorie target
$userId = getUserId();
$stmt = $pdo->prepare("SELECT * FROM user_data WHERE user_id = ?");
$stmt->execute([$userId]);
$userData = $stmt->fetch();

include 'includes/header.php';
include 'includes/nav.php';
?>

<style>
.weekly-plan {
    display: grid;
    gap: 1.5rem;
}

.day-card {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
}

.day-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.day-title {
    font-size: 1.25rem;
    font-weight: 700;
}

.day-macros {
    font-size: 0.875rem;
    opacity: 0.9;
}

.day-content {
    padding: 1.5rem;
}

.section {
    margin-bottom: 1.5rem;
}

.section:last-child {
    margin-bottom: 0;
}

.section-title {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
}

.item-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.plan-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: var(--bg-secondary);
    border-radius: var(--radius);
    transition: var(--transition);
}

.plan-item:hover {
    background: var(--bg-tertiary);
}

.item-info {
    flex: 1;
    cursor: pointer;
}

.item-name {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.item-details {
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.item-actions {
    display: flex;
    gap: 0.5rem;
}

.empty-state {
    text-align: center;
    color: var(--text-secondary);
    padding: 2rem;
    font-size: 0.875rem;
}

.calories-summary {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 2px solid var(--primary);
}

.calories-summary::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.calories-bar {
    width: 100%;
    height: 30px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-full);
    overflow: hidden;
    position: relative;
}

.calories-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    transition: width 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
}

.calories-fill.over {
    background: linear-gradient(90deg, var(--error) 0%, var(--warning) 100%);
}

.macro-bars {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: var(--radius);
}

.macro-bar-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.macro-label {
    min-width: 100px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
}

.macro-progress {
    flex: 1;
    height: 20px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-full);
    overflow: hidden;
    position: relative;
}

.macro-progress-fill {
    height: 100%;
    transition: width 0.3s ease;
    border-radius: var(--radius-full);
}

.macro-progress-fill.protein {
    background: linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%);
}

.macro-progress-fill.carbs {
    background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%);
}

.macro-progress-fill.fat {
    background: linear-gradient(90deg, #ef4444 0%, #f87171 100%);
}

.macro-values {
    min-width: 120px;
    text-align: right;
    font-size: 0.75rem;
    color: var(--text-secondary);
}
</style>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Plan Semanal</h1>
        <p>Organiza tus comidas y entrenamientos para cada día</p>
    </div>

    <!-- Today's Summary -->
    <div class="calories-summary" id="todaySummary">
        <?php if ($userData && $userData['weight'] && $userData['height'] && $userData['age']): ?>
        <div style="border-bottom: 2px solid var(--border); padding-bottom: 1rem; margin-bottom: 1rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--primary);">
                📅 Resumen de Hoy - <span id="todayName"></span>
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.875rem;">
                Sigue añadiendo comidas para alcanzar tus objetivos diarios
            </p>
        </div>

        <div class="grid grid-2" style="gap: 1.5rem; margin-bottom: 1.5rem;">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span style="font-weight: 600;">Calorías</span>
                    <span style="font-size: 0.875rem; color: var(--text-secondary);">
                        <span id="todayCalories">0</span> / <span id="todayTargetCalories">0</span> kcal
                    </span>
                </div>
                <div class="calories-bar">
                    <div class="calories-fill" id="todayCaloriesFill" style="width: 0%;">
                        <span id="todayCaloriesPercent">0%</span>
                    </div>
                </div>
                <div style="margin-top: 0.5rem; text-align: center; font-weight: 600; color: var(--warning);" id="todayCaloriesRemaining">
                    Faltan 0 kcal
                </div>
            </div>

            <div class="grid grid-3" style="gap: 0.75rem;">
                <div style="text-align: center; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 1.25rem; font-weight: 700; color: #8b5cf6;" id="todayProtein">0</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">Proteína</div>
                    <div style="font-size: 0.7rem; color: var(--text-light); margin-top: 0.25rem;" id="todayProteinTarget">/ 0g</div>
                </div>
                <div style="text-align: center; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 1.25rem; font-weight: 700; color: #f59e0b;" id="todayCarbs">0</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">Carbos</div>
                    <div style="font-size: 0.7rem; color: var(--text-light); margin-top: 0.25rem;" id="todayCarbsTarget">/ 0g</div>
                </div>
                <div style="text-align: center; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius);">
                    <div style="font-size: 1.25rem; font-weight: 700; color: #ef4444;" id="todayFat">0</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">Grasas</div>
                    <div style="font-size: 0.7rem; color: var(--text-light); margin-top: 0.25rem;" id="todayFatTarget">/ 0g</div>
                </div>
            </div>
        </div>

        <div style="font-size: 0.875rem; color: var(--text-secondary); text-align: center;">
            <strong>Promedio Semanal:</strong> <span id="weeklyAverage">0</span> kcal
        </div>
        <?php else: ?>
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--primary);">
                Completa tu Perfil Primero
            </h3>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                Para ver tus objetivos diarios de calorías y macros, necesitas completar tu información básica (peso, altura, edad)
            </p>
            <a href="home.php" class="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                Calcular Mis Macros
            </a>
        </div>
        <?php endif; ?>
    </div>

    <div id="weeklyPlan" class="weekly-plan">
        <div class="loading"></div>
    </div>
</div>

<!-- Recipe Detail Modal -->
<div id="recipeModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="modalRecipeName"></h2>
            <button class="modal-close" onclick="closeModal('recipeModal')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="modal-body" id="modalRecipeContent"></div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('recipeModal')">Cerrar</button>
        </div>
    </div>
</div>

<!-- Exercise Detail Modal -->
<div id="exerciseModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="modalExerciseName"></h2>
            <button class="modal-close" onclick="closeModal('exerciseModal')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="modal-body" id="modalExerciseContent"></div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('exerciseModal')">Cerrar</button>
        </div>
    </div>
</div>

<script src="assets/js/recipes-data.js"></script>
<script src="assets/js/exercises-data.js"></script>
<script>
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let weeklyPlanData = {};
let targetCalories = 0;
let targetMacros = { protein: 0, carbs: 0, fat: 0 };

document.addEventListener('DOMContentLoaded', function() {
    // Calculate target calories
    <?php if ($userData): ?>
    const weight = <?php echo $userData['weight'] ?? 0; ?>;
    const height = <?php echo $userData['height'] ?? 0; ?>;
    const age = <?php echo $userData['age'] ?? 0; ?>;
    const gender = '<?php echo $userData['gender'] ?? 'male'; ?>';
    const activityLevel = '<?php echo $userData['activity_level'] ?? 'moderate'; ?>';

    if (weight && height && age) {
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = calculateTDEE(bmr, activityLevel);
        targetCalories = Math.round(tdee);

        // Calculate target macros (30% protein, 40% carbs, 30% fat)
        targetMacros = {
            protein: Math.round((targetCalories * 0.30) / 4),  // 4 cal per gram
            carbs: Math.round((targetCalories * 0.40) / 4),    // 4 cal per gram
            fat: Math.round((targetCalories * 0.30) / 9)       // 9 cal per gram
        };

        document.getElementById('todayTargetCalories').textContent = targetCalories;
        document.getElementById('todayProteinTarget').textContent = `/ ${targetMacros.protein}g`;
        document.getElementById('todayCarbsTarget').textContent = `/ ${targetMacros.carbs}g`;
        document.getElementById('todayFatTarget').textContent = `/ ${targetMacros.fat}g`;
    }
    <?php endif; ?>

    loadWeeklyPlan();

    // Auto-refresh every 30 seconds to keep counts updated
    setInterval(() => {
        loadWeeklyPlan();
    }, 30000);
});

async function loadWeeklyPlan() {
    const result = await API.get('api/weekly-plan.php?user_id=<?php echo getUserId(); ?>');

    if (result.success) {
        weeklyPlanData = result.weeklyPlan;
        displayWeeklyPlan();
        updateCaloriesSummary();
        updateTodaySummary();
    } else {
        showAlert('Error al cargar el plan semanal', 'error');
    }
}

function updateCaloriesSummary() {
    if (targetCalories === 0) return;

    // Calculate weekly average
    let totalCalories = 0;
    let daysWithMeals = 0;

    Object.values(weeklyPlanData).forEach(dayData => {
        if (dayData.recipes && dayData.recipes.length > 0) {
            const dayCalories = dayData.recipes.reduce((sum, r) => sum + (r.calories || 0), 0);
            totalCalories += dayCalories;
            daysWithMeals++;
        }
    });

    const weeklyAverage = daysWithMeals > 0 ? Math.round(totalCalories / daysWithMeals) : 0;
    document.getElementById('weeklyAverage').textContent = weeklyAverage;
}

function updateTodaySummary() {
    if (targetCalories === 0) return;

    // Get current day
    const today = new Date();
    const dayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dayMapping = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const todayName = dayMapping[dayIndex];

    document.getElementById('todayName').textContent = todayName;

    // Get today's data
    const todayData = weeklyPlanData[todayName] || { recipes: [], exercises: [] };
    const totalCalories = todayData.recipes.reduce((sum, r) => sum + (r.calories || 0), 0);
    const totalProtein = todayData.recipes.reduce((sum, r) => sum + (r.macros?.protein || 0), 0);
    const totalCarbs = todayData.recipes.reduce((sum, r) => sum + (r.macros?.carbs || 0), 0);
    const totalFat = todayData.recipes.reduce((sum, r) => sum + (r.macros?.fat || 0), 0);

    // Update calories
    document.getElementById('todayCalories').textContent = Math.round(totalCalories);
    const caloriesRemaining = Math.max(0, targetCalories - totalCalories);
    document.getElementById('todayCaloriesRemaining').textContent = caloriesRemaining > 0
        ? `Faltan ${caloriesRemaining} kcal`
        : '¡Objetivo alcanzado! ✓';

    if (caloriesRemaining === 0) {
        document.getElementById('todayCaloriesRemaining').style.color = 'var(--success)';
    } else {
        document.getElementById('todayCaloriesRemaining').style.color = 'var(--warning)';
    }

    // Update calories progress bar
    const caloriesPercent = targetCalories > 0 ? Math.min(100, Math.round((totalCalories / targetCalories) * 100)) : 0;
    const fill = document.getElementById('todayCaloriesFill');
    fill.style.width = caloriesPercent + '%';
    document.getElementById('todayCaloriesPercent').textContent = caloriesPercent + '%';

    if (caloriesPercent >= 100) {
        fill.classList.add('over');
    } else {
        fill.classList.remove('over');
    }

    // Update macros
    document.getElementById('todayProtein').textContent = Math.round(totalProtein) + 'g';
    document.getElementById('todayCarbs').textContent = Math.round(totalCarbs) + 'g';
    document.getElementById('todayFat').textContent = Math.round(totalFat) + 'g';
}

function displayWeeklyPlan() {
    const container = document.getElementById('weeklyPlan');

    container.innerHTML = days.map(day => {
        const dayData = weeklyPlanData[day] || { recipes: [], exercises: [] };
        const totalCalories = dayData.recipes.reduce((sum, r) => sum + (r.calories || 0), 0);
        const totalProtein = dayData.recipes.reduce((sum, r) => sum + (r.macros?.protein || 0), 0);
        const totalCarbs = dayData.recipes.reduce((sum, r) => sum + (r.macros?.carbs || 0), 0);
        const totalFat = dayData.recipes.reduce((sum, r) => sum + (r.macros?.fat || 0), 0);

        const remaining = targetCalories - totalCalories;
        const remainingProtein = targetMacros.protein - totalProtein;
        const remainingCarbs = targetMacros.carbs - totalCarbs;
        const remainingFat = targetMacros.fat - totalFat;

        const proteinPercent = targetMacros.protein > 0 ? Math.min(100, Math.round((totalProtein / targetMacros.protein) * 100)) : 0;
        const carbsPercent = targetMacros.carbs > 0 ? Math.min(100, Math.round((totalCarbs / targetMacros.carbs) * 100)) : 0;
        const fatPercent = targetMacros.fat > 0 ? Math.min(100, Math.round((totalFat / targetMacros.fat) * 100)) : 0;

        return `
            <div class="day-card">
                <div class="day-header">
                    <div>
                        <div class="day-title">${day}</div>
                        ${dayData.recipes.length > 0 ? `
                            <div class="day-macros">
                                ${totalCalories} kcal | P: ${Math.round(totalProtein)}g | C: ${Math.round(totalCarbs)}g | G: ${Math.round(totalFat)}g
                                ${targetCalories > 0 ? `<br>Restante: ${remaining > 0 ? remaining : 0} kcal` : ''}
                            </div>
                        ` : targetCalories > 0 ? `<div class="day-macros">Meta: ${targetCalories} kcal</div>` : ''}
                    </div>
                </div>
                <div class="day-content">
                    ${targetCalories > 0 ? `
                        <div class="macro-bars">
                            <div style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">
                                Objetivos Nutricionales Diarios
                            </div>
                            <div class="macro-bar-item">
                                <div class="macro-label">Proteína</div>
                                <div class="macro-progress">
                                    <div class="macro-progress-fill protein" style="width: ${proteinPercent}%;"></div>
                                </div>
                                <div class="macro-values">
                                    ${Math.round(totalProtein)}g / ${targetMacros.protein}g
                                    ${remainingProtein > 0 ? `<br><span style="color: var(--warning);">Faltan ${Math.round(remainingProtein)}g</span>` : ''}
                                </div>
                            </div>
                            <div class="macro-bar-item">
                                <div class="macro-label">Carbohidratos</div>
                                <div class="macro-progress">
                                    <div class="macro-progress-fill carbs" style="width: ${carbsPercent}%;"></div>
                                </div>
                                <div class="macro-values">
                                    ${Math.round(totalCarbs)}g / ${targetMacros.carbs}g
                                    ${remainingCarbs > 0 ? `<br><span style="color: var(--warning);">Faltan ${Math.round(remainingCarbs)}g</span>` : ''}
                                </div>
                            </div>
                            <div class="macro-bar-item">
                                <div class="macro-label">Grasas</div>
                                <div class="macro-progress">
                                    <div class="macro-progress-fill fat" style="width: ${fatPercent}%;"></div>
                                </div>
                                <div class="macro-values">
                                    ${Math.round(totalFat)}g / ${targetMacros.fat}g
                                    ${remainingFat > 0 ? `<br><span style="color: var(--warning);">Faltan ${Math.round(remainingFat)}g</span>` : ''}
                                </div>
                            </div>
                        </div>
                    ` : ''}

                    <div class="section">
                        <div class="section-title">🍽️ Comidas</div>
                        <div class="item-list" id="recipes-${day}">
                            ${dayData.recipes.length === 0 ? '<div class="empty-state">No hay comidas planificadas</div>' : ''}
                            ${dayData.recipes.map(recipe => `
                                <div class="plan-item">
                                    <div class="item-info" onclick="showRecipeDetail(${recipe.id})">
                                        <div class="item-name">${recipe.name}</div>
                                        <div class="item-details">
                                            ${recipe.calories} kcal | P: ${recipe.macros.protein}g | C: ${recipe.macros.carbs}g | G: ${recipe.macros.fat}g
                                        </div>
                                    </div>
                                    <div class="item-actions">
                                        <button class="btn btn-sm btn-secondary" onclick="showRecipeDetail(${recipe.id})" title="Ver detalles">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>
                                        <button class="btn btn-sm btn-danger" onclick="removeRecipe('${day}', ${recipe.db_id})" title="Eliminar">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">💪 Ejercicios</div>
                        <div class="item-list" id="exercises-${day}">
                            ${dayData.exercises.length === 0 ? '<div class="empty-state">No hay ejercicios planificados</div>' : ''}
                            ${dayData.exercises.map(exercise => `
                                <div class="plan-item">
                                    <div class="item-info" onclick="showExerciseDetail(${exercise.id})">
                                        <div class="item-name">${exercise.name}</div>
                                        <div class="item-details">
                                            ${exercise.sets} series × ${exercise.reps} reps | Descanso: ${exercise.restTime}s
                                        </div>
                                    </div>
                                    <div class="item-actions">
                                        <button class="btn btn-sm btn-secondary" onclick="showExerciseDetail(${exercise.id})" title="Ver detalles">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>
                                        <button class="btn btn-sm btn-danger" onclick="removeExercise('${day}', ${exercise.db_id})" title="Eliminar">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    document.getElementById('modalRecipeName').textContent = recipe.name;
    document.getElementById('modalRecipeContent').innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: var(--radius);">

            <div class="grid grid-4">
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">${recipe.calories}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Calorías</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--secondary);">${recipe.macros.protein}g</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Proteína</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--info);">${recipe.macros.carbs}g</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Carbohidratos</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--warning);">${recipe.macros.fat}g</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Grasas</div>
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 0.75rem; font-size: 1.125rem; font-weight: 600;">Ingredientes</h3>
                <ul style="list-style: disc; margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>

            <div>
                <h3 style="margin-bottom: 0.75rem; font-size: 1.125rem; font-weight: 600;">Instrucciones</h3>
                <ol style="list-style: decimal; margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>

            <div class="grid grid-3" style="padding-top: 1rem; border-top: 1px solid var(--border);">
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Categoría:</span>
                    <div style="font-weight: 600;">${recipe.category}</div>
                </div>
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Dificultad:</span>
                    <div style="font-weight: 600;">${recipe.difficulty}</div>
                </div>
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Tiempo:</span>
                    <div style="font-weight: 600;">${recipe.prepTime} minutos</div>
                </div>
            </div>
        </div>
    `;

    openModal('recipeModal');
}

function showExerciseDetail(exerciseId) {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    document.getElementById('modalExerciseName').textContent = exercise.name;
    document.getElementById('modalExerciseContent').innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <img src="${exercise.gifUrl}"
                 alt="${exercise.name}"
                 style="width: 100%; max-height: 400px; object-fit: contain; border-radius: var(--radius); background: var(--bg-tertiary);"
                 onerror="this.onerror=null; this.src='${exercise.image}';">

            <p style="color: var(--text-secondary); line-height: 1.8;">${exercise.description}</p>

            <div class="grid grid-4">
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">${exercise.sets}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Series</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--secondary);">${exercise.reps}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Repeticiones</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--info);">${exercise.restTime}s</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Descanso</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--warning);">${exercise.difficulty}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">Dificultad</div>
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 0.75rem; font-size: 1.125rem; font-weight: 600;">Instrucciones</h3>
                <ol style="list-style: decimal; margin-left: 1.5rem; color: var(--text-secondary); line-height: 1.8;">
                    ${exercise.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>

            <div class="grid grid-3" style="padding-top: 1rem; border-top: 1px solid var(--border);">
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Grupo Muscular:</span>
                    <div style="font-weight: 600;">${exercise.muscleGroup}</div>
                </div>
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Equipamiento:</span>
                    <div style="font-weight: 600;">${exercise.equipment}</div>
                </div>
                <div>
                    <span style="font-size: 0.875rem; color: var(--text-light);">Dificultad:</span>
                    <div style="font-weight: 600;">${exercise.difficulty}</div>
                </div>
            </div>
        </div>
    `;

    openModal('exerciseModal');
}

async function removeRecipe(day, dbId) {
    if (!confirm('¿Estás seguro de eliminar esta receta?')) return;

    const result = await API.delete('api/weekly-plan.php?action=remove-recipe', {
        user_id: <?php echo getUserId(); ?>,
        db_id: dbId
    });

    if (result.success) {
        showAlert('Receta eliminada', 'success');
        loadWeeklyPlan();
    } else {
        showAlert(result.message || 'Error al eliminar la receta', 'error');
    }
}

async function removeExercise(day, dbId) {
    if (!confirm('¿Estás seguro de eliminar este ejercicio?')) return;

    const result = await API.delete('api/weekly-plan.php?action=remove-exercise', {
        user_id: <?php echo getUserId(); ?>,
        db_id: dbId
    });

    if (result.success) {
        showAlert('Ejercicio eliminado', 'success');
        loadWeeklyPlan();
    } else {
        showAlert(result.message || 'Error al eliminar el ejercicio', 'error');
    }
}
</script>

<?php include 'includes/footer.php'; ?>
