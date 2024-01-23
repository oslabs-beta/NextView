import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  let storedUser;
  try {
    storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  } catch (error) {
    console.error('Error parsing user from localStorage', error);
    storedUser = null;
  }

  if (storedUser) {
    return <>{children}</>;
  }

  return <Navigate to='/' replace />;
};

export default ProtectedRoute;
