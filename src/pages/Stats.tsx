import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';

export default function Stats() {
  const { habits } = useAppContext();

  const data = [
    { name: 'Completed', value: habits.filter((h) => h.completed).length },
    { name: 'Pending', value: habits.filter((h) => !h.completed).length },
  ];

  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Habits</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{habits.length}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Completion Rate</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">
              {habits.length > 0 ? `${Math.round((habits.filter((h) => h.completed).length / habits.length) * 100)}%` : 'N/A'}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Habit Progress</h2>
        <div className="rounded-xl border bg-card text-card-foreground shadow h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}
