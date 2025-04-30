import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { ThemeSpecialty } from '@/@types/theme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const ThemeSelector: React.FC = () => {
  const { specialty, setSpecialty } = useThemeStore();

  const handleThemeChange = (theme: ThemeSpecialty) => {
    setSpecialty(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 text-white bg-primary-deep hover:bg-primary hover:text-white border-none">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange('default')}>
          <span className={specialty === 'default' ? 'font-bold' : ''}>Default</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('organ-transplant')}>
          <span className={specialty === 'organ-transplant' ? 'font-bold' : ''}>Organ Transplant</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('cosmetic-surgery')}>
          <span className={specialty === 'cosmetic-surgery' ? 'font-bold' : ''}>Cosmetic Surgery</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
