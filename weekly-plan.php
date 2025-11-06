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
    box-shadow: var(--shadow);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
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
</style>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Plan Semanal</h1>
        <p>Organiza tus comidas y entrenamientos para cada día</p>
    </div>

    <!-- Calories Summary -->
    <div class="calories-summary" id="caloriesSummary" style="display: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.25rem;">Objetivo Calórico Diario</h3>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">Meta: <span id="targetCalories">0</span> kcal</p>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">
                    <span id="weeklyAverage">0</span> kcal
                </div>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">Promedio Semanal</p>
            </div>
        </div>
        <div class="calories-bar">
            <div class="calories-fill" id="caloriesFill" style="width: 0%;">
                <span id="caloriesPercent">0%</span>
            </div>
        </div>
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
        document.getElementById('targetCalories').textContent = targetCalories;
        document.getElementById('caloriesSummary').style.display = 'block';
    }
    <?php endif; ?>

    loadWeeklyPlan();
});

async function loadWeeklyPlan() {
    const result = await API.get('api/weekly-plan.php?user_id=<?php echo getUserId(); ?>');

    if (result.success) {
        weeklyPlanData = result.weeklyPlan;
        displayWeeklyPlan();
        updateCaloriesSummary();
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

    // Update progress bar
    const percentage = targetCalories > 0 ? Math.round((weeklyAverage / targetCalories) * 100) : 0;
    const fill = document.getElementById('caloriesFill');
    fill.style.width = Math.min(percentage, 100) + '%';
    document.getElementById('caloriesPercent').textContent = percentage + '%';

    if (percentage > 100) {
        fill.classList.add('over');
    } else {
        fill.classList.remove('over');
    }
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
