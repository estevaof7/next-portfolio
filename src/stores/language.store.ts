import { create } from 'zustand';

interface LanguageStore {
  isPt: boolean;
  setLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  isPt: false,
  setLanguage: () => {
    const isPt = navigator.language.toLowerCase().startsWith('pt');
    set({ isPt });
  }
}));
