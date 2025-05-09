import React from 'react';
import { themeDescriptions, heroContent } from '@/configs/theme.config';
import ThemeCard from './ThemeCard';
import ThemeComparison from './ThemeComparison';
import Footer from '../components/Footer';
import { getHeroIcon } from '@/components/shared/ThemeIcons';

const ThemesPage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Medical Specialty Themes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Customize your GoGetWell.ai experience with specialized themes tailored to different medical practices.
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {themeDescriptions.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
        
        {/* Theme Comparison */}
        <ThemeComparison />
      </div>
      
      {/* Theme Preview: Hero Section */}
      <div className="border-t border-border mt-12 pt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Theme Preview: Hero Section</h2>
          
          {/* Default Theme Hero */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border mb-12">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-primary">Default Theme Hero</h3>
              
              <div className="mt-4 p-6 bg-primary-mild rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{heroContent.default.title}</h2>
                    <p className="text-muted-foreground mb-6">{heroContent.default.description}</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-deep transition">{heroContent.default.primaryButton}</button>
                      <button className="px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-primary-mild transition">{heroContent.default.secondaryButton}</button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg bg-white p-4 shadow-md">
                      <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                        {getHeroIcon('default')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Organ Transplant Theme Hero */}
          <div className="theme-organ-transplant bg-card rounded-lg shadow-lg overflow-hidden border border-border mb-12">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-primary">Organ Transplant Theme Hero</h3>
              
              <div className="mt-4 p-6 bg-primary-mild rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{heroContent['organ-transplant'].title}</h2>
                    <p className="text-muted-foreground mb-6">{heroContent['organ-transplant'].description}</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-deep transition">{heroContent['organ-transplant'].primaryButton}</button>
                      <button className="px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-primary-mild transition">{heroContent['organ-transplant'].secondaryButton}</button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg bg-white p-4 shadow-md">
                      <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                        {getHeroIcon('organ-transplant')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cosmetic Surgery Theme Hero */}
          <div className="theme-cosmetic-surgery bg-card rounded-lg shadow-lg overflow-hidden border border-border">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-primary">Cosmetic Surgery Theme Hero</h3>
              
              <div className="mt-4 p-6 bg-primary-mild rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{heroContent['cosmetic-surgery'].title}</h2>
                    <p className="text-muted-foreground mb-6">{heroContent['cosmetic-surgery'].description}</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-deep transition">{heroContent['cosmetic-surgery'].primaryButton}</button>
                      <button className="px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-primary-mild transition">{heroContent['cosmetic-surgery'].secondaryButton}</button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg bg-white p-4 shadow-md">
                      <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                        {getHeroIcon('cosmetic-surgery')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThemesPage;
