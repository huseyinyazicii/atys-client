import { create } from 'zustand';
import LocalStorageKeys from '../constants/localStorageKeys';

export const Theme = {
    DIM: 'dim',
    LIGHT: 'light',
} as const;

export type ETheme = typeof Theme[keyof typeof Theme];

interface SystemState {
    theme: ETheme;
    setTheme: (theme: ETheme) => void;
    toggleTheme: () => void;
}

const useSystemStore = create<SystemState>()((set, get) => ({
    theme: Theme.LIGHT,
    setTheme: (theme: ETheme) => set({ theme }),
    toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === Theme.DIM ? Theme.LIGHT : Theme.DIM;
        document.documentElement.setAttribute('data-theme', newTheme);
        set({ theme: newTheme });
        localStorage.setItem(LocalStorageKeys.THEME, newTheme);
    },
}));

export default useSystemStore;