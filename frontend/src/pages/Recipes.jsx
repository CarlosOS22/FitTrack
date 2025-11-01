import { useState } from 'react';
import { recipes, recipeCategories } from '../data/recipes';
import { useApp } from '../context/AppContext';
import { Clock, ChefHat, Flame, Plus, X, Send } from 'lucide-react';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showSuggestionForm, setShowSuggestionForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const { addRecipeToWeeklyPlan, addRecipeSuggestion } = useApp();

  const [suggestionForm, setSuggestionForm] = useState({
    name: '',
    category: 'Desayuno',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    ingredients: '',
    instructions: '',
    email: ''
  });

  const filteredRecipes = selectedCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const handleAddToWeeklyPlan = async (recipe) => {
    if (selectedDay) {
      try {
        const dayName = selectedDay; // Guardar el nombre del día antes de limpiar el estado
        await addRecipeToWeeklyPlan(selectedDay, recipe);
        alert(`¡Receta añadida a ${dayName}!`);
        setSelectedDay(null);
        setSelectedRecipe(null);
      } catch (error) {
        console.error('Error:', error);
        alert('Error al añadir la receta. Por favor, intenta de nuevo.');
      }
    }
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    const suggestion = {
      ...suggestionForm,
      ingredients: suggestionForm.ingredients.split('\n').filter(i => i.trim()),
      instructions: suggestionForm.instructions.split('\n').filter(i => i.trim()),
      macros: {
        protein: parseFloat(suggestionForm.protein),
        carbs: parseFloat(suggestionForm.carbs),
        fat: parseFloat(suggestionForm.fat)
      }
    };
    addRecipeSuggestion(suggestion);
    setShowSuggestionForm(false);
    setSuggestionForm({
      name: '',
      category: 'Desayuno',
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      ingredients: '',
      instructions: '',
      email: ''
    });
    alert('¡Gracias por tu sugerencia! Será revisada por un administrador.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            Recetas Saludables
          </h1>
          <button
            onClick={() => setShowSuggestionForm(true)}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg flex items-center"
          >
            <Send className="mr-2 h-5 w-5" />
            Sugerir Receta
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todas
          </button>
          {recipeCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                  <span className="text-xs text-gray-500">{recipe.difficulty}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{recipe.prepTime} min</span>
                  <Flame className="h-4 w-4 ml-4 mr-1 text-orange-500" />
                  <span>{recipe.calories} kcal</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-primary-50 rounded-lg p-2">
                    <div className="text-xs text-gray-600">Proteína</div>
                    <div className="text-sm font-bold text-primary-600">{recipe.macros.protein}g</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-2">
                    <div className="text-xs text-gray-600">Carbos</div>
                    <div className="text-sm font-bold text-secondary-600">{recipe.macros.carbs}g</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-2">
                    <div className="text-xs text-gray-600">Grasas</div>
                    <div className="text-sm font-bold text-primary-600">{recipe.macros.fat}g</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recipe Detail Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">{selectedRecipe.name}</h2>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <Flame className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                    <div className="text-2xl font-bold text-primary-600">{selectedRecipe.calories}</div>
                    <div className="text-xs text-gray-600">Calorías</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">{selectedRecipe.macros.protein}g</div>
                    <div className="text-xs text-gray-600">Proteína</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">{selectedRecipe.macros.carbs}g</div>
                    <div className="text-xs text-gray-600">Carbohidratos</div>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">{selectedRecipe.macros.fat}g</div>
                    <div className="text-xs text-gray-600">Grasas</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <ChefHat className="mr-2 text-primary-600" />
                    Ingredientes
                  </h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Instrucciones</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {!selectedDay ? (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Añadir a plan semanal:</h3>
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
                      onClick={() => handleAddToWeeklyPlan(selectedRecipe)}
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

        {/* Suggestion Form Modal */}
        {showSuggestionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Sugerir Nueva Receta</h2>
                <button
                  onClick={() => setShowSuggestionForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSuggestionSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Receta</label>
                  <input
                    type="text"
                    value={suggestionForm.name}
                    onChange={(e) => setSuggestionForm({...suggestionForm, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                    <select
                      value={suggestionForm.category}
                      onChange={(e) => setSuggestionForm({...suggestionForm, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    >
                      {recipeCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Calorías</label>
                    <input
                      type="number"
                      value={suggestionForm.calories}
                      onChange={(e) => setSuggestionForm({...suggestionForm, calories: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proteína (g)</label>
                    <input
                      type="number"
                      value={suggestionForm.protein}
                      onChange={(e) => setSuggestionForm({...suggestionForm, protein: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Carbos (g)</label>
                    <input
                      type="number"
                      value={suggestionForm.carbs}
                      onChange={(e) => setSuggestionForm({...suggestionForm, carbs: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grasas (g)</label>
                    <input
                      type="number"
                      value={suggestionForm.fat}
                      onChange={(e) => setSuggestionForm({...suggestionForm, fat: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ingredientes (uno por línea)
                  </label>
                  <textarea
                    value={suggestionForm.ingredients}
                    onChange={(e) => setSuggestionForm({...suggestionForm, ingredients: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    rows="5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instrucciones (un paso por línea)
                  </label>
                  <textarea
                    value={suggestionForm.instructions}
                    onChange={(e) => setSuggestionForm({...suggestionForm, instructions: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    rows="5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tu Email (opcional)</label>
                  <input
                    type="email"
                    value={suggestionForm.email}
                    onChange={(e) => setSuggestionForm({...suggestionForm, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg"
                >
                  Enviar Sugerencia
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
