import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAppContext } from '../hooks/useAppContext';

export default function Landing() {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login({ id: 'guest', email: 'guest@sehatprima.com', isPremium: false });
    navigate('/onboarding-goals');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-xl font-semibold">Sehat & Prima</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link to="/upgrade">Pricing</Link>
          </Button>
          <Button onClick={handleGuestLogin}>Try as Guest</Button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Build Habits That Last a Lifetime</h1>
          <p className="text-lg text-gray-500 md:text-xl">
            Sehat & Prima helps you track your habits, achieve your goals, and build a healthier, more productive life. One day at a time.
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={handleGuestLogin}>Start Your Journey</Button>
        </div>
      </main>
    </div>
  );
}
