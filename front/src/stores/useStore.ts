import { create } from 'zustand';

interface AppState {
  count: number;
  increaseCount: () => void;
  resetCount: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));
