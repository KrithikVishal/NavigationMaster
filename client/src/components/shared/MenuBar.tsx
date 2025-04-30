import React from 'react';
import { Link, useLocation } from 'wouter';
import { useThemeStore } from '@/store/themeStore';
import { Button } from '@/components/ui/button';
import DarkModeToggle from './DarkModeToggle';

interface NavItem {
  name: string;
  href: string;
  anchor?: string;
}

const MenuBar: React.FC = () => {
  const [location] = useLocation();
  const { specialty } = useThemeStore();
  
  const navItems: NavItem[] = [
    { name: 'Features', href: '/', anchor: '#features' },
    { name: 'Pricing', href: '/', anchor: '#pricing' },
    { name: 'Themes', href: '/themes' },
    { name: 'Testimonials', href: '/', anchor: '#testimonials' },
    { name: 'FAQ', href: '/', anchor: '#faq' }
  ];
  
  // Handle smooth scrolling for anchor links
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, item: NavItem) => {
    if (item.anchor && location === '/') {
      e.preventDefault();
      const element = document.querySelector(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-bold text-xl dark:text-white">SaaSPlatform</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span
                onClick={(e) => handleClick(e, item)}
                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium cursor-pointer ${
                  location === item.href ? 'text-gray-900 dark:text-white' : ''
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-700 dark:text-gray-300 font-medium cursor-pointer hover:text-primary">
              Log In
            </span>
          </Link>
          <Button size="sm" className="rounded-md">
            Get Started
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
