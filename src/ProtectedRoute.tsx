import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem('loggedIn') ? (
    children
  ) : (
    <Navigate to='/' replace />
  );
};

export default ProtectedRoute;
