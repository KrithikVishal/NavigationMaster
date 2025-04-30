import { ThemeDescription } from '@/@types/theme';

export const themeDescriptions: ThemeDescription[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Our standard theme optimized for general medical practices and healthcare services.',
    icon: null, // We'll assign this in the ThemeIcons.tsx component
    tagline: 'General Practice',
    buttonText: 'Get Started',
    colorLabel: 'Default theme',
  },
  {
    id: 'organ-transplant',
    name: 'Organ Transplant',
    description: 'Specialized for transplant centers and organ donation services with soothing colors.',
    icon: null, // We'll assign this in the ThemeIcons.tsx component
    tagline: 'Organ Transplant',
    buttonText: 'Schedule Demo',
    colorLabel: 'Green-based',
  },
  {
    id: 'cosmetic-surgery',
    name: 'Cosmetic Surgery',
    description: 'Elegant design for cosmetic and plastic surgery practices with a premium feel.',
    icon: null, // We'll assign this in the ThemeIcons.tsx component
    tagline: 'Cosmetic Surgery',
    buttonText: 'Free Consultation',
    colorLabel: 'Purple-based',
  },
];

export const heroContent = {
  default: {
    title: 'Transforming Healthcare Through AI',
    description: 'Leverage cutting-edge AI to streamline patient care, improve diagnoses, and enhance treatment outcomes across all medical disciplines.',
    primaryButton: 'Get Started',
    secondaryButton: 'Learn More',
    icon: null, // We'll assign this in the component
  },
  'organ-transplant': {
    title: 'Revolutionizing Organ Transplantation',
    description: 'Our AI-powered platform helps match donors and recipients more effectively, track organ viability, and improve post-transplant care coordination.',
    primaryButton: 'Schedule Demo',
    secondaryButton: 'Donor Resources',
    icon: null, // We'll assign this in the component
  },
  'cosmetic-surgery': {
    title: 'Elevate Your Aesthetic Practice',
    description: 'Transform patient consultations with AI-powered visualization tools, procedure planning, and personalized aftercare recommendations.',
    primaryButton: 'Free Consultation',
    secondaryButton: 'View Gallery',
    icon: null, // We'll assign this in the component
  },
};

export const themeComparisonData = [
  {
    feature: 'Color Scheme',
    default: 'Blue-based',
    'organ-transplant': 'Green-based',
    'cosmetic-surgery': 'Purple-based',
  },
  {
    feature: 'Typography',
    default: 'Standard medical',
    'organ-transplant': 'Clean, accessible',
    'cosmetic-surgery': 'Elegant, premium',
  },
  {
    feature: 'UI Components',
    default: 'Standard',
    'organ-transplant': 'Rounded, gentle',
    'cosmetic-surgery': 'Sharp, luxurious',
  },
  {
    feature: 'Content Focus',
    default: 'General healthcare',
    'organ-transplant': 'Organ donation & transplantation',
    'cosmetic-surgery': 'Aesthetic procedures',
  },
];
