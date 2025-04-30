import React from 'react';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/store/themeStore';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const { specialty } = useThemeStore();
  
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$19',
      description: 'Perfect for individuals and small teams getting started.',
      features: [
        'Up to 3 team members',
        '5 projects',
        'Basic analytics',
        'Task management',
        '24-hour support response time',
        'Community access'
      ],
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$49',
      description: 'For growing teams that need more power and flexibility.',
      features: [
        'Up to 10 team members',
        'Unlimited projects',
        'Advanced analytics',
        'Workflow automation',
        '12-hour support response time',
        'Team collaboration tools',
        'Custom integrations',
        'Priority support'
      ],
      ctaText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'Custom solutions for large organizations with complex needs.',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Premium analytics',
        'Advanced security',
        '4-hour support response time',
        'Dedicated account manager',
        'Custom training',
        'API access',
        'SLA agreement'
      ],
      ctaText: 'Contact Sales'
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-background rounded-lg p-8 border ${tier.popular 
                ? 'border-primary shadow-lg relative' 
                : 'border-border shadow-sm'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm px-4 py-1 rounded-full font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">
                {tier.description}
              </p>
              <div className="mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center mb-3">
                    <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className="w-full"
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;