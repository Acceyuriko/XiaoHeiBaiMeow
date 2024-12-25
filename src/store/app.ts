import { create } from 'zustand';

export interface AppState {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  loading: true,
  setLoading: (state) => set({ loading: state }),
}));
