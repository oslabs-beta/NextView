import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/userContexts';

const ProtectedRoute = ({ children }) => {
  const { username } = useContext(UserContext);
  const isLoggedIn = JSON.parse(localStorage.getItem('user')) === username;

  return isLoggedIn ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
