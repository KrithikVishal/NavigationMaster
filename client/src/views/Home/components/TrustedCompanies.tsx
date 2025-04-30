import React from 'react';

const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'Google', logo: '🟦', color: 'bg-blue-100' },
    { name: 'Microsoft', logo: '🟩', color: 'bg-green-100' },
    { name: 'Amazon', logo: '🟧', color: 'bg-orange-100' },
    { name: 'IBM', logo: '🟦', color: 'bg-blue-200' },
    { name: 'Salesforce', logo: '🟪', color: 'bg-purple-100' },
    { name: 'Adobe', logo: '🟥', color: 'bg-red-100' },
  ];

  return (
    <section className="py-10 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-lg font-medium text-muted-foreground">
            Trusted by leading companies worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-10 h-10 rounded-md ${company.color} flex items-center justify-center text-xl mr-2`}>
                {company.logo}
              </div>
              <span className="font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;