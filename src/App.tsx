import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
