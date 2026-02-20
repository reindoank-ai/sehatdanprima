import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';
import { Habit } from '../types';

export default function Dashboard() {
  const { user, habits, toggleHabit, addHabit } = useAppContext();
  const [newHabit, setNewHabit] = useState('');
  const navigate = useNavigate();

  const handleAddHabit = () => {
    if (newHabit.trim() === '') return;

    const newHabitObject: Habit = {
      id: Date.now().toString(),
      name: newHabit,
      completed: false,
    };

    if (!addHabit(newHabitObject)) {
      navigate('/upgrade');
    }
    setNewHabit('');
  };

  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Habits Completed</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{habits.filter((h) => h.completed).length} / {habits.length}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Add a new habit..."
            className="w-full p-2 border rounded-md"
          />
          <Button onClick={handleAddHabit}>Add Habit</Button>
        </div>
        <div className="space-y-2">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors ${
                habit.completed ? 'bg-green-100' : 'bg-white'
              }`}
              onClick={() => toggleHabit(habit.id)}
            >
              <span className={habit.completed ? 'line-through text-gray-500' : ''}>
                {habit.name}
              </span>
              <div
                className={`w-6 h-6 rounded-full border-2 ${habit.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
