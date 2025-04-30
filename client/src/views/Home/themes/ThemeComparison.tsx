import React from 'react';
import { themeComparisonData } from '@/configs/theme.config';

const ThemeComparison: React.FC = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6">Theme Features Comparison</h2>
      
      <div className="overflow-x-auto bg-card rounded-lg shadow border border-border">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Feature</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Default</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Organ Transplant</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Cosmetic Surgery</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {themeComparisonData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{row.feature}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{row.default}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{row['organ-transplant']}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{row['cosmetic-surgery']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThemeComparison;
