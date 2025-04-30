import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { ThemeDescription } from '@/@types/theme';
import { getThemeIcon } from '@/components/shared/ThemeIcons';

interface ThemeCardProps {
  theme: ThemeDescription;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const { specialty, setSpecialty } = useThemeStore();
  const isActive = specialty === theme.id;
  
  const handleSelectTheme = () => {
    setSpecialty(theme.id);
  };
  
  return (
    <div 
      className={`theme-preview bg-card rounded-lg shadow-lg overflow-hidden border border-border ${theme.id !== 'default' ? `theme-${theme.id}` : ''}`}
      onClick={handleSelectTheme}
    >
      <div className="h-36 bg-primary flex items-center justify-center">
        <div className="text-white text-center">
          <div className="flex justify-center">
            {getThemeIcon(theme.id)}
          </div>
          <span className="font-medium mt-2 block">{theme.tagline}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{theme.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{theme.description}</p>
        
        {/* Theme Sample Elements */}
        <div className="space-y-3 mb-4">
          <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-deep transition">Primary Button</button>
          <div className="flex space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">A</div>
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white">B</div>
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white">C</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">{theme.colorLabel}</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-mild text-primary-deep">
            {isActive ? 'Active' : 'Select'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
