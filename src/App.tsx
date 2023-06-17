import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';

// TODO: typing for routes

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
