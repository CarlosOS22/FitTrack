import { createContext, useContext, useState, useEffect } from 'react';

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar usuarios registrados y sesión actual desde localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('fittrack_users');
    const savedCurrentUser = localStorage.getItem('fittrack_current_user');

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    if (savedCurrentUser) {
      setCurrentUser(JSON.parse(savedCurrentUser));
    }

    setLoading(false);
  }, []);

  // Guardar usuarios en localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('fittrack_users', JSON.stringify(users));
    }
  }, [users]);

  // Guardar sesión actual en localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('fittrack_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('fittrack_current_user');
    }
  }, [currentUser]);

  // Registrar nuevo usuario
  const register = (userData) => {
    const { email, password, name, age, gender } = userData;

    // Verificar si el email ya está registrado
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return { success: false, message: 'Este email ya está registrado' };
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Email inválido' };
    }

    // Validar contraseña
    if (password.length < 6) {
      return { success: false, message: 'La contraseña debe tener al menos 6 caracteres' };
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // En producción, esto debería estar hasheado
      name,
      age: age || null,
      gender: gender || null,
      createdAt: new Date().toISOString(),
    };

    setUsers([...users, newUser]);

    // Auto-login después del registro
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setCurrentUser(userWithoutPassword);

    return { success: true, message: 'Registro exitoso' };
  };

  // Iniciar sesión
  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Email o contraseña incorrectos' };
    }

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    setCurrentUser(userWithoutPassword);

    return { success: true, message: 'Inicio de sesión exitoso' };
  };

  // Cerrar sesión
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('fittrack_current_user');
  };

  // Actualizar perfil de usuario
  const updateProfile = (updates) => {
    if (!currentUser) return { success: false, message: 'No hay sesión activa' };

    const updatedUser = { ...currentUser, ...updates };
    setCurrentUser(updatedUser);

    // Actualizar en la lista de usuarios
    const updatedUsers = users.map(user =>
      user.id === currentUser.id
        ? { ...user, ...updates }
        : user
    );
    setUsers(updatedUsers);

    return { success: true, message: 'Perfil actualizado' };
  };

  const value = {
    currentUser,
    users,
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
