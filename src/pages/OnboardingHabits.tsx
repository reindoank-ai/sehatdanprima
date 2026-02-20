import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAppContext } from '../hooks/useAppContext';
import { Habit } from '../types';

const suggestedHabits = [
  'Drink 8 glasses of water',
  'Read for 15 minutes',
  'Meditate for 5 minutes',
  'Go for a 20-minute walk',
  'Write in a journal',
  'Stretch for 10 minutes',
];

export default function OnboardingHabits() {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);
  const { addHabit } = useAppContext();
  const navigate = useNavigate();

  const toggleHabit = (habit: string) => {
    setSelectedHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  const handleContinue = () => {
    selectedHabits.forEach((habitName) => {
      const newHabit: Habit = {
        id: Date.now().toString() + habitName,
        name: habitName,
        completedDates: [],
      };
      addHabit(newHabit);
    });
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-2">Let's build some habits</h1>
        <p className="text-gray-500 mb-8">Select a few habits to start with. You can always add more later.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {suggestedHabits.map((habit) => (
            <button
              key={habit}
              onClick={() => toggleHabit(habit)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                selectedHabits.includes(habit)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white hover:bg-gray-100'
              }`}>
              {habit}
            </button>
          ))}
        </div>
        <Button size="lg" onClick={handleContinue} disabled={selectedHabits.length === 0}>
          Finish Setup
        </Button>
      </div>
    </div>
  );
}
