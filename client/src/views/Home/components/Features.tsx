import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { 
  BarChart4, 
  Clock, 
  Zap, 
  Shield, 
  Users, 
  Link2
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const { specialty } = useThemeStore();
  
  const features: Feature[] = [
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with comprehensive data visualization and customizable reporting tools.",
      icon: <BarChart4 size={40} className="text-primary" />
    },
    {
      title: "Automated Workflows",
      description: "Save time with intelligent automation that streamlines repetitive tasks and processes.",
      icon: <Clock size={40} className="text-primary" />
    },
    {
      title: "Seamless Integrations",
      description: "Connect with over 100+ popular tools and services through our extensive API ecosystem.",
      icon: <Link2 size={40} className="text-primary" />
    },
    {
      title: "Team Collaboration",
      description: "Foster teamwork with real-time communication, shared workspaces, and collaborative editing.",
      icon: <Users size={40} className="text-primary" />
    },
    {
      title: "Enterprise Security",
      description: "Protect your data with advanced encryption, role-based access controls, and compliance features.",
      icon: <Shield size={40} className="text-primary" />
    },
    {
      title: "Lightning Performance",
      description: "Experience incredible speed and reliability with our optimized cloud infrastructure.",
      icon: <Zap size={40} className="text-primary" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Discover all the ways our platform can help transform your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/5 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;