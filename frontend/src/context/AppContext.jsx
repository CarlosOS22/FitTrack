import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../services/api';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const { currentUser, isAuthenticated } = useAuth();

  // User data
  const [userData, setUserData] = useState(null);

  // Weekly plan
  const [weeklyPlan, setWeeklyPlan] = useState({
    Lunes: { recipes: [], exercises: [] },
    Martes: { recipes: [], exercises: [] },
    Miércoles: { recipes: [], exercises: [] },
    Jueves: { recipes: [], exercises: [] },
    Viernes: { recipes: [], exercises: [] },
    Sábado: { recipes: [], exercises: [] },
    Domingo: { recipes: [], exercises: [] },
  });

  // Progress tracking
  const [progressData, setProgressData] = useState([]);

  // Recipe suggestions
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);

  // Shopping list
  const [shoppingList, setShoppingList] = useState([]);

  // Cargar datos cuando el usuario inicie sesión
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      loadUserData();
      loadWeeklyPlan();
      loadProgress();
      loadShoppingList();
    } else {
      // Limpiar datos cuando no hay sesión
      setUserData(null);
      setWeeklyPlan({
        Lunes: { recipes: [], exercises: [] },
        Martes: { recipes: [], exercises: [] },
        Miércoles: { recipes: [], exercises: [] },
        Jueves: { recipes: [], exercises: [] },
        Viernes: { recipes: [], exercises: [] },
        Sábado: { recipes: [], exercises: [] },
        Domingo: { recipes: [], exercises: [] },
      });
      setProgressData([]);
      setShoppingList([]);
    }
  }, [isAuthenticated, currentUser]);

  // Cargar datos del usuario desde la API
  const loadUserData = async () => {
    try {
      const response = await api.userData.get(currentUser.id);
      if (response.success && response.userData) {
        setUserData(response.userData);
      }
    } catch (error) {
      console.error('Error cargando datos de usuario:', error);
    }
  };

  // Cargar plan semanal desde la API
  const loadWeeklyPlan = async () => {
    try {
      const response = await api.weeklyPlan.get(currentUser.id);
      if (response.success) {
        setWeeklyPlan(response.weeklyPlan);
      }
    } catch (error) {
      console.error('Error cargando plan semanal:', error);
    }
  };

  // Cargar progreso desde la API
  const loadProgress = async () => {
    try {
      const response = await api.progress.get(currentUser.id);
      if (response.success) {
        setProgressData(response.progress);
      }
    } catch (error) {
      console.error('Error cargando progreso:', error);
    }
  };

  // Guardar datos del usuario
  const saveUserData = async (data) => {
    if (!isAuthenticated) return;

    try {
      const response = await api.userData.save(currentUser.id, data);
      if (response.success) {
        setUserData(data);
      }
      return response;
    } catch (error) {
      console.error('Error guardando datos de usuario:', error);
      throw error;
    }
  };

  // Add recipe to weekly plan
  const addRecipeToWeeklyPlan = async (day, recipe) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setWeeklyPlan(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          recipes: [...prev[day].recipes, recipe]
        }
      }));
      return;
    }

    try {
      await api.weeklyPlan.addRecipe(currentUser.id, day, recipe);
      // Recargar el plan completo desde la API
      await loadWeeklyPlan();
    } catch (error) {
      console.error('Error añadiendo receta:', error);
      throw error;
    }
  };

  // Add exercise to weekly plan
  const addExerciseToWeeklyPlan = async (day, exercise) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setWeeklyPlan(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          exercises: [...prev[day].exercises, exercise]
        }
      }));
      return;
    }

    try {
      await api.weeklyPlan.addExercise(currentUser.id, day, exercise);
      // Recargar el plan completo desde la API
      await loadWeeklyPlan();
    } catch (error) {
      console.error('Error añadiendo ejercicio:', error);
      throw error;
    }
  };

  // Remove recipe from weekly plan
  const removeRecipeFromWeeklyPlan = async (day, recipeId) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setWeeklyPlan(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          recipes: prev[day].recipes.filter(r => r.id !== recipeId)
        }
      }));
      return;
    }

    try {
      await api.weeklyPlan.removeRecipe(currentUser.id, day, recipeId);
      // Recargar el plan completo desde la API
      await loadWeeklyPlan();
    } catch (error) {
      console.error('Error eliminando receta:', error);
      alert('Error al eliminar la receta. Por favor, intenta de nuevo.');
      throw error;
    }
  };

  // Remove exercise from weekly plan
  const removeExerciseFromWeeklyPlan = async (day, exerciseId) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setWeeklyPlan(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          exercises: prev[day].exercises.filter(ex => ex.id !== exerciseId)
        }
      }));
      return;
    }

    try {
      await api.weeklyPlan.removeExercise(currentUser.id, day, exerciseId);
      // Recargar el plan completo desde la API
      await loadWeeklyPlan();
    } catch (error) {
      console.error('Error eliminando ejercicio:', error);
      alert('Error al eliminar el ejercicio. Por favor, intenta de nuevo.');
      throw error;
    }
  };

  // Update exercise in weekly plan (for sets, reps, etc.)
  const updateExerciseInWeeklyPlan = async (exerciseId, updatedExerciseData) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setWeeklyPlan(prev => {
        const newPlan = { ...prev };
        for (const day in newPlan) {
          newPlan[day] = {
            ...newPlan[day],
            exercises: newPlan[day].exercises.map(ex =>
              ex.id === exerciseId ? { ...ex, exercise_data: updatedExerciseData } : ex
            )
          };
        }
        return newPlan;
      });
      return;
    }

    try {
      await api.weeklyPlan.updateExercise(currentUser.id, exerciseId, updatedExerciseData);
      // Recargar el plan completo desde la API
      await loadWeeklyPlan();
    } catch (error) {
      console.error('Error actualizando ejercicio:', error);
      alert('Error al actualizar el ejercicio. Por favor, intenta de nuevo.');
      throw error;
    }
  };

  // Add progress entry
  const addProgressEntry = async (entry) => {
    if (!isAuthenticated) {
      // Si no hay sesión, solo actualizar localmente
      setProgressData(prev => [...prev, { ...entry, date: new Date().toISOString() }]);
      return;
    }

    try {
      const response = await api.progress.add(currentUser.id, entry);
      if (response.success) {
        // Recargar progreso desde la API
        await loadProgress();
      }
      return response;
    } catch (error) {
      console.error('Error añadiendo progreso:', error);
      throw error;
    }
  };

  // Add recipe suggestion
  const addRecipeSuggestion = async (suggestion) => {
    try {
      const response = await api.recipeSuggestions.submit(suggestion);
      if (response.success) {
        // Actualizar localmente
        setRecipeSuggestions(prev => [...prev, {
          ...suggestion,
          id: Date.now(),
          status: 'pending',
          date: new Date().toISOString()
        }]);
      }
      return response;
    } catch (error) {
      console.error('Error enviando sugerencia:', error);
      throw error;
    }
  };

  // Update recipe suggestion status (admin function)
  const updateRecipeSuggestionStatus = async (id, status) => {
    try {
      await api.recipeSuggestions.updateStatus(id, status);
      setRecipeSuggestions(prev =>
        prev.map(sugg => sugg.id === id ? { ...sugg, status } : sugg)
      );
    } catch (error) {
      console.error('Error actualizando sugerencia:', error);
      throw error;
    }
  };

  // Calculate daily macros from weekly plan
  const calculateDailyMacros = (day) => {
    const recipes = weeklyPlan[day]?.recipes || [];
    return recipes.reduce((acc, recipe) => {
      const recipeData = recipe.recipe_data || recipe;
      const macros = recipeData.macros || {};
      return {
        protein: acc.protein + (macros.protein || 0),
        carbs: acc.carbs + (macros.carbs || 0),
        fat: acc.fat + (macros.fat || 0),
        calories: acc.calories + (recipeData.calories || 0)
      };
    }, { protein: 0, carbs: 0, fat: 0, calories: 0 });
  };

  // ========== SHOPPING LIST ==========

  // Load shopping list
  const loadShoppingList = async () => {
    if (!isAuthenticated || !currentUser) return;

    try {
      const response = await api.shoppingList.get(currentUser.id);
      if (response.success) {
        setShoppingList(response.shoppingList);
      }
    } catch (error) {
      console.error('Error cargando lista de compra:', error);
    }
  };

  // Add item to shopping list
  const addToShoppingList = async (ingredient, quantity = null) => {
    if (!isAuthenticated || !currentUser) return;

    try {
      const response = await api.shoppingList.add(currentUser.id, ingredient, quantity);
      if (response.success) {
        await loadShoppingList();
      }
      return response;
    } catch (error) {
      console.error('Error añadiendo a lista de compra:', error);
      throw error;
    }
  };

  // Update shopping list item
  const updateShoppingItem = async (itemId, updates) => {
    if (!isAuthenticated || !currentUser) return;

    try {
      const response = await api.shoppingList.update(currentUser.id, itemId, updates);
      if (response.success) {
        await loadShoppingList();
      }
      return response;
    } catch (error) {
      console.error('Error actualizando item de compra:', error);
      throw error;
    }
  };

  // Remove item from shopping list
  const removeFromShoppingList = async (itemId) => {
    if (!isAuthenticated || !currentUser) return;

    try {
      const response = await api.shoppingList.remove(currentUser.id, itemId);
      if (response.success) {
        await loadShoppingList();
      }
      return response;
    } catch (error) {
      console.error('Error eliminando de lista de compra:', error);
      throw error;
    }
  };

  // Generate shopping list from weekly plan
  const generateShoppingListFromPlan = async () => {
    if (!isAuthenticated || !currentUser) return;

    try {
      // Recopilar todos los ingredientes de todas las recetas del plan semanal
      const allIngredients = [];

      Object.keys(weeklyPlan).forEach(day => {
        const dayPlan = weeklyPlan[day];
        if (dayPlan && dayPlan.recipes) {
          dayPlan.recipes.forEach(recipe => {
            const recipeData = recipe.recipe_data || recipe;
            if (recipeData.ingredients && Array.isArray(recipeData.ingredients)) {
              recipeData.ingredients.forEach(ingredient => {
                allIngredients.push(ingredient);
              });
            }
          });
        }
      });

      // Agrupar ingredientes similares (simplificado)
      const ingredientMap = {};
      allIngredients.forEach(ing => {
        // Normalizar el ingrediente (minúsculas, sin espacios extras)
        const normalized = ing.toLowerCase().trim();
        if (ingredientMap[normalized]) {
          ingredientMap[normalized].count++;
        } else {
          ingredientMap[normalized] = {
            ingredient: ing,
            count: 1
          };
        }
      });

      // Añadir todos los ingredientes a la lista de compra
      for (const key in ingredientMap) {
        const item = ingredientMap[key];
        const quantity = item.count > 1 ? `x${item.count}` : null;
        await api.shoppingList.add(currentUser.id, item.ingredient, quantity);
      }

      // Recargar la lista
      await loadShoppingList();

      return { success: true, message: `${Object.keys(ingredientMap).length} ingredientes añadidos` };
    } catch (error) {
      console.error('Error generando lista de compra:', error);
      throw error;
    }
  };

  const value = {
    userData,
    setUserData: saveUserData,
    weeklyPlan,
    setWeeklyPlan,
    progressData,
    setProgressData,
    recipeSuggestions,
    shoppingList,
    addRecipeToWeeklyPlan,
    addExerciseToWeeklyPlan,
    removeRecipeFromWeeklyPlan,
    removeExerciseFromWeeklyPlan,
    updateExerciseInWeeklyPlan,
    addProgressEntry,
    addRecipeSuggestion,
    updateRecipeSuggestionStatus,
    calculateDailyMacros,
    loadUserData,
    loadWeeklyPlan,
    loadProgress,
    loadShoppingList,
    addToShoppingList,
    updateShoppingItem,
    removeFromShoppingList,
    generateShoppingListFromPlan
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
