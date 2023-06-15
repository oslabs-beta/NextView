import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import OverviewDisplay from './pages/Dashboard/MainDisplay/OverviewDisplay/OverviewDisplay';

// TODO: typing for routes

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
