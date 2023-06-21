import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import { UserContext } from './contexts/userContexts';
import { APIContext } from './contexts/dashboardContexts';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiKey, setApiKey] = useState(null);
  // test apiKey: 5cc036aa-e9fb-43a0-9ed7-8cafb2feb93d

  return (
    <>
      <APIContext.Provider value={{ apiKey, setApiKey }}>
        <UserContext.Provider
          value={{
            username,
            setUsername,
            password,
            setPassword,
            loggedIn,
            setLoggedIn,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard/*' element={<DashboardPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </APIContext.Provider>
    </>
  );
}

export default App;
