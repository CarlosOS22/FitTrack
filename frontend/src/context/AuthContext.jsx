import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar sesión actual desde localStorage al iniciar
  useEffect(() => {
    const savedCurrentUser = localStorage.getItem('fittrack_current_user');

    if (savedCurrentUser) {
      try {
        setCurrentUser(JSON.parse(savedCurrentUser));
      } catch (error) {
        console.error('Error al cargar usuario desde localStorage:', error);
        localStorage.removeItem('fittrack_current_user');
      }
    }

    setLoading(false);
  }, []);

  // Guardar sesión actual en localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('fittrack_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('fittrack_current_user');
    }
  }, [currentUser]);

  // Registrar nuevo usuario
  const register = async (userData) => {
    try {
      const response = await api.auth.register(userData);

      if (response.success) {
        // Auto-login después del registro
        setCurrentUser(response.user);
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Error en registro:', error);
      return {
        success: false,
        message: error.message || 'Error al registrar usuario. Verifica tu conexión con el backend.'
      };
    }
  };

  // Iniciar sesión
  const login = async (email, password) => {
    try {
      const response = await api.auth.login(email, password);

      if (response.success) {
        setCurrentUser(response.user);
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Error en login:', error);
      return {
        success: false,
        message: error.message || 'Error al iniciar sesión. Verifica tu conexión con el backend.'
      };
    }
  };

  // Cerrar sesión
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('fittrack_current_user');
  };

  // Actualizar perfil de usuario
  const updateProfile = async (updates) => {
    if (!currentUser) return { success: false, message: 'No hay sesión activa' };

    try {
      const response = await api.auth.updateProfile(currentUser.id, updates);

      if (response.success) {
        const updatedUser = { ...currentUser, ...updates };
        setCurrentUser(updatedUser);
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      return {
        success: false,
        message: error.message || 'Error al actualizar perfil'
      };
    }
  };

  const value = {
    currentUser,
    loading,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
