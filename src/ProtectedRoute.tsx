import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/userContexts';

const ProtectedRoute = ({ children }) => {
  const { username } = useContext(UserContext);
  const isLoggedIn = localStorage.getItem('user') === JSON.stringify(username);

  return isLoggedIn ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
