import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Page1 from './pages/Dashboard';
import Home from './pages/Dashboard/Dashboard';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home fakeProp='fakeProp' />} />
          <Route
            path='/Dashboard'
            element={<DashboardPage fakeProp='fakeProp' />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
