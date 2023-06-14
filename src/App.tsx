import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home fakeProp='fakeProp' />} />
          <Route
            path='/dashboard'
            element={<DashboardPage fakeProp='fakeProp' />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
