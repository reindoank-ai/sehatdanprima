import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { AppContextType, AppState, User, Habit } from '../types';

export const AppContext = createContext<AppContextType | null>(null);

type Theme = 'light' | 'dark' | 'system';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [state, setState] = useState<AppState>(() => {
    try {
      const storedState = localStorage.getItem('appState');
      return storedState ? JSON.parse(storedState) : { user: null, habits: [] };
    } catch (error) {
      console.error('Error parsing state from localStorage', error);
      return { user: null, habits: [] };
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme') as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
    }

    root.classList.remove('light', 'dark');

    let systemTheme: Theme = 'light';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      systemTheme = 'dark';
    }

    root.classList.add(theme === 'system' ? systemTheme : theme);
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('appState', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving state to localStorage', error);
    }
  }, [state]);

  const login = (user: User) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const logout = () => {
    setState({ user: null, habits: [] });
  };

  const addHabit = (habit: Habit) => {
    setState((prevState) => ({ ...prevState, habits: [...prevState.habits, { ...habit, completedDates: [] }] }));
  };

  const addMultipleHabits = (habitsToAdd: Omit<Habit, 'id' | 'completedDates'>[]) => {
    const newHabits = habitsToAdd
      .filter(habitToAdd => !state.habits.some(existingHabit => existingHabit.name === habitToAdd.name))
      .map(habitToAdd => ({
        id: Date.now().toString() + habitToAdd.name,
        name: habitToAdd.name,
        completedDates: [],
      }));

    setState(prevState => ({ ...prevState, habits: [...prevState.habits, ...newHabits] }));
  };

    const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }, [theme]);

  const toggleHabit = (id: string) => {
    const today = new Date().toISOString().split('T')[0]; // Get date in YYYY-MM-DD format

    setState((prevState) => ({
      ...prevState,
      habits: prevState.habits.map((habit) => {
        if (habit.id === id) {
          const completed = habit.completedDates.includes(today);
          const newCompletedDates = completed
            ? habit.completedDates.filter((date) => date !== today)
            : [...habit.completedDates, today];
          return { ...habit, completedDates: newCompletedDates };
        }
        return habit;
      }),
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, theme, login, logout, addHabit, addMultipleHabits, toggleHabit, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
