<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Ejercicios - FitTrack';

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Biblioteca de Ejercicios</h1>
        <p>Encuentra los mejores ejercicios para tu rutina de entrenamiento</p>
    </div>

    <!-- Filters -->
    <div class="filters">
        <div class="search-box">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
                type="text"
                id="searchInput"
                placeholder="Buscar ejercicios..."
            >
        </div>

        <div class="filter-select">
            <select id="muscleFilter">
                <option value="all">Todos los Grupos Musculares</option>
            </select>
        </div>

        <div class="filter-select">
            <select id="difficultyFilter">
                <option value="all">Todas las Dificultades</option>
                <option value="Fácil">Fácil</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
        </div>
    </div>

    <!-- Exercises Grid -->
    <div id="exercisesGrid" class="grid grid-3">
        <div class="loading"></div>
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
        <div class="modal-body" id="modalExerciseContent">
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('exerciseModal')">Cerrar</button>
            <button class="btn btn-primary" onclick="showAddToPlanOptions()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Agregar al Plan
            </button>
        </div>
    </div>
</div>

<!-- Add to Plan Modal -->
<div id="addToPlanModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Agregar al Plan Semanal</h2>
            <button class="modal-close" onclick="closeModal('addToPlanModal')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="modal-body">
            <p style="margin-bottom: 1rem; color: var(--text-secondary);">Selecciona el día de la semana:</p>
            <div class="grid grid-2" style="gap: 0.75rem;">
                <button class="btn btn-secondary" onclick="addExerciseToDay('Lunes')">Lunes</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Martes')">Martes</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Miércoles')">Miércoles</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Jueves')">Jueves</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Viernes')">Viernes</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Sábado')">Sábado</button>
                <button class="btn btn-secondary" onclick="addExerciseToDay('Domingo')">Domingo</button>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/exercises-data.js"></script>
<script>
let currentExercise = null;

document.addEventListener('DOMContentLoaded', function() {
    // Populate muscle group filter
    const muscleFilter = document.getElementById('muscleFilter');
    muscleGroups.forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = group;
        muscleFilter.appendChild(option);
    });

    // Display all exercises initially
    displayExercises(exercises);

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterExercises);
    document.getElementById('muscleFilter').addEventListener('change', filterExercises);
    document.getElementById('difficultyFilter').addEventListener('change', filterExercises);
});

function filterExercises() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const muscleGroup = document.getElementById('muscleFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;

    const filtered = exercises.filter(exercise => {
        const matchesSearch = exercise.name.toLowerCase().includes(searchTerm) ||
                            exercise.description.toLowerCase().includes(searchTerm);
        const matchesMuscle = muscleGroup === 'all' || exercise.muscleGroup === muscleGroup;
        const matchesDifficulty = difficulty === 'all' || exercise.difficulty === difficulty;

        return matchesSearch && matchesMuscle && matchesDifficulty;
    });

    displayExercises(filtered);
}

function displayExercises(exercisesToDisplay) {
    const grid = document.getElementById('exercisesGrid');

    if (exercisesToDisplay.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1; padding: 3rem;">No se encontraron ejercicios</p>';
        return;
    }

    grid.innerHTML = exercisesToDisplay.map(exercise => `
        <div class="item-card" onclick="showExerciseDetail(${exercise.id})">
            <div class="item-card-image" style="background-image: url('${exercise.image}'); background-size: cover; background-position: center;">
            </div>
            <div class="item-card-content">
                <div class="item-card-header">
                    <h3 class="item-card-title">${exercise.name}</h3>
                    <span class="item-card-category">${exercise.muscleGroup}</span>
                </div>
                <div class="item-card-info">
                    <div class="info-item">
                        <span class="info-label">Series</span>
                        <span class="info-value">${exercise.sets}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Reps</span>
                        <span class="info-value">${exercise.reps}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Descanso</span>
                        <span class="info-value">${exercise.restTime}s</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Dificultad</span>
                        <span class="info-value">${exercise.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function showExerciseDetail(exerciseId) {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    currentExercise = exercise;

    document.getElementById('modalExerciseName').textContent = exercise.name;
    document.getElementById('modalExerciseContent').innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <img src="${exercise.gifUrl}" alt="${exercise.name}" style="width: 100%; max-height: 400px; object-fit: contain; border-radius: var(--radius); background: var(--bg-tertiary);">

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

function showAddToPlanOptions() {
    closeModal('exerciseModal');
    openModal('addToPlanModal');
}

async function addExerciseToDay(day) {
    if (!currentExercise) return;

    const result = await API.post('api/weekly-plan.php?action=add-exercise', {
        user_id: <?php echo getUserId(); ?>,
        day: day,
        exercise: currentExercise
    });

    if (result.success) {
        showAlert(`Ejercicio agregado al ${day}`, 'success');
        closeModal('addToPlanModal');
    } else {
        showAlert(result.message || 'Error al agregar el ejercicio', 'error');
    }
}
</script>

<?php include 'includes/footer.php'; ?>
