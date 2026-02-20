export interface User {
  id: string;
  email: string;
  isPremium: boolean;
}

export interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

export interface AppState {
  user: User | null;
  habits: Habit[];
}

export interface AppContextType extends AppState {
  login: (user: User) => void;
  logout: () => void;
  addHabit: (habit: Habit) => boolean;
  toggleHabit: (id: string) => void;
}
