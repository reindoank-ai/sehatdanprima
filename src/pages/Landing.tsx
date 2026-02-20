import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAppContext } from '../hooks/useAppContext';
import { Flame, Calendar, Target, MoveRight, Sparkles, TrendingUp, Award } from 'lucide-react';

export default function Landing() {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login({ id: 'guest', email: 'guest@sehatprima.com' });
    navigate('/onboarding-goals');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-slate-200/80">
        <h1 className="text-xl font-bold text-slate-900">Sehat & Prima</h1>
        <nav className="ml-auto">
          <Button onClick={handleGuestLogin} variant="primary">Mulai Gratis</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-16">
        <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
                 style={{backgroundImage: 'url(https://picsum.photos/seed/fitness-duo/1920/1080)'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-slate-900/10" />
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-lg">Ubah Hidup Anda, Satu Kebiasaan Sekaligus.</h1>
            <p className="max-w-[700px] mx-auto text-lg text-white/90 md:text-xl mb-8 text-shadow">
              Aplikasi pelacak kebiasaan yang dirancang untuk membantu Anda membangun rutinitas positif dan mencapai tujuan kebugaran Anda.
            </p>
            <Button size="lg" onClick={handleGuestLogin} className="group bg-white text-slate-900 hover:bg-slate-200 shadow-lg transform hover:scale-105 transition-transform">
              Mulai Perjalanan Anda <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section className="w-full py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Semua yang Anda Butuhkan untuk Sukses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Large */}
              <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <Sparkles className="w-10 h-10 text-indigo-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Program Terpandu</h3>
                  <p className="text-slate-600">Mulai dengan program yang dirancang ahli untuk tujuan spesifik seperti 'Pagi Penuh Kesadaran' atau 'Detoks Digital'.</p>
                </div>
                <img src="https://picsum.photos/seed/program-visual/600/400" alt="Program visual" className="mt-6 rounded-lg shadow-md" />
              </div>
              {/* Card 2: Small */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 transform hover:-translate-y-2 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Lacak Kemajuan</h3>
                <p className="text-slate-600">Lihat riwayat kebiasaan Anda dalam tampilan kalender yang intuitif.</p>
              </div>
              {/* Card 3: Small */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 transform hover:-translate-y-2 transition-transform duration-300">
                <Flame className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Jaga Api Semangat</h3>
                <p className="text-slate-600">Visualisasikan konsistensi Anda dengan *streak counter*. Jangan biarkan apinya padam!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Award className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Memulai Transformasi Anda?</h2>
            <p className="max-w-[600px] mx-auto text-slate-600 md:text-lg mb-8">
              Bergabunglah sekarang dan mulailah membangun versi terbaik dari diri Anda. Gratis selamanya.
            </p>
            <Button size="lg" onClick={handleGuestLogin} variant="primary" className="group shadow-lg transform hover:scale-105 transition-transform">
              Coba Sekarang Gratis <MoveRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sehat & Prima. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
