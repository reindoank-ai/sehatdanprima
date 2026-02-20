import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const ProtectedRoute = () => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
