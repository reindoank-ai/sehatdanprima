import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

// Layouts and Pages
import ProtectedRoute from '../components/ProtectedRoute';
import Landing from '../pages/Landing';
import OnboardingGoals from '../pages/OnboardingGoals';
import OnboardingHabits from '../pages/OnboardingHabits';
import Dashboard from '../pages/Dashboard';
import Stats from '../pages/Stats';
import Programs from '../pages/Programs';
import Account from '../pages/Account';
import Upgrade from '../pages/Upgrade';
import PaymentSuccess from '../pages/PaymentSuccess';

const AppRouter = () => {
  const { user } = useAppContext();

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/dashboard" /> : <Landing />,
    },
    {
      path: '/upgrade',
      element: <Upgrade />,
    },
    {
      path: '/success',
      element: <PaymentSuccess />,
    },
    {
      path: '/onboarding-goals',
      element: <OnboardingGoals />,
    },
    {
      path: '/onboarding-habits',
      element: <OnboardingHabits />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/stats',
          element: <Stats />,
        },
        {
          path: '/programs',
          element: <Programs />,
        },
        {
          path: '/account',
          element: <Account />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
