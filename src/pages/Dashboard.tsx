import { useState, useMemo } from 'react';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';
import { Habit } from '../types';
import { useHabitStreak } from '../hooks/useHabitStreak';
import { Flame, Check, Plus, TrendingUp, CheckCircle, Award } from 'lucide-react';

const quotes = [
  "The secret of getting ahead is getting started.",
  "The journey of a thousand miles begins with a single step.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is the sum of small efforts, repeated day in and day out."
];

const HabitItem = ({ habit }: { habit: Habit }) => {
  const { toggleHabit } = useAppContext();
  const streak = useHabitStreak(habit);
  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = habit.completedDates.includes(today);

  return (
    <div
      onClick={() => toggleHabit(habit.id)}
      className={`relative flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${isCompletedToday ? 'bg-primary/10 text-primary-foreground' : 'bg-card'}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-colors ${isCompletedToday ? 'bg-primary' : 'bg-primary/20'}`}>
        {isCompletedToday ? <Check className="w-6 h-6 text-white" /> : <div className="w-6 h-6" />}
      </div>
      <span className={`font-medium ${isCompletedToday ? 'line-through text-muted-foreground' : 'text-card-foreground'}`}>
        {habit.name}
      </span>
      {streak > 0 && (
        <div className="ml-auto flex items-center gap-1 text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full text-sm font-semibold">
          <Flame size={16} />
          <span>{streak}</span>
        </div>
      )}
    </div>
  );
};

export default function Dashboard() {
  const { user, habits, addHabit } = useAppContext();
  const [newHabit, setNewHabit] = useState('');
  const randomQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);

  const handleAddHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabit.trim() === '') return;
    addHabit({ id: Date.now().toString(), name: newHabit, completedDates: [] });
    setNewHabit('');
  };

  const today = new Date().toISOString().split('T')[0];
  const completedTodayCount = habits.filter(h => h.completedDates.includes(today)).length;
  const progressPercentage = habits.length > 0 ? Math.round((completedTodayCount / habits.length) * 100) : 0;
  const longestStreak = Math.max(0, ...habits.map(h => useHabitStreak(h)));

  return (
    <Layout>
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="relative rounded-xl overflow-hidden mb-8 p-8 flex flex-col justify-end min-h-[250px] bg-cover bg-center text-white"
             style={{backgroundImage: 'url(https://picsum.photos/seed/nature-calm/1200/400)'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold">Hello, {user?.email.split('@')[0] || 'Guest'}!</h1>
            <p className="mt-2 text-lg italic opacity-90">{randomQuote}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="bg-card p-6 rounded-xl flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Completed Today</div>
              <div className="text-2xl font-bold">{completedTodayCount} / {habits.length}</div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Today's Progress</div>
              <div className="text-2xl font-bold">{progressPercentage}%</div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl flex items-center gap-4">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Longest Streak</div>
              <div className="text-2xl font-bold">{longestStreak} Days</div>
            </div>
          </div>
        </div>

        {/* Habits List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Today's Habits</h2>
          <form onSubmit={handleAddHabit} className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              placeholder="Add a new habit to your list..."
              className="w-full p-3 border-none rounded-lg bg-card text-card-foreground focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="icon">
              <Plus />
            </Button>
          </form>
          <div className="space-y-3">
            {habits.length > 0 ? (
              habits.map((habit) => <HabitItem key={habit.id} habit={habit} />)
            ) : (
              <div className="text-center py-12 bg-card rounded-xl">
                <p className="text-muted-foreground">No habits yet. Add one to get started!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
