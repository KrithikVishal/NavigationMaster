import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { specialty } = useThemeStore();
  
  useEffect(() => {
    // Apply CSS class based on selected theme
    document.documentElement.className = specialty === 'default' 
      ? '' 
      : `theme-${specialty}`;
  }, [specialty]);
  
  return <>{children}</>;
};

export default ThemeProvider;
