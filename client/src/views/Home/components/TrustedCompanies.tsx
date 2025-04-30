import React from 'react';

const TrustedCompanies: React.FC = () => {
  const companies = [
    { 
      name: 'Google',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#4285F4] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path className="group-hover:fill-[#EA4335] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path className="group-hover:fill-[#FBBC05] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
          <path className="group-hover:fill-[#4285F4] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M225 3v65h-9.5V3h9.5z"/>
          <path className="group-hover:fill-[#34A853] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
          <path className="group-hover:fill-[#EA4335] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
        </svg>
      )
    },
    { 
      name: 'Microsoft',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#f25022] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M0 0h11v11H0z"/>
          <path className="group-hover:fill-[#7fba00] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M12 0h11v11H12z"/>
          <path className="group-hover:fill-[#00a4ef] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M0 12h11v11H0z"/>
          <path className="group-hover:fill-[#ffb900] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M12 12h11v11H12z"/>
        </svg>
      )
    },
    { 
      name: 'Amazon',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 126.57 38.4" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#FF9900] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M81.32,22.37a32.32,32.32,0,0,1-12,4.22,33.28,33.28,0,0,1-12.42-.34,24.71,24.71,0,0,1-9.85-4.79A21,21,0,0,1,41,11.64a20.48,20.48,0,0,1,.92-11.31H42a1.82,1.82,0,0,1,1.72,1.47,5.2,5.2,0,0,1-.2,2.63,13.16,13.16,0,0,0-.29,1.44,24.16,24.16,0,0,0,3.09,11.57,23.1,23.1,0,0,0,8.4,8.65,28.31,28.31,0,0,0,12.77,3.51,32.4,32.4,0,0,0,13.08-1.78c.44-.14.87-.31,1.31-.47Z"/>
          <path className="group-hover:fill-[#FF9900] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M78.51,28.24a36.42,36.42,0,0,1-12,2.64A32.5,32.5,0,0,1,54,28.09a27.21,27.21,0,0,1-11.83-7.94A26.86,26.86,0,0,1,36.52,6.87,22.87,22.87,0,0,1,42.27.36h.06a.87.87,0,0,1,.83.76,2.73,2.73,0,0,1-.2,1.62c-.34,1-.7,1.91-1,2.88a22.58,22.58,0,0,0,.11,11.16,27.12,27.12,0,0,0,6.13,11.33,27.41,27.41,0,0,0,10.7,7,27.11,27.11,0,0,0,12.33,1.25c2.61-.26,5.18-.86,7.85-1.19Z"/>
          <path className="group-hover:fill-[#146EB4] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M121.2,29.41a5.93,5.93,0,0,1-5.73,4.35,3.44,3.44,0,0,1-2.49-1.39,1.47,1.47,0,0,1-.12-.61,1.3,1.3,0,0,1,.1-.62c.39-1,1-1.78,1.39-2.71a2.38,2.38,0,0,0,.17-1.06c0-.24-.26-.49-.43-.64a1.81,1.81,0,0,0-1.17-.29.58.58,0,0,0-.47.35c-.23.54-.42,1.11-.64,1.66l-1.52,3.82c-.11.26-.2.53-.32.79a3.87,3.87,0,0,1-3.48,2.28,3.62,3.62,0,0,1-2.73-1.71,1.49,1.49,0,0,1-.25-.94,1.36,1.36,0,0,1,.47-.94c.47-.39.27-.86.23-1.34,0-.26-.31-.59-.56-.7a1.75,1.75,0,0,0-1.13-.08.67.67,0,0,0-.31.5c0,.09,0,.18,0,.27A11.51,11.51,0,0,1,99,32.48c-.55,0-1.48.71-1.86-.11a3.81,3.81,0,0,1-.4-1.42A2.76,2.76,0,0,1,98,28.52a8.43,8.43,0,0,1,2.81-1.09c.63-.17,1.15-.62,1.81-.78s1.69.39,1.87.05c.28-.52-.2-1.11-.42-1.61A6.8,6.8,0,0,0,99.21,22,8.88,8.88,0,0,0,92,23.14a7,7,0,0,0-3.59,4.83,5.51,5.51,0,0,0,.19,2.8,3.59,3.59,0,0,0,3.22,3,4.06,4.06,0,0,0,2.26,0,6.36,6.36,0,0,0,1.86-1.48,4.93,4.93,0,0,0,3.08,1.52,4.15,4.15,0,0,0,1.93-.28,4.92,4.92,0,0,0,.89-.61,5,5,0,0,0,4,1.1,4.79,4.79,0,0,0,1.82-.85,3.41,3.41,0,0,0,3.27,1.56,1.8,1.8,0,0,0,1.87-.75c-1.94-1.65-1.55-3.92-1.08-6.13.13-.59.42-1.14.55-1.74.09-.44,0-.92,0-1.38,0-1.46.35-1.82,1.8-1.95a7.81,7.81,0,0,1,3,.37,6.59,6.59,0,0,1,3.38,2.44,4,4,0,0,1,.83,2.75,3.86,3.86,0,0,1-1.1,2.41Z"/>
          <path className="group-hover:fill-[#FF9900] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M108.6,16.31c-3.91-.3-7-1.9-9.63-4.51a10.82,10.82,0,0,1-2.62-4.88,14.14,14.14,0,0,1,.17-5.67c.12-.78.4-1.54.61-2.31a1,1,0,0,1,.78-.84,1.16,1.16,0,0,1,1.19.59,4.3,4.3,0,0,1,.23,2c-.11,1.77-.26,3.53-.43,5.29a2.57,2.57,0,0,0,0,.89A8.46,8.46,0,0,0,106.71,15a1,1,0,0,1,.51.89Z"/>
        </svg>
      )
    },
    { 
      name: 'IBM',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#1F70C1] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M0,0 h100 v8 h-100 z M40,12 h20 v4 h-20 z M40,28 h20 v4 h-20 z M0,16 h100 v8 h-100 z M0,32 h100 v8 h-100 z"/>
        </svg>
      )
    },
    { 
      name: 'Salesforce',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 40 28" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#00A1E0] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M13.4,8.1c1-1.2,2.4-1.9,4-1.9c1.8,0,3.5,0.9,4.4,2.3c0.9-0.4,1.9-0.7,3-0.7c3.8,0,6.8,3.1,6.8,6.8c0,3.8-3.1,6.8-6.8,6.8 c-0.5,0-1.1-0.1-1.5-0.2c-0.9,1.7-2.8,2.9-4.9,2.9c-1,0-1.9-0.2-2.7-0.7c-0.9,1.7-2.8,2.8-4.9,2.8c-2.7,0-5-1.9-5.5-4.4 c-2.7-0.5-4.8-2.8-4.8-5.7c0-2.4,1.5-4.4,3.5-5.3c0-0.2,0-0.4,0-0.6c0-3.2,2.6-5.8,5.8-5.8C11.2,4.4,12.6,6,13.4,8.1z"/>
        </svg>
      )
    },
    { 
      name: 'Adobe',
      logo: (
        <svg className="w-full h-full" viewBox="0 0 37 33" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-[#FA0F00] fill-gray-500 dark:fill-gray-400 transition-colors duration-200" d="M23.5,0.5 L36.5,0.5 L36.5,32.5 L23.5,0.5 Z M14,0.5 L0.5,0.5 L0.5,32.5 L14,0.5 Z M18.5,12.5 L26.5,32.5 L20,32.5 L17.5,26 L11,26 L18.5,12.5 Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 bg-muted/20 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-lg font-medium text-muted-foreground dark:text-gray-300">
            Trusted by leading companies worldwide
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="group w-24 h-16 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
              aria-label={company.name}
              title={company.name}
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;