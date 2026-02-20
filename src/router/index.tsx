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
import ProgramDetail from '../pages/ProgramDetail';

import Petunjuk from '../pages/Petunjuk';

const AppRouter = () => {
  const { user } = useAppContext();

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/dashboard" /> : <Landing />,
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
          path: '/program/:id',
          element: <ProgramDetail />,
        },
        {
          path: '/account',
          element: <Account />,
        },
        {
          path: '/petunjuk',
          element: <Petunjuk />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
