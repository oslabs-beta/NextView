import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return isLoggedIn ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
