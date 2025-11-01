import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, TrendingDown, Activity, Calendar, Sparkles } from 'lucide-react';
import { recipes } from '../data/recipes';
import { exercises } from '../data/exercises';

const Home = () => {
  const { userData, setUserData, addRecipeToWeeklyPlan, addExerciseToWeeklyPlan, currentUser } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    currentWeight: '',
    height: '',
    targetWeight: '',
    activityLevel: 'moderate',
    goal: 'lose'
  });
  const [calculatedPlan, setCalculatedPlan] = useState(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  useEffect(() => {
    if (userData) {
      setFormData(userData);
      calculatePlan(userData);
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBMR = (weight, height, age, gender) => {
    // Fórmula de Mifflin-St Jeor
    if (gender === 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };

  const calculateTDEE = (bmr, activityLevel) => {
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    return bmr * activityMultipliers[activityLevel];
  };

  const calculatePlan = (data) => {
    const weight = parseFloat(data.currentWeight);
    const height = parseFloat(data.height);
    const age = parseInt(data.age);
    const targetWeight = parseFloat(data.targetWeight);

    const bmr = calculateBMR(weight, height, age, data.gender);
    const tdee = calculateTDEE(bmr, data.activityLevel);

    let dailyCalories;
    let weeklyWeightChange;

    if (data.goal === 'lose') {
      dailyCalories = tdee - 500; // Déficit de 500 calorías
      weeklyWeightChange = 0.5; // kg por semana
    } else if (data.goal === 'gain') {
      dailyCalories = tdee + 300; // Superávit de 300 calorías
      weeklyWeightChange = 0.25; // kg por semana
    } else {
      dailyCalories = tdee;
      weeklyWeightChange = 0;
    }

    const weightDifference = Math.abs(weight - targetWeight);
    const weeksToGoal = weeklyWeightChange > 0 ? Math.ceil(weightDifference / weeklyWeightChange) : 0;

    // Calcular macros
    const proteinGrams = weight * 2; // 2g por kg de peso
    const proteinCalories = proteinGrams * 4;
    const fatGrams = (dailyCalories * 0.25) / 9; // 25% de calorías de grasa
    const fatCalories = fatGrams * 9;
    const carbsCalories = dailyCalories - proteinCalories - fatCalories;
    const carbsGrams = carbsCalories / 4;

    const plan = {
      dailyCalories: Math.round(dailyCalories),
      macros: {
        protein: Math.round(proteinGrams),
        carbs: Math.round(carbsGrams),
        fat: Math.round(fatGrams)
      },
      weeksToGoal,
      estimatedDate: new Date(Date.now() + weeksToGoal * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      weeklyWorkouts: data.activityLevel === 'sedentary' ? 2 :
                      data.activityLevel === 'light' ? 3 :
                      data.activityLevel === 'moderate' ? 4 :
                      data.activityLevel === 'active' ? 5 : 6
    };

    setCalculatedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    calculatePlan(formData);
  };

  // Generar plan de dieta automático
  const generateAutomaticDietPlan = async (plan) => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const targetCaloriesPerDay = plan.dailyCalories;
    const targetProtein = plan.macros.protein;
    const targetCarbs = plan.macros.carbs;
    const targetFat = plan.macros.fat;

    // Distribuir calorías por comida
    const caloriesBreakfast = targetCaloriesPerDay * 0.25;
    const caloriesLunch = targetCaloriesPerDay * 0.35;
    const caloriesDinner = targetCaloriesPerDay * 0.30;
    const caloriesSnack = targetCaloriesPerDay * 0.10;

    for (const day of days) {
      try {
        // Seleccionar desayuno
        const breakfastOptions = recipes.filter(r => r.category === 'Desayuno' && r.calories <= caloriesBreakfast + 50);
        if (breakfastOptions.length > 0) {
          const breakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
          await addRecipeToWeeklyPlan(day, breakfast);
        }

        // Seleccionar almuerzo
        const lunchOptions = recipes.filter(r => r.category === 'Almuerzo' && r.calories <= caloriesLunch + 100);
        if (lunchOptions.length > 0) {
          const lunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
          await addRecipeToWeeklyPlan(day, lunch);
        }

        // Seleccionar cena
        const dinnerOptions = recipes.filter(r => r.category === 'Cena' && r.calories <= caloriesDinner + 100);
        if (dinnerOptions.length > 0) {
          const dinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
          await addRecipeToWeeklyPlan(day, dinner);
        }

        // Seleccionar merienda o batido
        const snackOptions = recipes.filter(r =>
          (r.category === 'Merienda' || r.category === 'Batidos') &&
          r.calories <= caloriesSnack + 50
        );
        if (snackOptions.length > 0) {
          const snack = snackOptions[Math.floor(Math.random() * snackOptions.length)];
          await addRecipeToWeeklyPlan(day, snack);
        }

        // Pequeña pausa para no saturar el servidor
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error generando plan para ${day}:`, error);
      }
    }
  };

  // Generar plan de entrenamiento automático
  const generateAutomaticWorkoutPlan = async (plan) => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const workoutDays = plan.weeklyWorkouts;
    const goal = formData.goal;

    // Definir grupos musculares según el objetivo
    let muscleGroupSchedule = [];

    if (goal === 'lose') {
      // Pérdida de peso: Más cardio y circuito completo
      muscleGroupSchedule = [
        ['Cardio', 'Abdominales'],
        ['Piernas', 'Glúteos'],
        ['Pecho', 'Tríceps'],
        ['Espalda', 'Bíceps'],
        ['Cardio', 'Abdominales'],
        ['Piernas', 'Hombros'],
        ['Cardio']
      ];
    } else if (goal === 'gain') {
      // Ganancia de músculo: Más trabajo de fuerza
      muscleGroupSchedule = [
        ['Pecho', 'Tríceps'],
        ['Espalda', 'Bíceps'],
        ['Piernas', 'Glúteos'],
        ['Hombros', 'Abdominales'],
        ['Pecho', 'Espalda'],
        ['Piernas', 'Abdominales'],
        ['Cardio']
      ];
    } else {
      // Mantenimiento: Equilibrado
      muscleGroupSchedule = [
        ['Pecho', 'Abdominales'],
        ['Piernas', 'Glúteos'],
        ['Espalda', 'Bíceps'],
        ['Cardio', 'Abdominales'],
        ['Pecho', 'Tríceps'],
        ['Piernas', 'Hombros'],
        ['Cardio']
      ];
    }

    // Seleccionar días de entrenamiento
    const trainingDays = [];
    const dayIndices = [0, 2, 4, 1, 3, 5, 6]; // Lunes, Miércoles, Viernes, Martes, Jueves, Sábado, Domingo
    for (let i = 0; i < Math.min(workoutDays, 7); i++) {
      trainingDays.push(days[dayIndices[i]]);
    }

    for (let i = 0; i < trainingDays.length; i++) {
      const day = trainingDays[i];
      const muscleGroups = muscleGroupSchedule[i % muscleGroupSchedule.length];

      try {
        for (const muscleGroup of muscleGroups) {
          // Seleccionar 2-3 ejercicios por grupo muscular
          const exerciseOptions = exercises.filter(ex => ex.muscleGroup === muscleGroup);
          const numExercises = muscleGroup === 'Cardio' ? 1 : 2;

          for (let j = 0; j < numExercises && j < exerciseOptions.length; j++) {
            const exercise = exerciseOptions[Math.floor(Math.random() * exerciseOptions.length)];
            await addExerciseToWeeklyPlan(day, exercise);
            // Remover el ejercicio seleccionado para no repetirlo
            const index = exerciseOptions.indexOf(exercise);
            if (index > -1) exerciseOptions.splice(index, 1);
          }
        }

        // Pequeña pausa para no saturar el servidor
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error generando entrenamiento para ${day}:`, error);
      }
    }
  };

  // Generar plan completo automático
  const handleGenerateAutomaticPlan = async () => {
    if (!calculatedPlan || !currentUser) {
      alert('Por favor, calcula tu plan personalizado primero e inicia sesión');
      return;
    }

    const confirmGenerate = window.confirm(
      '¿Quieres generar un plan automático de dieta y entrenamiento?\n\n' +
      'Esto añadirá recetas y ejercicios a tu plan semanal basándose en tus objetivos.\n' +
      'Podrás editar y personalizar todo después.'
    );

    if (!confirmGenerate) return;

    setIsGeneratingPlan(true);
    try {
      await generateAutomaticDietPlan(calculatedPlan);
      await generateAutomaticWorkoutPlan(calculatedPlan);
      alert('¡Plan generado exitosamente! Ve al Plan Semanal para ver y editar tu plan personalizado.');
    } catch (error) {
      console.error('Error generando plan automático:', error);
      alert('Hubo un error al generar el plan. Por favor, intenta de nuevo.');
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
            Bienvenido a FitTrack
          </h1>
          <p className="text-gray-600 text-lg">Tu asistente personal de fitness y nutrición</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calculator className="mr-2 text-primary-600" />
              Configura tu Perfil
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Edad
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="15"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Género
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    min="120"
                    max="250"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso Actual (kg)
                  </label>
                  <input
                    type="number"
                    name="currentWeight"
                    value={formData.currentWeight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    step="0.1"
                    min="30"
                    max="300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso Objetivo (kg)
                  </label>
                  <input
                    type="number"
                    name="targetWeight"
                    value={formData.targetWeight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    step="0.1"
                    min="30"
                    max="300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nivel de Actividad
                  </label>
                  <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="sedentary">Sedentario (poco o ningún ejercicio)</option>
                    <option value="light">Ligero (ejercicio 1-3 días/semana)</option>
                    <option value="moderate">Moderado (ejercicio 3-5 días/semana)</option>
                    <option value="active">Activo (ejercicio 6-7 días/semana)</option>
                    <option value="veryActive">Muy Activo (ejercicio intenso diario)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Objetivo
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="lose">Perder peso</option>
                    <option value="maintain">Mantener peso</option>
                    <option value="gain">Ganar peso/músculo</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-xl"
              >
                Calcular Plan Personalizado
              </button>
            </form>
          </div>

          {/* Plan Calculado */}
          {calculatedPlan && (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Tu Plan Personalizado
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 shadow-lg">
                  <TrendingDown className="h-8 w-8 mb-2" />
                  <div className="text-3xl font-bold mb-1">{calculatedPlan.dailyCalories}</div>
                  <div className="text-primary-100">Calorías diarias</div>
                </div>

                <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-xl p-6 shadow-lg">
                  <Activity className="h-8 w-8 mb-2" />
                  <div className="text-3xl font-bold mb-1">{calculatedPlan.weeklyWorkouts}</div>
                  <div className="text-secondary-100">Entrenamientos/semana</div>
                </div>

                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-xl p-6 shadow-lg">
                  <Calendar className="h-8 w-8 mb-2" />
                  <div className="text-3xl font-bold mb-1">{calculatedPlan.weeksToGoal}</div>
                  <div className="text-primary-100">Semanas hasta objetivo</div>
                </div>

                <div className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white rounded-xl p-6 shadow-lg">
                  <Calculator className="h-8 w-8 mb-2" />
                  <div className="text-xl font-bold mb-1">{calculatedPlan.estimatedDate}</div>
                  <div className="text-secondary-100">Fecha estimada</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Distribución de Macronutrientes</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="text-sm text-gray-600 mb-1">Proteína</div>
                    <div className="text-2xl font-bold text-primary-600">{calculatedPlan.macros.protein}g</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((calculatedPlan.macros.protein * 4 / calculatedPlan.dailyCalories) * 100)}% de calorías
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="text-sm text-gray-600 mb-1">Carbohidratos</div>
                    <div className="text-2xl font-bold text-secondary-600">{calculatedPlan.macros.carbs}g</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((calculatedPlan.macros.carbs * 4 / calculatedPlan.dailyCalories) * 100)}% de calorías
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="text-sm text-gray-600 mb-1">Grasas</div>
                    <div className="text-2xl font-bold text-primary-600">{calculatedPlan.macros.fat}g</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((calculatedPlan.macros.fat * 9 / calculatedPlan.dailyCalories) * 100)}% de calorías
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Este plan es una estimación basada en fórmulas estándar.
                  Consulta con un profesional de la salud antes de comenzar cualquier programa de dieta o ejercicio.
                </p>
              </div>

              {currentUser && (
                <div className="mt-6">
                  <button
                    onClick={handleGenerateAutomaticPlan}
                    disabled={isGeneratingPlan}
                    className="w-full bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-secondary-700 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Sparkles className="mr-2 h-6 w-6" />
                    {isGeneratingPlan ? 'Generando Plan Automático...' : 'Generar Plan Automático de Dieta y Entrenamiento'}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Esto creará un plan semanal completo basado en tus objetivos. Podrás editarlo después.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
