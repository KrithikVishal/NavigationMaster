import React from 'react';
import { Link, useLocation } from 'wouter';
import { useThemeStore } from '@/store/themeStore';
import { Button } from '@/components/ui/button';

const MenuBar: React.FC = () => {
  const [location] = useLocation();
  const { specialty } = useThemeStore();
  
  return (
    <nav className="bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-bold text-xl">SaaSPlatform</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <span className={`text-gray-600 hover:text-gray-900 font-medium cursor-pointer ${location === '/' ? 'text-gray-900' : ''}`}>
              Features
            </span>
          </Link>
          <Link href="/">
            <span className={`text-gray-600 hover:text-gray-900 font-medium cursor-pointer ${location === '/pricing' ? 'text-gray-900' : ''}`}>
              Pricing
            </span>
          </Link>
          <Link href="/themes">
            <span className={`text-gray-600 hover:text-gray-900 font-medium cursor-pointer ${location === '/themes' ? 'text-gray-900' : ''}`}>
              Themes
            </span>
          </Link>
          <Link href="/">
            <span className={`text-gray-600 hover:text-gray-900 font-medium cursor-pointer ${location === '/testimonials' ? 'text-gray-900' : ''}`}>
              Testimonials
            </span>
          </Link>
          <Link href="/">
            <span className={`text-gray-600 hover:text-gray-900 font-medium cursor-pointer ${location === '/faq' ? 'text-gray-900' : ''}`}>
              FAQ
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-700 font-medium cursor-pointer hover:text-primary">
              Log In
            </span>
          </Link>
          <Button size="sm" className="rounded-md">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
