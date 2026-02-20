import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAppContext } from '../hooks/useAppContext';
import { Flame, Calendar, Target, MoveRight } from 'lucide-react';

export default function Landing() {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login({ id: 'guest', email: 'guest@sehatprima.com' });
    navigate('/onboarding-goals');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm">
        <h1 className="text-xl font-bold">Sehat & Prima</h1>
        <nav className="ml-auto">
          <Button onClick={handleGuestLogin}>Get Started - It's Free</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Ubah Hidup Anda, Satu Kebiasaan Sekaligus.</h1>
            <p className="max-w-[700px] mx-auto text-lg text-muted-foreground md:text-xl mb-8">
              Sehat & Prima adalah aplikasi pelacak kebiasaan yang simpel dan powerful untuk membantu Anda membangun rutinitas positif dan mencapai tujuan Anda.
            </p>
            <Button size="lg" onClick={handleGuestLogin} className="group">
              Mulai Perjalanan Anda <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Jaga Api Semangatmu</h3>
                <p className="text-muted-foreground">Visualisasikan konsistensi Anda dengan fitur *streak counter*. Jangan biarkan apinya padam!</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Program Terpandu</h3>
                <p className="text-muted-foreground">Mulai dengan program yang dirancang ahli untuk tujuan spesifik seperti 'Mindful Morning' atau 'Digital Detox'.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lacak Kemajuan Anda</h3>
                <p className="text-muted-foreground">Lihat riwayat kebiasaan Anda dalam tampilan kalender yang intuitif dan tetap termotivasi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="w-full py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-semibold italic">"We are what we repeatedly do. Excellence, then, is not an act, but a habit."</p>
              <footer className="mt-4 text-muted-foreground">— Will Durant</footer>
            </blockquote>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Memulai?</h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg mb-8">
              Bergabunglah sekarang dan mulailah membangun versi terbaik dari diri Anda. Gratis selamanya.
            </p>
            <Button size="lg" onClick={handleGuestLogin} className="group">
              Coba Sekarang Gratis <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sehat & Prima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
