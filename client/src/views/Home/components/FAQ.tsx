import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useThemeStore } from '@/store/themeStore';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { specialty } = useThemeStore();
  
  const faqItems: FAQItem[] = [
    {
      question: "How does the 14-day free trial work?",
      answer: "You can sign up for our free trial without providing any payment information. You'll get full access to all features of your selected plan for 14 days. If you decide to continue, you can enter your payment details at any time during or after the trial. If you choose not to continue, your account will automatically be downgraded to our limited free plan."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, your new rate will take effect at the next billing cycle. There are no penalties or fees for changing plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and for annual plans, we can also provide invoices for bank transfers. For Enterprise customers, we offer customized billing options to meet your organization's requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security very seriously. We use industry-standard encryption for all data, both in transit and at rest. Our infrastructure is hosted on secure cloud providers with SOC 2 compliance. We conduct regular security audits and penetration testing. For Enterprise customers, we can provide detailed security documentation and support custom security requirements."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for verified nonprofit organizations, educational institutions, and open-source projects. Contact our sales team with verification of your status to learn more about our discount programs."
    },
    {
      question: "How does technical support work?",
      answer: "All plans include access to our help center and community forums. The response time for direct support varies by plan level: Starter (24 hours), Professional (12 hours), and Enterprise (4 hours). Enterprise customers also receive a dedicated account manager and can access phone support during business hours."
    }
  ];

  return (
    <section className="py-20 bg-background dark:bg-gray-950" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border dark:border-gray-800">
                <AccordionTrigger className="text-left font-medium text-lg text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;