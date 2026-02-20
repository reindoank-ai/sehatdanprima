import { useMemo } from 'react';
import { Habit } from '../types';
import { differenceInCalendarDays, parseISO, subDays } from 'date-fns';

export const useHabitStreak = (habit: Habit) => {
  const streak = useMemo(() => {
    if (!habit || habit.completedDates.length === 0) {
      return 0;
    }

    const sortedDates = habit.completedDates.map(date => parseISO(date)).sort((a, b) => b.getTime() - a.getTime());

    let currentStreak = 0;
    let today = new Date();

    // Check if today is completed
    if (differenceInCalendarDays(today, sortedDates[0]) === 0) {
      currentStreak = 1;
      today = subDays(today, 1);
    } else if (differenceInCalendarDays(today, sortedDates[0]) === 1) {
      // Check if yesterday was completed
      currentStreak = 1;
      today = subDays(today, 1);
    } else {
      return 0; // Streak is broken
    }

    for (let i = 1; i < sortedDates.length; i++) {
      if (differenceInCalendarDays(today, sortedDates[i]) === 0) {
        currentStreak++;
        today = subDays(today, 1);
      } else {
        break; // Streak is broken
      }
    }

    return currentStreak;
  }, [habit]);

  return streak;
};
