import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import {
  UserContext,
  AppsListContext,
  AppListItem,
} from './contexts/userContexts';
import { APIContext } from './contexts/dashboardContexts';
import OverviewDisplay from './pages/Dashboard/MainDisplay/OverviewDisplay/OverviewDisplay';
// import PageDisplay from './pages/Dashboard/MainDisplay/PageDisplay/PageDisplay';
// import AppsListDisplay from './pages/Dashboard/MainDisplay/AppsListDisplay/AppsListDisplay';
// import DashboardPageLayout from './layouts/DashboardPageLayout';
import MainDisplay from './pages/Dashboard/MainDisplay/MainDisplay';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';

import Mock1 from './pages/Mock1';
import Mock2 from './pages/Mock2';

// TODO: typing for routes
// export const apiContext = createContext("null");
// initial value of apiKey to be set to null once setApiKey is implemented in AppsList page

function App() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [applicationlist, setapplicationlist] = useState<AppListItem[]>([
    {
      id: 1n,
      user_id: 1n,
      app_name: '',
      created_on: new Date(),
    },
  ]);
  const [apiKey, setApiKey] = useState('5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d');

  return (
    <>
      <APIContext.Provider value={{ apiKey, setApiKey }}>
        <UserContext.Provider
          value={{ username, setUsername, loggedIn, setLoggedIn }}
        >
          <AppsListContext.Provider
            value={{ applicationlist, setapplicationlist }}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/dashboard' element={<DashboardLayout />}>
                <Route index element={<Mock1 />} />
                <Route path='pages' element={<Mock2 />} />
              </Route>

              <Route path='*' element={<NotFound />} />
            </Routes>
          </AppsListContext.Provider>
        </UserContext.Provider>
      </APIContext.Provider>
    </>
  );
}

export default App;
