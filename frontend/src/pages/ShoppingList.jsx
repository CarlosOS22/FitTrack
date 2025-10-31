import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, Plus, Trash2, Check, X, RefreshCw } from 'lucide-react';

const ShoppingList = () => {
  const { weeklyPlan, shoppingList, loadShoppingList, addToShoppingList, updateShoppingItem, removeFromShoppingList, generateShoppingListFromPlan } = useApp();
  const { currentUser, isAuthenticated } = useAuth();
  const [newIngredient, setNewIngredient] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      loadShoppingList();
    }
  }, [isAuthenticated, currentUser]);

  const handleAddIngredient = async (e) => {
    e.preventDefault();
    if (!newIngredient.trim()) return;

    try {
      await addToShoppingList(newIngredient.trim(), newQuantity.trim() || null);
      setNewIngredient('');
      setNewQuantity('');
    } catch (error) {
      console.error('Error añadiendo ingrediente:', error);
    }
  };

  const handleToggleChecked = async (item) => {
    try {
      await updateShoppingItem(item.id, { checked: item.checked ? 0 : 1 });
    } catch (error) {
      console.error('Error actualizando ingrediente:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeFromShoppingList(itemId);
    } catch (error) {
      console.error('Error eliminando ingrediente:', error);
    }
  };

  const handleGenerateFromPlan = async () => {
    setIsGenerating(true);
    try {
      await generateShoppingListFromPlan();
    } catch (error) {
      console.error('Error generando lista:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearChecked = async () => {
    const checkedItems = shoppingList.filter(item => item.checked);
    if (checkedItems.length === 0) return;

    if (window.confirm(`¿Eliminar ${checkedItems.length} ingredientes comprados?`)) {
      try {
        for (const item of checkedItems) {
          await removeFromShoppingList(item.id);
        }
      } catch (error) {
        console.error('Error eliminando ingredientes:', error);
      }
    }
  };

  const uncheckedItems = shoppingList.filter(item => !item.checked);
  const checkedItems = shoppingList.filter(item => item.checked);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Inicia Sesión</h2>
            <p className="text-gray-600">Necesitas iniciar sesión para usar la lista de compra</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2 flex items-center">
            <ShoppingCart className="mr-3" />
            Lista de la Compra
          </h1>
          <p className="text-gray-600">Ingredientes necesarios para tu plan semanal</p>
        </div>

        {/* Botón para generar desde plan semanal */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">Genera tu lista automáticamente</h3>
              <p className="text-primary-100">Obtén todos los ingredientes de las recetas de tu plan semanal</p>
            </div>
            <button
              onClick={handleGenerateFromPlan}
              disabled={isGenerating}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all disabled:opacity-50 flex items-center"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Generando...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Generar Lista
                </>
              )}
            </button>
          </div>
        </div>

        {/* Formulario para añadir ingrediente manualmente */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Añadir Ingrediente</h2>
          <form onSubmit={handleAddIngredient} className="flex gap-4">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="Ingrediente (ej: Tomates)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <input
              type="text"
              value={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
              placeholder="Cantidad (ej: 500g)"
              className="w-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Añadir
            </button>
          </form>
        </div>

        {/* Lista de ingredientes pendientes */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Por Comprar ({uncheckedItems.length})
            </h2>
            {checkedItems.length > 0 && (
              <button
                onClick={handleClearChecked}
                className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Limpiar comprados
              </button>
            )}
          </div>

          {uncheckedItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <ShoppingCart className="h-16 w-16 mx-auto mb-3 text-gray-300" />
              <p className="font-medium">No hay ingredientes pendientes</p>
              <p className="text-sm">Añade ingredientes o genera la lista desde tu plan semanal</p>
            </div>
          ) : (
            <div className="space-y-2">
              {uncheckedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <button
                    onClick={() => handleToggleChecked(item)}
                    className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-primary-600 transition-all"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.ingredient}</p>
                    {item.quantity && (
                      <p className="text-sm text-gray-500">{item.quantity}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lista de ingredientes comprados */}
        {checkedItems.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Comprados ({checkedItems.length})
            </h2>
            <div className="space-y-2">
              {checkedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <button
                    onClick={() => handleToggleChecked(item)}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-all"
                  >
                    <Check className="h-4 w-4 text-white" />
                  </button>
                  <div className="flex-1 opacity-60">
                    <p className="font-medium text-gray-800 line-through">{item.ingredient}</p>
                    {item.quantity && (
                      <p className="text-sm text-gray-500 line-through">{item.quantity}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
