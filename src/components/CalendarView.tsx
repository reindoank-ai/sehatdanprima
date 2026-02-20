import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Habit } from '../types';
import { parseISO } from 'date-fns';

interface CalendarViewProps {
  habits: Habit[];
}

export default function CalendarView({ habits }: CalendarViewProps) {
  const completedDays = habits.flatMap(habit => habit.completedDates.map(date => parseISO(date)));

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
      <h3 className="text-lg font-semibold mb-4 text-center">Calendar View</h3>
      <DayPicker
        mode="multiple"
        selected={completedDays}
        showOutsideDays
        fixedWeeks
        className="w-full flex justify-center"
        styles={{
          caption: { color: 'hsl(var(--foreground))' },
          head: { color: 'hsl(var(--muted-foreground))' },
          day: { color: 'hsl(var(--foreground))' },
          day_selected: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
          },
          day_today: { 
            color: 'hsl(var(--primary))',
            fontWeight: 'bold',
          },
          day_outside: { color: 'hsl(var(--muted-foreground))' },
        }}
      />
    </div>
  );
}
