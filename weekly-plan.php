<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Plan Semanal - FitTrack';

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
</style>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Plan Semanal</h1>
        <p>Organiza tus comidas y entrenamientos para cada día</p>
    </div>

    <div id="weeklyPlan" class="weekly-plan">
        <div class="loading"></div>
    </div>
</div>

<script>
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let weeklyPlanData = {};

document.addEventListener('DOMContentLoaded', function() {
    loadWeeklyPlan();
});

async function loadWeeklyPlan() {
    const result = await API.get('api/weekly-plan.php?user_id=<?php echo getUserId(); ?>');

    if (result.success) {
        weeklyPlanData = result.weeklyPlan;
        displayWeeklyPlan();
    } else {
        showAlert('Error al cargar el plan semanal', 'error');
    }
}

function displayWeeklyPlan() {
    const container = document.getElementById('weeklyPlan');

    container.innerHTML = days.map(day => {
        const dayData = weeklyPlanData[day] || { recipes: [], exercises: [] };
        const totalCalories = dayData.recipes.reduce((sum, r) => sum + (r.calories || 0), 0);
        const totalProtein = dayData.recipes.reduce((sum, r) => sum + (r.macros?.protein || 0), 0);

        return `
            <div class="day-card">
                <div class="day-header">
                    <div>
                        <div class="day-title">${day}</div>
                        ${dayData.recipes.length > 0 ? `
                            <div class="day-macros">
                                ${totalCalories} kcal | ${totalProtein}g proteína
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="day-content">
                    <div class="section">
                        <div class="section-title">🍽️ Comidas</div>
                        <div class="item-list" id="recipes-${day}">
                            ${dayData.recipes.length === 0 ? '<div class="empty-state">No hay comidas planificadas</div>' : ''}
                            ${dayData.recipes.map(recipe => `
                                <div class="plan-item">
                                    <div class="item-info">
                                        <div class="item-name">${recipe.name}</div>
                                        <div class="item-details">
                                            ${recipe.calories} kcal | P: ${recipe.macros.protein}g | C: ${recipe.macros.carbs}g | G: ${recipe.macros.fat}g
                                        </div>
                                    </div>
                                    <div class="item-actions">
                                        <button class="btn btn-sm btn-danger" onclick="removeRecipe('${day}', ${recipe.db_id})">
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
                                    <div class="item-info">
                                        <div class="item-name">${exercise.name}</div>
                                        <div class="item-details">
                                            ${exercise.sets} series × ${exercise.reps} reps | Descanso: ${exercise.restTime}s
                                        </div>
                                    </div>
                                    <div class="item-actions">
                                        <button class="btn btn-sm btn-danger" onclick="removeExercise('${day}', ${exercise.db_id})">
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
