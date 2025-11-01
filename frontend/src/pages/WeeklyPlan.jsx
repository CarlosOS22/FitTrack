import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Flame, Activity, Trash2, UtensilsCrossed, Dumbbell } from 'lucide-react';

const WeeklyPlan = () => {
  const { weeklyPlan, calculateDailyMacros, removeRecipeFromWeeklyPlan, removeExerciseFromWeeklyPlan } = useApp();
  const [selectedDay, setSelectedDay] = useState('Lunes');

  const days = [
    { key: 'Lunes', label: 'Lunes' },
    { key: 'Martes', label: 'Martes' },
    { key: 'Miércoles', label: 'Miércoles' },
    { key: 'Jueves', label: 'Jueves' },
    { key: 'Viernes', label: 'Viernes' },
    { key: 'Sábado', label: 'Sábado' },
    { key: 'Domingo', label: 'Domingo' }
  ];

  const currentDayPlan = weeklyPlan[selectedDay] || { recipes: [], exercises: [] };
  const dailyMacros = calculateDailyMacros(selectedDay);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-8 flex items-center">
          <Calendar className="mr-3" />
          Plan Semanal
        </h1>

        {/* Day Selector */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setSelectedDay(day.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDay === day.key
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
            <Flame className="h-8 w-8 mb-2" />
            <div className="text-3xl font-bold mb-1">{dailyMacros.calories}</div>
            <div className="text-orange-100">Calorías</div>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-1">{dailyMacros.protein}g</div>
            <div className="text-primary-100">Proteína</div>
          </div>

          <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-1">{dailyMacros.carbs}g</div>
            <div className="text-secondary-100">Carbohidratos</div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-1">{dailyMacros.fat}g</div>
            <div className="text-primary-100">Grasas</div>
          </div>

          <div className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white rounded-xl p-6 shadow-lg">
            <Activity className="h-8 w-8 mb-2" />
            <div className="text-3xl font-bold mb-1">{currentDayPlan?.exercises?.length || 0}</div>
            <div className="text-secondary-100">Ejercicios</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Meals Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <UtensilsCrossed className="mr-2 text-primary-600" />
              Comidas del Día
            </h2>

            {currentDayPlan?.recipes?.length > 0 ? (
              <div className="space-y-4">
                {currentDayPlan.recipes.map((meal, index) => {
                  const recipeData = meal.recipe_data || meal;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800">{recipeData.name}</h3>
                          <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                            {recipeData.category}
                          </span>
                        </div>
                        <button
                          onClick={() => removeRecipeFromWeeklyPlan(selectedDay, meal.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-center text-sm mt-3">
                        <div className="bg-orange-50 rounded p-2">
                          <div className="font-bold text-orange-600">{recipeData.calories}</div>
                          <div className="text-xs text-gray-600">kcal</div>
                        </div>
                        <div className="bg-primary-50 rounded p-2">
                          <div className="font-bold text-primary-600">{recipeData.macros?.protein || 0}g</div>
                          <div className="text-xs text-gray-600">Prot</div>
                        </div>
                        <div className="bg-secondary-50 rounded p-2">
                          <div className="font-bold text-secondary-600">{recipeData.macros?.carbs || 0}g</div>
                          <div className="text-xs text-gray-600">Carbs</div>
                        </div>
                        <div className="bg-primary-50 rounded p-2">
                          <div className="font-bold text-primary-600">{recipeData.macros?.fat || 0}g</div>
                          <div className="text-xs text-gray-600">Grasas</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <UtensilsCrossed className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No hay comidas planificadas para este día</p>
                <p className="text-sm text-gray-400 mt-2">Ve a la sección de Recetas para añadir comidas</p>
              </div>
            )}
          </div>

          {/* Exercises Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Dumbbell className="mr-2 text-secondary-600" />
              Rutina de Entrenamiento
            </h2>

            {currentDayPlan?.exercises?.length > 0 ? (
              <div className="space-y-4">
                {currentDayPlan.exercises.map((exercise, index) => {
                  const exerciseData = exercise.exercise_data || exercise;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800">{exerciseData.name}</h3>
                          <span className="text-xs text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full">
                            {exerciseData.muscleGroup}
                          </span>
                        </div>
                        <button
                          onClick={() => removeExerciseFromWeeklyPlan(selectedDay, exercise.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-3 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                          <span className="font-medium">Series:</span>
                          <span className="font-bold text-gray-800">{exerciseData.sets}</span>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                          <span className="font-medium">Repeticiones:</span>
                          <span className="font-bold text-gray-800">{exerciseData.reps}</span>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                          <span className="font-medium">Descanso:</span>
                          <span className="font-bold text-gray-800">{exerciseData.restTime}s</span>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded p-2">
                          <span className="font-medium">Equipamiento:</span>
                          <span className="font-bold text-gray-800">{exerciseData.equipment}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Dumbbell className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No hay ejercicios planificados para este día</p>
                <p className="text-sm text-gray-400 mt-2">Ve a la sección de Ejercicios para añadir entrenamientos</p>
              </div>
            )}
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen Semanal</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-700">Día</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Comidas</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Ejercicios</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Calorías</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Proteína</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Carbos</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-700">Grasas</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => {
                  const macros = calculateDailyMacros(day.key);
                  const dayPlan = weeklyPlan[day.key];
                  return (
                    <tr
                      key={day.key}
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                        selectedDay === day.key ? 'bg-primary-50' : ''
                      }`}
                      onClick={() => setSelectedDay(day.key)}
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">{day.label}</td>
                      <td className="text-center py-3 px-4">{dayPlan?.recipes?.length || 0}</td>
                      <td className="text-center py-3 px-4">{dayPlan?.exercises?.length || 0}</td>
                      <td className="text-center py-3 px-4 font-bold text-orange-600">{macros.calories}</td>
                      <td className="text-center py-3 px-4 font-bold text-primary-600">{macros.protein}g</td>
                      <td className="text-center py-3 px-4 font-bold text-secondary-600">{macros.carbs}g</td>
                      <td className="text-center py-3 px-4 font-bold text-primary-600">{macros.fat}g</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlan;
