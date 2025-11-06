// FitTrack - Main JavaScript File

// API helper functions
const API = {
    async request(endpoint, options = {}) {
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const config = { ...defaultOptions, ...options };

        try {
            const response = await fetch(endpoint, config);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API Error:', error);
            return { success: false, message: 'Error de conexión' };
        }
    },

    get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    },

    put(endpoint, body) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    },

    delete(endpoint, body) {
        return this.request(endpoint, {
            method: 'DELETE',
            body: JSON.stringify(body)
        });
    }
};

// Show alert message
function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `<p>${message}</p>`;

    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Format date
function formatDate(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format number
function formatNumber(num, decimals = 0) {
    return parseFloat(num).toFixed(decimals);
}

// Modal helpers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// BMR Calculation (Mifflin-St Jeor)
function calculateBMR(weight, height, age, gender) {
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    return bmr;
}

// TDEE Calculation
function calculateTDEE(bmr, activityLevel) {
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
    };

    return bmr * (activityMultipliers[activityLevel] || 1.2);
}

// Calculate goal calories
function calculateGoalCalories(tdee, goal) {
    if (goal === 'lose') {
        return tdee - 500; // 500 calorie deficit
    } else if (goal === 'gain') {
        return tdee + 300; // 300 calorie surplus
    }
    return tdee; // maintain
}

// Calculate macros
function calculateMacros(calories, goal) {
    let protein, carbs, fat;

    if (goal === 'lose') {
        // High protein, moderate fat, lower carbs
        protein = calories * 0.35 / 4;
        fat = calories * 0.30 / 9;
        carbs = calories * 0.35 / 4;
    } else if (goal === 'gain') {
        // High protein and carbs, moderate fat
        protein = calories * 0.30 / 4;
        carbs = calories * 0.45 / 4;
        fat = calories * 0.25 / 9;
    } else {
        // Balanced
        protein = calories * 0.30 / 4;
        carbs = calories * 0.40 / 4;
        fat = calories * 0.30 / 9;
    }

    return {
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fat: Math.round(fat)
    };
}

// Export functions
window.API = API;
window.showAlert = showAlert;
window.formatDate = formatDate;
window.formatNumber = formatNumber;
window.openModal = openModal;
window.closeModal = closeModal;
window.calculateBMR = calculateBMR;
window.calculateTDEE = calculateTDEE;
window.calculateGoalCalories = calculateGoalCalories;
window.calculateMacros = calculateMacros;
