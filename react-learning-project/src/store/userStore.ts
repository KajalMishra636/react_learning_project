import { create } from 'zustand';
import { User } from '../types';

interface UserState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
}

/**
 * Zustand store for managing user state globally
 * Learn: Global state management with Zustand
 */
export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
