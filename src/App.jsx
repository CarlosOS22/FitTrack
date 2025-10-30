import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Exercises from './pages/Exercises';
import WeeklyPlan from './pages/WeeklyPlan';
import Progress from './pages/Progress';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/weekly-plan" element={<WeeklyPlan />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
