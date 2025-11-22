import React, { useState } from 'react';
import { ChevronDown, Code, Database, Globe, Zap } from 'lucide-react';
import './Advanced.css';

/**
 * Advanced Features Page
 * Learn: Accordion patterns, state management for UI, conditional rendering
 */
interface AccordionItem {
  title: string;
  icon: React.ReactNode;
  content: string;
  details: string[];
}

const Advanced: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems: AccordionItem[] = [
    {
      title: 'Advanced State Management',
      icon: <Database size={24} />,
      content: 'Master Zustand for efficient global state management',
      details: [
        'Create scalable stores with Zustand',
        'Implement complex state logic',
        'Persist state to localStorage',
        'Handle async state updates',
        'Debug state changes with DevTools',
      ],
    },
    {
      title: 'Custom Hooks Patterns',
      icon: <Zap size={24} />,
      content: 'Extract reusable logic with custom hooks',
      details: [
        'Create useFetch for data fetching',
        'Build useLocalStorage for persistence',
        'Implement useDebounce for performance',
        'Create useForm for form handling',
        'Compose hooks for complex scenarios',
      ],
    },
    {
      title: 'API Integration',
      icon: <Globe size={24} />,
      content: 'Handle API requests and error handling elegantly',
      details: [
        'Configure Axios interceptors',
        'Handle loading and error states',
        'Implement retry logic',
        'Handle pagination and filtering',
        'Work with GraphQL APIs',
      ],
    },
    {
      title: 'Performance Optimization',
      icon: <Code size={24} />,
      content: 'Optimize React applications for production',
      details: [
        'Implement React.memo for components',
        'Use useMemo for expensive computations',
        'Optimize re-renders with useCallback',
        'Code splitting and lazy loading',
        'Monitor performance with React DevTools',
      ],
    },
  ];

  return (
    <div className="advanced-page">
      <div className="container">
        <div className="page-header">
          <h1>Advanced Topics</h1>
          <p>Master advanced React patterns and techniques</p>
        </div>

        {/* Accordion Section */}
        <div className="accordion-section">
          <h2>Deep Dive Topics</h2>
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-button ${
                    openIndex === index ? 'active' : ''
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="accordion-title">
                    <span className="accordion-icon">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`chevron ${openIndex === index ? 'rotate' : ''}`}
                  />
                </button>

                {openIndex === index && (
                  <div className="accordion-content">
                    <p className="accordion-description">{item.content}</p>
                    <ul className="accordion-details">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>
                          <span className="checkmark">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="best-practices-section">
          <h2>Best Practices</h2>
          <div className="practices-grid">
            <div className="practice-card card">
              <h3>Component Design</h3>
              <ul>
                <li>Keep components small and focused</li>
                <li>Use composition over inheritance</li>
                <li>Implement proper prop validation</li>
                <li>Create reusable component libraries</li>
              </ul>
            </div>

            <div className="practice-card card">
              <h3>State Management</h3>
              <ul>
                <li>Lift state up when necessary</li>
                <li>Use context for theme/auth</li>
                <li>Implement proper state structure</li>
                <li>Avoid prop drilling with composition</li>
              </ul>
            </div>

            <div className="practice-card card">
              <h3>Performance</h3>
              <ul>
                <li>Minimize unnecessary re-renders</li>
                <li>Use lazy loading for routes</li>
                <li>Implement code splitting</li>
                <li>Monitor bundle size</li>
              </ul>
            </div>

            <div className="practice-card card">
              <h3>Testing</h3>
              <ul>
                <li>Write unit tests for components</li>
                <li>Test user interactions</li>
                <li>Mock API responses</li>
                <li>Achieve good coverage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Patterns Section */}
        <div className="patterns-section">
          <h2>Common Patterns</h2>
          <div className="patterns-grid">
            <div className="pattern-item">
              <h4>Render Props</h4>
              <p>Share code between components using render functions</p>
            </div>
            <div className="pattern-item">
              <h4>Higher Order Components</h4>
              <p>Enhance components with additional functionality</p>
            </div>
            <div className="pattern-item">
              <h4>Compound Components</h4>
              <p>Create flexible component hierarchies</p>
            </div>
            <div className="pattern-item">
              <h4>Context API</h4>
              <p>Share state without prop drilling</p>
            </div>
            <div className="pattern-item">
              <h4>Custom Hooks</h4>
              <p>Extract and reuse component logic</p>
            </div>
            <div className="pattern-item">
              <h4>Error Boundaries</h4>
              <p>Handle errors gracefully in React</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="resources-section">
          <h2>Advanced Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h4>📚 React Docs</h4>
              <p>Official React documentation with examples</p>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit →
              </a>
            </div>
            <div className="resource-card">
              <h4>🎓 Advanced Patterns</h4>
              <p>Learn advanced patterns and techniques</p>
              <a
                href="https://react-patterns.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore →
              </a>
            </div>
            <div className="resource-card">
              <h4>⚡ Performance Tips</h4>
              <p>Optimize React applications effectively</p>
              <a
                href="https://react.dev/learn/render-and-commit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn →
              </a>
            </div>
            <div className="resource-card">
              <h4>🔬 Testing Guide</h4>
              <p>Master React component testing</p>
              <a
                href="https://testing-library.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
