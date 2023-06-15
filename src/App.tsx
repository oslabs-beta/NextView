import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import PageDisplay from './pages/Dashboard/MainDisplay/PageDisplay/PageDisplay';

// TODO: typing for routes

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<PageDisplay />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
