<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Recetas - FitTrack';

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Recetas Saludables</h1>
        <p>Descubre deliciosas recetas nutritivas para tu plan alimenticio</p>
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
                placeholder="Buscar recetas..."
            >
        </div>

        <div class="filter-select">
            <select id="categoryFilter">
                <option value="all">Todas las Categorías</option>
            </select>
        </div>

        <div class="filter-select">
            <select id="difficultyFilter">
                <option value="all">Todas las Dificultades</option>
                <option value="Muy Fácil">Muy Fácil</option>
                <option value="Fácil">Fácil</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
        </div>
    </div>

    <!-- Recipes Grid -->
    <div id="recipesGrid" class="grid grid-3">
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
        <div class="modal-body" id="modalRecipeContent">
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal('recipeModal')">Cerrar</button>
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
                <button class="btn btn-secondary" onclick="addRecipeToDay('Lunes')">Lunes</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Martes')">Martes</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Miércoles')">Miércoles</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Jueves')">Jueves</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Viernes')">Viernes</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Sábado')">Sábado</button>
                <button class="btn btn-secondary" onclick="addRecipeToDay('Domingo')">Domingo</button>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/recipes-data.js"></script>
<script>
let currentRecipe = null;

document.addEventListener('DOMContentLoaded', function() {
    // Populate category filter
    const categoryFilter = document.getElementById('categoryFilter');
    recipeCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Display all recipes initially
    displayRecipes(recipes);

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterRecipes);
    document.getElementById('categoryFilter').addEventListener('change', filterRecipes);
    document.getElementById('difficultyFilter').addEventListener('change', filterRecipes);
});

function filterRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const difficulty = document.getElementById('difficultyFilter').value;

    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) ||
                            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));
        const matchesCategory = category === 'all' || recipe.category === category;
        const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    displayRecipes(filtered);
}

function displayRecipes(recipesToDisplay) {
    const grid = document.getElementById('recipesGrid');

    if (recipesToDisplay.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1; padding: 3rem;">No se encontraron recetas</p>';
        return;
    }

    grid.innerHTML = recipesToDisplay.map(recipe => `
        <div class="item-card" onclick="showRecipeDetail(${recipe.id})">
            <div class="item-card-image" style="background-image: url('${recipe.image}'); background-size: cover; background-position: center;">
            </div>
            <div class="item-card-content">
                <div class="item-card-header">
                    <h3 class="item-card-title">${recipe.name}</h3>
                    <span class="item-card-category">${recipe.category}</span>
                </div>
                <div class="item-card-info">
                    <div class="info-item">
                        <span class="info-label">Calorías</span>
                        <span class="info-value">${recipe.calories} kcal</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Proteína</span>
                        <span class="info-value">${recipe.macros.protein}g</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Tiempo</span>
                        <span class="info-value">${recipe.prepTime} min</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Dificultad</span>
                        <span class="info-value">${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    currentRecipe = recipe;

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

function showAddToPlanOptions() {
    closeModal('recipeModal');
    openModal('addToPlanModal');
}

async function addRecipeToDay(day) {
    if (!currentRecipe) return;

    const result = await API.post('api/weekly-plan.php?action=add-recipe', {
        user_id: <?php echo getUserId(); ?>,
        day: day,
        recipe: currentRecipe
    });

    if (result.success) {
        showAlert(`Receta agregada al ${day}`, 'success');
        closeModal('addToPlanModal');
    } else {
        showAlert(result.message || 'Error al agregar la receta', 'error');
    }
}
</script>

<?php include 'includes/footer.php'; ?>
