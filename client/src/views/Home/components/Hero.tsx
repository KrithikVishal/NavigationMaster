import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { heroContent } from '@/configs/theme.config';
import { Button } from '@/components/ui/button';
import { getHeroIcon } from '@/components/shared/ThemeIcons';

const Hero: React.FC = () => {
  const { specialty } = useThemeStore();
  const content = heroContent[specialty];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="p-6 bg-primary-mild dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">{content.title}</h1>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">{content.description}</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button variant="default" size="lg" className="bg-primary text-white font-medium rounded-md hover:bg-primary-deep transition">
                  {content.primaryButton}
                </Button>
                <Button variant="outline" size="lg" className="bg-white text-primary font-medium rounded-md border border-primary hover:bg-primary-mild transition">
                  {content.secondaryButton}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg bg-white dark:bg-gray-700 p-4 shadow-md">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                  {getHeroIcon(specialty)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
