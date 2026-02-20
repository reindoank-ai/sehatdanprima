import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';
import { programs } from '../data/programs';
import { ArrowLeft, Clock, Layers } from 'lucide-react';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const { addMultipleHabits } = useAppContext();
  const navigate = useNavigate();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Program tidak ditemukan</h1>
          <Link to="/programs" className="text-primary hover:underline mt-4 inline-block">Kembali ke Program</Link>
        </div>
      </Layout>
    );
  }

  const handleStartProgram = () => {
    addMultipleHabits(program.habits);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Link to="/programs" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} />
          Kembali ke Program
        </Link>

        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-3xl font-bold text-white">{program.emoji} {program.title}</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Tentang Program Ini</h2>
            <p className="text-muted-foreground leading-relaxed">{program.longDescription}</p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Kebiasaan dalam Program Ini</h3>
            <div className="space-y-3">
              {program.habits.map((habit) => (
                <div key={habit.name} className="flex items-center gap-3 p-3 rounded-lg bg-card">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <span className="text-primary">✓</span>
                  </div>
                  <span>{habit.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-card p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Kategori</div>
                  <div className="font-semibold">{program.category}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Durasi</div>
                  <div className="font-semibold">{program.duration}</div>
                </div>
              </div>
              <Button className="w-full mt-4" onClick={handleStartProgram}>
                Mulai Program Ini
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
