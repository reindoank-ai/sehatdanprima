import { Habit } from '../types';

export interface Program {
  id: string;
  title: string;
  description: string;
  habits: Omit<Habit, 'id' | 'completedDates'>[];
}

export const programs: Program[] = [
  {
    id: 'p1',
    title: 'Mindful Morning',
    description: 'Start your day with intention and clarity. This program helps you build a calm and focused morning routine.',
    habits: [
      { name: 'Meditate for 5 minutes' },
      { name: 'Write one thing you are grateful for' },
      { name: 'Stretch for 10 minutes' },
    ],
  },
  {
    id: 'p2',
    title: 'Digital Detox',
    description: 'Reduce screen time and reclaim your focus. This program is designed to help you disconnect from digital distractions.',
    habits: [
      { name: 'No phone 1 hour before bed' },
      { name: 'Read a physical book for 15 minutes' },
      { name: 'Go for a walk without your phone' },
    ],
  },
  {
    id: 'p3',
    title: 'Fitness Foundation',
    description: 'Build a consistent fitness routine with these fundamental exercises. Perfect for beginners.',
    habits: [
      { name: '20-minute walk or jog' },
      { name: '10 push-ups' },
      { name: '30-second plank' },
    ],
  },
];
