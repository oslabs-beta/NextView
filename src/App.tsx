import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
// import DashboardLayout from './reactRouter/DashboardLayout';
// import AppsListDisplay from './pages/Dashboard/MainDisplay/AppsListDisplay/AppsListDisplay';
// import OverviewDisplay from './pages/Dashboard/MainDisplay/OverviewDisplay/OverviewDisplay';
// import SettingsDisplay from './pages/Dashboard/MainDisplay/SettingsDisplay/SettingsDisplay';
// import PageDisplay from './pages/Dashboard/MainDisplay/PageDisplay/PageDisplay';
import NotFound from './pages/NotFound/NotFound';
import { APIContext } from './contexts/dashboardContexts';

// TODO: typing for routes
// export const apiContext = createContext("null");

// initial value of apiKey to be set to null once setApiKey is implemented in AppsList page

function App() {
  const [apiKey, setApiKey] = useState('5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d');
  return (
    <>
      <APIContext.Provider value={{ apiKey, setApiKey }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </APIContext.Provider>
    </>
  );
}

export default App;
