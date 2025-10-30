import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Plus, Scale, Calendar, Target } from 'lucide-react';

const Progress = () => {
  const { progressData, addProgressEntry, userData } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    bodyFat: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProgressEntry({
      weight: parseFloat(formData.weight),
      bodyFat: formData.bodyFat ? parseFloat(formData.bodyFat) : null,
      notes: formData.notes
    });
    setFormData({ weight: '', bodyFat: '', notes: '' });
    setShowAddForm(false);
  };

  // Format data for the chart
  const chartData = progressData.map((entry) => ({
    date: new Date(entry.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
    peso: entry.weight,
    grasaCorporal: entry.bodyFat
  }));

  // Calculate progress statistics
  const latestEntry = progressData[progressData.length - 1];
  const firstEntry = progressData[0];
  const weightChange = latestEntry && firstEntry ? (latestEntry.weight - firstEntry.weight).toFixed(1) : 0;
  const weightChangePercent = latestEntry && firstEntry ? ((weightChange / firstEntry.weight) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center">
            <TrendingUp className="mr-3" />
            Mi Progreso
          </h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg flex items-center"
          >
            <Plus className="mr-2 h-5 w-5" />
            Registrar Progreso
          </button>
        </div>

        {/* Statistics Cards */}
        {userData && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Scale className="h-8 w-8 text-primary-600" />
                <span className="text-sm text-gray-500">Peso Actual</span>
              </div>
              <div className="text-3xl font-bold text-gray-800">
                {latestEntry ? latestEntry.weight : userData.currentWeight} kg
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-8 w-8 text-secondary-600" />
                <span className="text-sm text-gray-500">Peso Objetivo</span>
              </div>
              <div className="text-3xl font-bold text-gray-800">{userData.targetWeight} kg</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-8 w-8 text-primary-600" />
                <span className="text-sm text-gray-500">Cambio Total</span>
              </div>
              <div className={`text-3xl font-bold ${weightChange < 0 ? 'text-green-600' : 'text-orange-600'}`}>
                {weightChange > 0 ? '+' : ''}{weightChange} kg
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {weightChangePercent > 0 ? '+' : ''}{weightChangePercent}%
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-8 w-8 text-secondary-600" />
                <span className="text-sm text-gray-500">Registros</span>
              </div>
              <div className="text-3xl font-bold text-gray-800">{progressData.length}</div>
            </div>
          </div>
        )}

        {/* Chart */}
        {chartData.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Evolución del Peso</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="peso"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  name="Peso (kg)"
                  dot={{ fill: '#8b5cf6', r: 6 }}
                />
                {chartData.some(d => d.grasaCorporal) && (
                  <Line
                    type="monotone"
                    dataKey="grasaCorporal"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Grasa Corporal (%)"
                    dot={{ fill: '#3b82f6', r: 6 }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 text-center">
            <TrendingUp className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Aún no hay datos de progreso</h3>
            <p className="text-gray-600 mb-4">Comienza a registrar tu peso para ver tu evolución</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg"
            >
              Registrar Primer Progreso
            </button>
          </div>
        )}

        {/* Progress History */}
        {progressData.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Historial de Registros</h2>
            <div className="space-y-4">
              {[...progressData].reverse().map((entry, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-lg font-bold text-gray-800">{entry.weight} kg</div>
                      {entry.bodyFat && (
                        <div className="text-sm text-gray-600">Grasa corporal: {entry.bodyFat}%</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                  {entry.notes && (
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{entry.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Progress Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Registrar Progreso</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Peso (kg) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grasa Corporal (%) - Opcional
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.bodyFat}
                    onChange={(e) => setFormData({ ...formData, bodyFat: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notas - Opcional
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows="3"
                    placeholder="¿Cómo te sientes? ¿Algún logro especial?"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
