import React from 'react';
import { create } from 'zustand';

export interface AppState {
  title: string;
  setTitle: (title: string) => void;
  subTitle: React.ReactNode;
  setSubTitle: (subTitle: React.ReactNode) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  title: '',
  setTitle: (title) => set({ title }),
  subTitle: '',
  setSubTitle: (subTitle) => set({ subTitle }),
  loading: true,
  setLoading: (state) => set({ loading: state }),
  isSidebarOpen: false,
  setIsSidebarOpen: (state) => set({ isSidebarOpen: state }),
}));
