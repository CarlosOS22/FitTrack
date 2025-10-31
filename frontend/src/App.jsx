import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Exercises from './pages/Exercises';
import WeeklyPlan from './pages/WeeklyPlan';
import Progress from './pages/Progress';
import ShoppingList from './pages/ShoppingList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router basename="/FitTrack">
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/weekly-plan" element={<WeeklyPlan />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
