import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return storedUser ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
