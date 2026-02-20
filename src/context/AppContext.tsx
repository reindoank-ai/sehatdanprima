import { createContext, useState, useEffect, ReactNode } from 'react';
import { AppContextType, AppState, User, Habit } from '../types';

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
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
    if (!state.user?.isPremium && state.habits.length >= 3) {
      return false; // Limit reached
    }
    setState((prevState) => ({ ...prevState, habits: [...prevState.habits, habit] }));
    return true;
  };

  const toggleHabit = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      habits: prevState.habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      ),
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, login, logout, addHabit, toggleHabit }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
