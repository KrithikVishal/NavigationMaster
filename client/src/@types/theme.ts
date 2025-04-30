export type ThemeSpecialty = 'default' | 'organ-transplant' | 'cosmetic-surgery';

export interface Theme {
  mode: 'light' | 'dark';
  specialty: ThemeSpecialty;
}

export interface ThemeDescription {
  id: ThemeSpecialty;
  name: string;
  description: string;
  icon: React.ReactNode;
  tagline: string;
  buttonText: string;
  colorLabel: string;
}
