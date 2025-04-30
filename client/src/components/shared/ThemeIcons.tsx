import React from 'react';
import { themeDescriptions, heroContent } from '@/configs/theme.config';
import { 
  GeneralPracticeSvg, 
  OrganTransplantSvg, 
  CosmeticSurgerySvg,
  DocumentSvg,
  HeartSvg,
  ScissorsSvg
} from '@/assets/svgs';
import { ThemeSpecialty } from '@/@types/theme';

// This component assigns the correct SVG icons to each theme description
export function getThemeIcon(themeId: ThemeSpecialty): React.ReactNode {
  switch (themeId) {
    case 'default':
      return <GeneralPracticeSvg />;
    case 'organ-transplant':
      return <OrganTransplantSvg />;
    case 'cosmetic-surgery':
      return <CosmeticSurgerySvg />;
    default:
      return <GeneralPracticeSvg />;
  }
}

// This component assigns the correct hero icon to each theme
export function getHeroIcon(themeId: ThemeSpecialty): React.ReactNode {
  switch (themeId) {
    case 'default':
      return <DocumentSvg />;
    case 'organ-transplant':
      return <HeartSvg />;
    case 'cosmetic-surgery':
      return <ScissorsSvg />;
    default:
      return <DocumentSvg />;
  }
}