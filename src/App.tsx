import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
// import DashboardLayout from './reactRouter/DashboardLayout';
// import AppsListDisplay from './pages/Dashboard/MainDisplay/AppsListDisplay/AppsListDisplay';
// import OverviewDisplay from './pages/Dashboard/MainDisplay/OverviewDisplay/OverviewDisplay';
// import SettingsDisplay from './pages/Dashboard/MainDisplay/SettingsDisplay/SettingsDisplay';
// import PageDisplay from './pages/Dashboard/MainDisplay/PageDisplay/PageDisplay';
import NotFound from './pages/NotFound/NotFound';

// TODO: typing for routes

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
