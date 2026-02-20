import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';
import { programs } from '../data/programs';
import { Button } from '../components/Button';
import { Program } from '../types';

export default function Programs() {
  const { addMultipleHabits } = useAppContext();
  const navigate = useNavigate();

  const handleStartProgram = (program: Program) => {
    addMultipleHabits(program.habits);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Guided Programs</h1>
        <p className="text-lg text-muted-foreground">Unlock your potential with our expert-led programs.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {programs.map((program) => (
          <div key={program.id} className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
            <div className="p-6 flex-grow">
              <h2 className="text-2xl font-bold mb-2">{program.title}</h2>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <ul className="space-y-2 text-sm text-left">
                {program.habits.map((habit) => (
                  <li key={habit.name} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{habit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Button className="w-full" onClick={() => handleStartProgram(program)}>
                Start Program
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
