import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // User data
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('fittrack-user');
    return saved ? JSON.parse(saved) : null;
  });

  // Weekly plan
  const [weeklyPlan, setWeeklyPlan] = useState(() => {
    const saved = localStorage.getItem('fittrack-weekly-plan');
    return saved ? JSON.parse(saved) : {
      monday: { meals: [], exercises: [] },
      tuesday: { meals: [], exercises: [] },
      wednesday: { meals: [], exercises: [] },
      thursday: { meals: [], exercises: [] },
      friday: { meals: [], exercises: [] },
      saturday: { meals: [], exercises: [] },
      sunday: { meals: [], exercises: [] },
    };
  });

  // Progress tracking
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem('fittrack-progress');
    return saved ? JSON.parse(saved) : [];
  });

  // Recipe suggestions
  const [recipeSuggestions, setRecipeSuggestions] = useState(() => {
    const saved = localStorage.getItem('fittrack-suggestions');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem('fittrack-user', JSON.stringify(userData));
    }
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('fittrack-weekly-plan', JSON.stringify(weeklyPlan));
  }, [weeklyPlan]);

  useEffect(() => {
    localStorage.setItem('fittrack-progress', JSON.stringify(progressData));
  }, [progressData]);

  useEffect(() => {
    localStorage.setItem('fittrack-suggestions', JSON.stringify(recipeSuggestions));
  }, [recipeSuggestions]);

  // Add recipe to weekly plan
  const addRecipeToWeeklyPlan = (day, recipe) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        meals: [...prev[day].meals, recipe]
      }
    }));
  };

  // Add exercise to weekly plan
  const addExerciseToWeeklyPlan = (day, exercise) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        exercises: [...prev[day].exercises, exercise]
      }
    }));
  };

  // Remove recipe from weekly plan
  const removeRecipeFromWeeklyPlan = (day, recipeId) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        meals: prev[day].meals.filter(meal => meal.id !== recipeId)
      }
    }));
  };

  // Remove exercise from weekly plan
  const removeExerciseFromWeeklyPlan = (day, exerciseId) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        exercises: prev[day].exercises.filter(ex => ex.id !== exerciseId)
      }
    }));
  };

  // Add progress entry
  const addProgressEntry = (entry) => {
    setProgressData(prev => [...prev, { ...entry, date: new Date().toISOString() }]);
  };

  // Add recipe suggestion
  const addRecipeSuggestion = (suggestion) => {
    setRecipeSuggestions(prev => [...prev, {
      ...suggestion,
      id: Date.now(),
      status: 'pending',
      date: new Date().toISOString()
    }]);
  };

  // Update recipe suggestion status (admin function)
  const updateRecipeSuggestionStatus = (id, status) => {
    setRecipeSuggestions(prev =>
      prev.map(sugg => sugg.id === id ? { ...sugg, status } : sugg)
    );
  };

  // Calculate daily macros from weekly plan
  const calculateDailyMacros = (day) => {
    const meals = weeklyPlan[day]?.meals || [];
    return meals.reduce((acc, meal) => ({
      protein: acc.protein + (meal.macros?.protein || 0),
      carbs: acc.carbs + (meal.macros?.carbs || 0),
      fat: acc.fat + (meal.macros?.fat || 0),
      calories: acc.calories + (meal.calories || 0)
    }), { protein: 0, carbs: 0, fat: 0, calories: 0 });
  };

  const value = {
    userData,
    setUserData,
    weeklyPlan,
    setWeeklyPlan,
    progressData,
    setProgressData,
    recipeSuggestions,
    addRecipeToWeeklyPlan,
    addExerciseToWeeklyPlan,
    removeRecipeFromWeeklyPlan,
    removeExerciseFromWeeklyPlan,
    addProgressEntry,
    addRecipeSuggestion,
    updateRecipeSuggestionStatus,
    calculateDailyMacros
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
