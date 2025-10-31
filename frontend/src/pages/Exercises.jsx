import { useState } from 'react';
import { exercises, muscleGroups } from '../data/exercises';
import { useApp } from '../context/AppContext';
import { Dumbbell, Plus, X, Clock, Activity } from 'lucide-react';

const Exercises = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const { addExerciseToWeeklyPlan } = useApp();

  const filteredExercises = selectedMuscle === 'all'
    ? exercises
    : exercises.filter(exercise => exercise.muscleGroup === selectedMuscle);

  const handleAddToWeeklyPlan = async (exercise) => {
    if (selectedDay) {
      try {
        await addExerciseToWeeklyPlan(selectedDay, exercise);
        setSelectedDay(null);
        setSelectedExercise(null);
        alert(`¡Ejercicio añadido a ${selectedDay}!`);
      } catch (error) {
        console.error('Error:', error);
        alert('Error al añadir el ejercicio. Por favor, intenta de nuevo.');
      }
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil':
      case 'Muy Fácil':
        return 'bg-green-100 text-green-700';
      case 'Media':
        return 'bg-yellow-100 text-yellow-700';
      case 'Alta':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-8">
          Ejercicios de Entrenamiento
        </h1>

        {/* Muscle Group Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedMuscle('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedMuscle === 'all'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todos
          </button>
          {muscleGroups.map((muscle) => (
            <button
              key={muscle}
              onClick={() => setSelectedMuscle(muscle)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMuscle === muscle
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {muscle}
            </button>
          ))}
        </div>

        {/* Exercise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedExercise(exercise)}
            >
              <div className="relative bg-gray-100 flex items-center justify-center">
                <img
                  src={exercise.gifUrl || exercise.image}
                  alt={exercise.name}
                  className="w-full h-48 object-contain"
                  onError={(e) => {
                    e.target.src = exercise.image;
                  }}
                />
                <div className="absolute top-2 right-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {exercise.muscleGroup}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.name}</h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{exercise.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-1 text-primary-600" />
                    <span>{exercise.equipment}</span>
                  </div>
                  <div className="flex items-center">
                    <Activity className="h-4 w-4 mr-1 text-secondary-600" />
                    <span>{exercise.sets}x{exercise.reps}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exercise Detail Modal */}
        {selectedExercise && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{selectedExercise.name}</h2>
                  <p className="text-gray-600 mt-1">{selectedExercise.muscleGroup}</p>
                </div>
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* GIF Animation */}
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={selectedExercise.gifUrl}
                    alt={`${selectedExercise.name} animation`}
                    className="w-full h-64 object-contain"
                    onError={(e) => {
                      e.target.src = selectedExercise.image;
                    }}
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <Activity className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                    <div className="text-2xl font-bold text-primary-600">{selectedExercise.sets}</div>
                    <div className="text-xs text-gray-600">Series</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <Dumbbell className="h-6 w-6 mx-auto mb-2 text-secondary-600" />
                    <div className="text-2xl font-bold text-secondary-600">{selectedExercise.reps}</div>
                    <div className="text-xs text-gray-600">Repeticiones</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                    <div className="text-2xl font-bold text-primary-600">{selectedExercise.restTime}s</div>
                    <div className="text-xs text-gray-600">Descanso</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {selectedExercise.difficulty}
                    </div>
                    <div className="text-xs text-gray-600 mt-2">Dificultad</div>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{selectedExercise.description}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <strong>Equipamiento:</strong> {selectedExercise.equipment}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Instrucciones de Ejecución</h3>
                  <ol className="space-y-3">
                    {selectedExercise.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Consejos de Seguridad</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Calienta adecuadamente antes de comenzar</li>
                    <li>• Mantén una postura correcta durante todo el ejercicio</li>
                    <li>• No uses un peso excesivo que comprometa la técnica</li>
                    <li>• Respira correctamente: exhala en el esfuerzo, inhala en la relajación</li>
                  </ul>
                </div>

                {!selectedDay ? (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Añadir a rutina semanal:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all"
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleAddToWeeklyPlan(selectedExercise)}
                      className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center font-semibold"
                    >
                      <Plus className="mr-2 h-5 w-5" />
                      Confirmar añadir a {selectedDay}
                    </button>
                    <button
                      onClick={() => setSelectedDay(null)}
                      className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
