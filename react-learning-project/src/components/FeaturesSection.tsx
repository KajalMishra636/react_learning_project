import React from 'react';
import {
  Code2,
  Zap,
  Package,
  Layers,
  Shield,
  Smartphone,
  GitBranch,
  Cpu,
} from 'lucide-react';
import './FeaturesSection.css';

/**
 * Features Section Component
 * Learn: Grid layouts, icon integration, responsive design
 */
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'React Fundamentals',
      description: 'Master hooks, components, and state management patterns',
    },
    {
      icon: <Zap size={32} />,
      title: 'High Performance',
      description: 'Optimized rendering and efficient state updates',
    },
    {
      icon: <Package size={32} />,
      title: 'Modern Tools',
      description: 'Zustand, React Router, Axios, and TypeScript',
    },
    {
      icon: <Layers size={32} />,
      title: 'Component Architecture',
      description: 'Reusable, composable, and well-organized components',
    },
    {
      icon: <Shield size={32} />,
      title: 'Type Safety',
      description: 'Full TypeScript support for robust development',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Design',
      description: 'Mobile-first approach with great UX on all devices',
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Best Practices',
      description: 'Industry-standard patterns and code organization',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Advanced Hooks',
      description: 'Custom hooks for data fetching and state persistence',
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to become a proficient React developer</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
