import React from 'react';
import Hero from './Hero';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our AI-Powered Healthcare Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming patient care with advanced machine learning models tailored to your medical specialty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Diagnostics</h3>
              <p className="text-muted-foreground">
                Our AI models analyze patient data to provide accurate diagnostic recommendations and reduce misdiagnosis rates.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                Forecast patient outcomes and identify potential complications before they occur, enabling proactive care.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficient Workflows</h3>
              <p className="text-muted-foreground">
                Streamline administrative tasks and optimize clinical workflows with our intuitive AI assistant.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
