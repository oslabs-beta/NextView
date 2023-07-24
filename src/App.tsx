import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import { UserContext } from './contexts/userContexts';
import { APIContext } from './contexts/dashboardContexts';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiKey, setApiKey] = useState(null);

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
            <Route
              path='/dashboard/*'
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </APIContext.Provider>
    </>
  );
}

export default App;
