export interface User {
  id: string;
  email: string;
}

export interface Habit {
  id: string;
  name: string;
  completedDates: string[]; // Store dates as ISO strings (e.g., '2023-10-27')
}

export interface AppState {
  user: User | null;
  habits: Habit[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  habits: Omit<Habit, 'id' | 'completedDates'>[];
}

export interface AppContextType extends AppState {
  theme: 'light' | 'dark' | 'system';
  login: (user: User) => void;
  logout: () => void;
  addHabit: (habit: Habit) => void;
  addMultipleHabits: (habits: Omit<Habit, 'id' | 'completedDates'>[]) => void;
  toggleHabit: (id: string) => void;
  toggleTheme: () => void;
}
