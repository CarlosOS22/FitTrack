import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Dumbbell, Calendar, TrendingUp, ShoppingCart, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { currentUser, logout, isAuthenticated } = useAuth();

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/recipes', icon: UtensilsCrossed, label: 'Recetas' },
    { path: '/exercises', icon: Dumbbell, label: 'Ejercicios' },
    { path: '/weekly-plan', icon: Calendar, label: 'Plan Semanal' },
    { path: '/shopping-list', icon: ShoppingCart, label: 'Lista Compra' },
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

          <div className="hidden md:flex items-center space-x-1">
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

            {/* Authentication Buttons */}
            <div className="ml-4 flex items-center space-x-2 border-l border-white/30 pl-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-lg">
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{currentUser?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Salir</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all"
                  >
                    <UserPlus className="h-5 w-5" />
                    <span>Registro</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex overflow-x-auto space-x-2 mb-2">
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

          {/* Mobile Auth Buttons */}
          <div className="flex justify-center space-x-2 pt-2 border-t border-white/30">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-lg text-sm">
                  <User className="h-4 w-4" />
                  <span>{currentUser?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all text-sm"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all text-sm"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Registro</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
