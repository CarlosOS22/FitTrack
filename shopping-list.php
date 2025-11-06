<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Lista de Compras - FitTrack';

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Lista de Compras</h1>
        <p>Genera tu lista de compras basada en tu plan semanal</p>
    </div>

    <div class="grid grid-2">
        <!-- Shopping List -->
        <div class="card">
            <div class="card-header">
                <h2>Mi Lista</h2>
                <button class="btn btn-sm btn-secondary" onclick="generateFromWeeklyPlan()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                    Generar desde Plan
                </button>
            </div>
            <div class="card-body">
                <div id="shoppingList">
                    <div class="loading"></div>
                </div>
            </div>
        </div>

        <!-- Add Item Form -->
        <div class="card">
            <div class="card-header">
                <h2>Agregar Ingrediente</h2>
            </div>
            <div class="card-body">
                <form id="addItemForm">
                    <div class="form-group">
                        <label for="ingredient">Ingrediente</label>
                        <input type="text" id="ingredient" required placeholder="Ej: Pollo, arroz...">
                    </div>
                    <div class="form-group">
                        <label for="quantity">Cantidad</label>
                        <input type="text" id="quantity" placeholder="Ej: 500g, 2 unidades...">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Agregar
                    </button>
                </form>

                <button class="btn btn-danger btn-block mt-3" onclick="clearList()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Limpiar Lista
                </button>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/recipes-data.js"></script>
<script>
let shoppingListData = [];

document.addEventListener('DOMContentLoaded', function() {
    loadShoppingList();

    document.getElementById('addItemForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const data = {
            user_id: <?php echo getUserId(); ?>,
            ingredient: document.getElementById('ingredient').value,
            quantity: document.getElementById('quantity').value,
            checked: false
        };

        const result = await API.post('api/shopping-list.php', data);

        if (result.success) {
            showAlert('Ingrediente agregado', 'success');
            document.getElementById('addItemForm').reset();
            loadShoppingList();
        } else {
            showAlert(result.message || 'Error al agregar ingrediente', 'error');
        }
    });
});

async function loadShoppingList() {
    const result = await API.get('api/shopping-list.php?user_id=<?php echo getUserId(); ?>');

    if (result.success) {
        shoppingListData = result.shoppingList;
        displayShoppingList();
    } else {
        showAlert('Error al cargar la lista', 'error');
    }
}

function displayShoppingList() {
    const container = document.getElementById('shoppingList');

    if (shoppingListData.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">La lista está vacía</p>';
        return;
    }

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${shoppingListData.map(item => `
                <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius); ${item.checked ? 'opacity: 0.6;' : ''}">
                    <input
                        type="checkbox"
                        ${item.checked ? 'checked' : ''}
                        onchange="toggleItem(${item.id}, this.checked)"
                        style="width: 18px; height: 18px; cursor: pointer;"
                    >
                    <div style="flex: 1; ${item.checked ? 'text-decoration: line-through;' : ''}">
                        <div style="font-weight: 600; color: var(--text-primary);">${item.ingredient}</div>
                        ${item.quantity ? `<div style="font-size: 0.875rem; color: var(--text-secondary);">${item.quantity}</div>` : ''}
                    </div>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

async function toggleItem(id, checked) {
    const result = await API.put('api/shopping-list.php', {
        user_id: <?php echo getUserId(); ?>,
        id: id,
        checked: checked
    });

    if (result.success) {
        loadShoppingList();
    }
}

async function deleteItem(id) {
    const result = await API.delete('api/shopping-list.php', {
        user_id: <?php echo getUserId(); ?>,
        id: id
    });

    if (result.success) {
        showAlert('Item eliminado', 'success');
        loadShoppingList();
    }
}

async function clearList() {
    if (!confirm('¿Estás seguro de limpiar toda la lista?')) return;

    const result = await API.delete('api/shopping-list.php', {
        user_id: <?php echo getUserId(); ?>,
        id: 'all'
    });

    if (result.success) {
        showAlert('Lista limpiada', 'success');
        loadShoppingList();
    }
}

async function generateFromWeeklyPlan() {
    // Get weekly plan
    const planResult = await API.get('api/weekly-plan.php?user_id=<?php echo getUserId(); ?>');

    if (!planResult.success) {
        showAlert('Error al cargar el plan semanal', 'error');
        return;
    }

    // Extract all ingredients
    const ingredients = {};

    Object.values(planResult.weeklyPlan).forEach(day => {
        day.recipes.forEach(recipe => {
            const recipeData = recipes.find(r => r.id === recipe.id);
            if (recipeData && recipeData.ingredients) {
                recipeData.ingredients.forEach(ing => {
                    if (ingredients[ing]) {
                        ingredients[ing]++;
                    } else {
                        ingredients[ing] = 1;
                    }
                });
            }
        });
    });

    // Clear current list
    await API.delete('api/shopping-list.php', {
        user_id: <?php echo getUserId(); ?>,
        id: 'all'
    });

    // Add all ingredients
    for (const [ingredient, count] of Object.entries(ingredients)) {
        await API.post('api/shopping-list.php', {
            user_id: <?php echo getUserId(); ?>,
            ingredient: ingredient,
            quantity: count > 1 ? `${count}x` : '',
            checked: false
        });
    }

    showAlert('Lista generada desde el plan semanal', 'success');
    loadShoppingList();
}
</script>

<?php include 'includes/footer.php'; ?>
