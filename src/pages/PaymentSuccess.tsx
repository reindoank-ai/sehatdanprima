import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

export default function PaymentSuccess() {
  const { user, login } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      login({ ...user, isPremium: true });
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  }, [user, login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-500">Your account has been upgraded to Premium.</p>
      <p className="mt-4">Redirecting you to the dashboard...</p>
    </div>
  );
}
