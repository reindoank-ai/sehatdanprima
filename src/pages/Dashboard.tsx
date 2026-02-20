import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';
import { Habit } from '../types';
import { useHabitStreak } from '../hooks/useHabitStreak';
import { Flame } from 'lucide-react';

const HabitItem = ({ habit }: { habit: Habit }) => {
  const { toggleHabit } = useAppContext();
  const streak = useHabitStreak(habit);
  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = habit.completedDates.includes(today);

  return (
    <div
      key={habit.id}
      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors ${
        isCompletedToday ? 'bg-green-100 dark:bg-green-900/50' : 'bg-white dark:bg-gray-800'
      }`}
      onClick={() => toggleHabit(habit.id)}
    >
      <span className={isCompletedToday ? 'line-through text-gray-500' : ''}>
        {habit.name}
      </span>
      <div className="flex items-center gap-2">
        {streak > 0 && (
          <div className="flex items-center gap-1 text-orange-500">
            <Flame size={16} />
            <span>{streak}</span>
          </div>
        )}
        <div
          className={`w-6 h-6 rounded-full border-2 ${
            isCompletedToday ? 'bg-green-500 border-green-500' : 'border-gray-300 dark:border-gray-600'
          }`}>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { habits, addHabit } = useAppContext();
  const [newHabit, setNewHabit] = useState('');
  const navigate = useNavigate();

  const handleAddHabit = () => {
    if (newHabit.trim() === '') return;

    const newHabitObject: Habit = {
      id: Date.now().toString(),
      name: newHabit,
      completedDates: [],
    };

    addHabit(newHabitObject);
    setNewHabit('');
  };

  const today = new Date().toISOString().split('T')[0];
  const completedTodayCount = habits.filter(h => h.completedDates.includes(today)).length;
  const progressPercentage = habits.length > 0 ? Math.round((completedTodayCount / habits.length) * 100) : 0;

  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Completed Today</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{completedTodayCount} / {habits.length}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Progress</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{progressPercentage}%</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Weekly Goal</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">Coming Soon</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Add a new habit..."
            className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
          />
          <Button onClick={handleAddHabit}>Add Habit</Button>
        </div>
        <div className="space-y-2">
          {habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
