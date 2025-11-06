<?php
require_once 'includes/config.php';
require_once 'includes/auth.php';

requireLogin();

$pageTitle = 'Progreso - FitTrack';

include 'includes/header.php';
include 'includes/nav.php';
?>

<div class="main-content">
    <div id="alertContainer"></div>

    <div class="page-header">
        <h1>Mi Progreso</h1>
        <p>Registra y visualiza tu progreso en el tiempo</p>
    </div>

    <!-- Add Progress Form -->
    <div class="card mb-4">
        <div class="card-header">
            <h2>Registrar Progreso</h2>
        </div>
        <div class="card-body">
            <form id="progressForm">
                <div class="grid grid-2">
                    <div class="form-group">
                        <label for="date">Fecha</label>
                        <input type="date" id="date" required>
                    </div>
                    <div class="form-group">
                        <label for="weight">Peso (kg)</label>
                        <input type="number" id="weight" step="0.1" required placeholder="70.5">
                    </div>
                    <div class="form-group">
                        <label for="bodyFat">Grasa Corporal (%)</label>
                        <input type="number" id="bodyFat" step="0.1" placeholder="20.5">
                    </div>
                    <div class="form-group">
                        <label for="notes">Notas</label>
                        <textarea id="notes" rows="1" placeholder="Cómo te sientes hoy..."></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Registrar
                </button>
            </form>
        </div>
    </div>

    <!-- Progress Chart -->
    <div class="card mb-4">
        <div class="card-header">
            <h2>Gráfico de Peso</h2>
        </div>
        <div class="card-body">
            <canvas id="progressChart" width="400" height="200"></canvas>
        </div>
    </div>

    <!-- Progress List -->
    <div class="card">
        <div class="card-header">
            <h2>Historial</h2>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Peso</th>
                        <th>Grasa Corporal</th>
                        <th>Notas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="progressList">
                    <tr>
                        <td colspan="5" style="text-align: center; padding: 3rem;">
                            <div class="loading"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
let progressData = [];
let chart = null;

document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    document.getElementById('date').valueAsDate = new Date();

    // Load progress
    loadProgress();

    // Form submit
    document.getElementById('progressForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const data = {
            user_id: <?php echo getUserId(); ?>,
            date: document.getElementById('date').value,
            weight: parseFloat(document.getElementById('weight').value),
            body_fat: parseFloat(document.getElementById('bodyFat').value) || null,
            notes: document.getElementById('notes').value
        };

        const result = await API.post('api/progress.php', data);

        if (result.success) {
            showAlert('Progreso registrado', 'success');
            document.getElementById('progressForm').reset();
            document.getElementById('date').valueAsDate = new Date();
            loadProgress();
        } else {
            showAlert(result.message || 'Error al registrar progreso', 'error');
        }
    });
});

async function loadProgress() {
    const result = await API.get('api/progress.php?user_id=<?php echo getUserId(); ?>');

    if (result.success) {
        progressData = result.progress;
        displayProgress();
        displayChart();
    } else {
        showAlert('Error al cargar el progreso', 'error');
    }
}

function displayProgress() {
    const tbody = document.getElementById('progressList');

    if (progressData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 3rem; color: var(--text-secondary);">No hay registros de progreso</td></tr>';
        return;
    }

    tbody.innerHTML = progressData.map(entry => `
        <tr>
            <td>${formatDate(entry.date)}</td>
            <td>${entry.weight} kg</td>
            <td>${entry.body_fat ? entry.body_fat + '%' : '-'}</td>
            <td>${entry.notes || '-'}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="deleteProgress(${entry.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join('');
}

function displayChart() {
    if (progressData.length === 0) return;

    // Sort by date (oldest first)
    const sortedData = [...progressData].reverse();

    const ctx = document.getElementById('progressChart');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sortedData.map(p => formatDate(p.date)),
            datasets: [{
                label: 'Peso (kg)',
                data: sortedData.map(p => p.weight),
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

async function deleteProgress(id) {
    if (!confirm('¿Estás seguro de eliminar este registro?')) return;

    const result = await API.delete('api/progress.php', {
        user_id: <?php echo getUserId(); ?>,
        progress_id: id
    });

    if (result.success) {
        showAlert('Registro eliminado', 'success');
        loadProgress();
    } else {
        showAlert(result.message || 'Error al eliminar el registro', 'error');
    }
}
</script>

<?php include 'includes/footer.php'; ?>
