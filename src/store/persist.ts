import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PersistState {
  theme: 'dark' | 'light';
  setTheme: (state: 'dark' | 'light') => void;
}

export const usePersistStore = create<PersistState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (state) => set({ theme: state }),
    }),
    {
      name: 'jiang-jiang-persist-store',
      onRehydrateStorage: () => {
        return (state) => {
          if (!state) {
            return;
          }
          if (state.theme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        };
      },
    },
  ),
);
