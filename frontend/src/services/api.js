// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost/fittrack-backend/api';

// Función auxiliar para hacer peticiones
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en la petición');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// ========== AUTENTICACIÓN ==========

export const authAPI = {
  // Registrar usuario
  register: async (userData) => {
    return fetchAPI('/auth.php?action=register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Iniciar sesión
  login: async (email, password) => {
    return fetchAPI('/auth.php?action=login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Actualizar perfil
  updateProfile: async (userId, updates) => {
    return fetchAPI('/auth.php?action=profile', {
      method: 'PUT',
      body: JSON.stringify({ user_id: userId, ...updates }),
    });
  },
};

// ========== DATOS DE USUARIO ==========

export const userDataAPI = {
  // Obtener datos del usuario
  get: async (userId) => {
    return fetchAPI(`/user-data.php?user_id=${userId}`, {
      method: 'GET',
    });
  },

  // Guardar/actualizar datos del usuario
  save: async (userId, data) => {
    return fetchAPI('/user-data.php', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, ...data }),
    });
  },
};

// ========== PLAN SEMANAL ==========

export const weeklyPlanAPI = {
  // Obtener plan semanal
  get: async (userId) => {
    return fetchAPI(`/weekly-plan.php?user_id=${userId}`, {
      method: 'GET',
    });
  },

  // Añadir receta al plan
  addRecipe: async (userId, day, recipe) => {
    return fetchAPI('/weekly-plan.php?action=add-recipe', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, day, recipe }),
    });
  },

  // Añadir ejercicio al plan
  addExercise: async (userId, day, exercise) => {
    return fetchAPI('/weekly-plan.php?action=add-exercise', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, day, exercise }),
    });
  },

  // Eliminar receta del plan
  removeRecipe: async (userId, day, recipeId) => {
    return fetchAPI('/weekly-plan.php?action=remove-recipe', {
      method: 'DELETE',
      body: JSON.stringify({ user_id: userId, day, recipe_id: recipeId }),
    });
  },

  // Eliminar ejercicio del plan
  removeExercise: async (userId, day, exerciseId) => {
    return fetchAPI('/weekly-plan.php?action=remove-exercise', {
      method: 'DELETE',
      body: JSON.stringify({ user_id: userId, day, exercise_id: exerciseId }),
    });
  },
};

// ========== PROGRESO ==========

export const progressAPI = {
  // Obtener progreso
  get: async (userId) => {
    return fetchAPI(`/progress.php?user_id=${userId}`, {
      method: 'GET',
    });
  },

  // Añadir entrada de progreso
  add: async (userId, entry) => {
    return fetchAPI('/progress.php', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, ...entry }),
    });
  },

  // Eliminar entrada de progreso
  remove: async (userId, progressId) => {
    return fetchAPI('/progress.php', {
      method: 'DELETE',
      body: JSON.stringify({ user_id: userId, progress_id: progressId }),
    });
  },
};

// ========== SUGERENCIAS DE RECETAS ==========

export const recipeSuggestionsAPI = {
  // Obtener sugerencias
  getAll: async (status = null) => {
    const url = status ? `/recipe-suggestions.php?status=${status}` : '/recipe-suggestions.php';
    return fetchAPI(url, {
      method: 'GET',
    });
  },

  // Enviar sugerencia
  submit: async (suggestion) => {
    return fetchAPI('/recipe-suggestions.php', {
      method: 'POST',
      body: JSON.stringify(suggestion),
    });
  },

  // Actualizar estado de sugerencia
  updateStatus: async (suggestionId, status) => {
    return fetchAPI('/recipe-suggestions.php', {
      method: 'PUT',
      body: JSON.stringify({ suggestion_id: suggestionId, status }),
    });
  },
};

// ========== LISTA DE LA COMPRA ==========

export const shoppingListAPI = {
  // Obtener lista de compra
  get: async (userId) => {
    return fetchAPI(`/shopping-list.php?user_id=${userId}`, {
      method: 'GET',
    });
  },

  // Añadir ingrediente
  add: async (userId, ingredient, quantity = null) => {
    return fetchAPI('/shopping-list.php', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, ingredient, quantity, checked: false }),
    });
  },

  // Actualizar ingrediente (marcar como comprado/no comprado)
  update: async (userId, itemId, updates) => {
    return fetchAPI('/shopping-list.php', {
      method: 'PUT',
      body: JSON.stringify({ user_id: userId, id: itemId, ...updates }),
    });
  },

  // Eliminar ingrediente
  remove: async (userId, itemId) => {
    return fetchAPI('/shopping-list.php', {
      method: 'DELETE',
      body: JSON.stringify({ user_id: userId, id: itemId }),
    });
  },

  // Limpiar items comprados
  clearChecked: async (userId, checkedIds) => {
    // Eliminar múltiples items comprados
    const promises = checkedIds.map(id =>
      fetchAPI('/shopping-list.php', {
        method: 'DELETE',
        body: JSON.stringify({ user_id: userId, id }),
      })
    );
    return Promise.all(promises);
  },
};

// Exportar todo
const api = {
  auth: authAPI,
  userData: userDataAPI,
  weeklyPlan: weeklyPlanAPI,
  progress: progressAPI,
  recipeSuggestions: recipeSuggestionsAPI,
  shoppingList: shoppingListAPI,
};

export default api;
