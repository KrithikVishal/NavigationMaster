import React from 'react';
import { useThemeStore } from '@/store/themeStore';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  initials: string;
}

const Testimonials: React.FC = () => {
  const { specialty } = useThemeStore();
  
  const testimonials: Testimonial[] = [
    {
      quote: "This platform has transformed how our team works. We've seen a 40% increase in productivity since implementing it across our organization.",
      author: "John Smith",
      position: "CTO",
      company: "TechCorp",
      initials: "JS"
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We can make data-driven decisions faster and with more confidence.",
      author: "Sarah Johnson",
      position: "Product Manager",
      company: "InnovateCo",
      initials: "SJ"
    },
    {
      quote: "Customer support is exceptional. They helped us customize the platform to fit our unique workflow needs perfectly.",
      author: "Robert Wilson",
      position: "COO",
      company: "GrowthStartup",
      initials: "RW"
    },
    {
      quote: "The automation features have saved our team countless hours on repetitive tasks. We're now able to focus on strategic initiatives instead.",
      author: "Melissa Chen",
      position: "Operations Director",
      company: "GlobalSystems",
      initials: "MC"
    },
    {
      quote: "Integration with our existing tools was seamless. The platform connects everything we use daily into one unified workflow.",
      author: "David Park",
      position: "IT Director",
      company: "EnterpriseNow",
      initials: "DP"
    },
    {
      quote: "Security features give us peace of mind when handling sensitive data. Compliance has never been easier to maintain.",
      author: "Jennifer Adams",
      position: "Security Officer",
      company: "SecureFinance",
      initials: "JA"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by thousands of organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what our customers have to say about our platform and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 mr-3 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;