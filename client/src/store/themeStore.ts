import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme, ThemeSpecialty } from '@/@types/theme';

type ThemeState = Theme & {
  setMode: (mode: Theme['mode']) => void;
  setSpecialty: (specialty: ThemeSpecialty) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      specialty: 'default',
      setMode: (mode) => set(() => ({ mode })),
      setSpecialty: (specialty) => set(() => ({ specialty })),
    }),
    {
      name: 'theme',
    },
  ),
);
