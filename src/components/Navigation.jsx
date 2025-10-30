import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Dumbbell, Calendar, TrendingUp } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/recipes', icon: UtensilsCrossed, label: 'Recetas' },
    { path: '/exercises', icon: Dumbbell, label: 'Ejercicios' },
    { path: '/weekly-plan', icon: Calendar, label: 'Plan Semanal' },
    { path: '/progress', icon: TrendingUp, label: 'Progreso' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <span className="text-2xl font-bold">FitTrack</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 flex overflow-x-auto space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-white/20 backdrop-blur-sm'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
