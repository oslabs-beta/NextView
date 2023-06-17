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

// TODO: typing for routes

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

  return (
    <>
      <UserContext.Provider
        value={{ username, setUsername, loggedIn, setLoggedIn }}
      >
        <AppsListContext.Provider
          value={{ applicationlist, setapplicationlist }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AppsListContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
