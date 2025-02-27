import { create } from 'zustand';

export interface AppState {
  note: NoteMeta | undefined;
  setNote: (note: NoteMeta | undefined) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  note: undefined,
  setNote: (note) => set({ note }),
  loading: true,
  setLoading: (state) => set({ loading: state }),
  isSidebarOpen: false,
  setIsSidebarOpen: (state) => set({ isSidebarOpen: state }),
}));
