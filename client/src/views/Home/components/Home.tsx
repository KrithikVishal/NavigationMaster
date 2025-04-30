import React from 'react';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/store/themeStore';
import { heroContent } from '@/configs/theme.config';
import Footer from './Footer';
import Features from './Features';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import TrustedCompanies from './TrustedCompanies';

const Home: React.FC = () => {
  const { specialty } = useThemeStore();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Simplify Your Workflow with{' '}
                <span className="text-primary">Smart Automation</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                All-in-one platform to streamline your tasks, enhance collaboration, and boost productivity across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Get Started Free →
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-2">Trusted by 10,000+ teams worldwide</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs">👤</div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs">👤</div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs">👤</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-semibold text-foreground">4.9/5</span>
                    <span className="ml-1 text-sm text-muted-foreground">(2,500+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-card dark:bg-gray-800 rounded-lg shadow-xl p-6 relative z-10 border border-gray-100 dark:border-gray-700">
                <div className="h-64 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-primary text-white rounded-t-lg p-2 flex items-center justify-between">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-16 h-4 bg-white/20 rounded"></div>
                        <div className="w-4 h-4 bg-white/20 rounded"></div>
                        <div className="w-4 h-4 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-b-lg p-4">
                      <div className="flex">
                        <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 pr-3">
                          <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="w-2/3 pl-3">
                          <div className="w-1/2 h-5 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                          <div className="flex mb-2">
                            <div className="w-3/4 h-8 bg-primary/20 dark:bg-primary/10 rounded mr-2"></div>
                            <div className="w-1/4 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                          <div className="flex mb-2">
                            <div className="w-2/3 h-8 bg-gray-200 dark:bg-gray-700 rounded mr-2"></div>
                            <div className="w-1/3 h-8 bg-primary/10 rounded"></div>
                          </div>
                          <div className="w-full h-24 bg-gray-100 dark:bg-gray-900 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 -right-4 bg-card dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-foreground">Tasks</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                  <div className="font-medium text-foreground">24/30</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-foreground">Analytics</span>
                  </div>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Productivity up 32%</div>
                </div>
              </div>
              <div className="absolute top-8 -left-8 w-20 h-20 bg-blue-200 dark:bg-blue-900/40 rounded-full opacity-50"></div>
              <div className="absolute bottom-12 -right-12 w-32 h-32 bg-blue-200 dark:bg-blue-900/40 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted Companies */}
      <TrustedCompanies />
      
      {/* Features Section */}
      <Features />
      
      {/* Medical Specialty Features */}
      <section className="py-20 bg-muted/30 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why choose {heroContent[specialty].title}?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {heroContent[specialty].description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Intelligent Solutions</h3>
              <p className="text-muted-foreground">
                Our AI models analyze data to provide accurate recommendations and reduce error rates significantly.
              </p>
            </div>
            
            <div className="bg-card dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                Forecast outcomes and identify potential issues before they occur, enabling proactive planning.
              </p>
            </div>
            
            <div className="bg-card dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Efficient Workflows</h3>
              <p className="text-muted-foreground">
                Streamline tasks and optimize workflows with our intuitive assistant, saving hours of work every week.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10 dark:bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to transform your workflow?</h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of teams that are already experiencing increased productivity and streamlined operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
