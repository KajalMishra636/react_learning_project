import React from 'react';
import './About.css';

/**
 * About Page
 * Learn: Static content pages, semantic HTML
 */
const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About This Project</h1>
          <p>A comprehensive learning resource for React developers</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Purpose</h2>
            <p>
              This React Learning Project is designed to help developers transition
              from beginner to intermediate level by providing real-world examples
              and best practices. It showcases modern React patterns and tools used
              in production applications.
            </p>
          </section>

          <section className="about-section">
            <h2>Tech Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h4>⚛️ React 18</h4>
                <p>Latest React with hooks and concurrent features</p>
              </div>
              <div className="tech-item">
                <h4>📘 TypeScript</h4>
                <p>Type-safe development for better code quality</p>
              </div>
              <div className="tech-item">
                <h4>🛣️ React Router</h4>
                <p>Client-side routing for SPAs</p>
              </div>
              <div className="tech-item">
                <h4>📦 Zustand</h4>
                <p>Lightweight state management library</p>
              </div>
              <div className="tech-item">
                <h4>🌐 Axios</h4>
                <p>Promise-based HTTP client for APIs</p>
              </div>
              <div className="tech-item">
                <h4>🎨 CSS Modules</h4>
                <p>Scoped styling and responsive design</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Key Concepts Covered</h2>
            <ul className="concepts-list">
              <li>Functional components and hooks</li>
              <li>Component composition and reusability</li>
              <li>State management with Zustand</li>
              <li>Custom hooks for logic abstraction</li>
              <li>API integration and data fetching</li>
              <li>Client-side routing with React Router</li>
              <li>TypeScript for type safety</li>
              <li>CSS best practices and responsive design</li>
              <li>Error handling and loading states</li>
              <li>localStorage for persistent state</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Project Structure</h2>
            <pre><code>{`src/
├── components/        # Reusable React components
├── pages/            # Page components for routes
├── store/            # Zustand stores for state
├── services/         # API and external services
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── utils/            # Helper functions
└── styles/           # Global styles`}</code></pre>
          </section>

          <section className="about-section">
            <h2>Learning Path</h2>
            <ol className="learning-path">
              <li>
                <strong>Start with Home Page</strong> - Get an overview of the
                project and its features
              </li>
              <li>
                <strong>Explore Counter Page</strong> - Learn about useState and
                custom hooks
              </li>
              <li>
                <strong>View Users Page</strong> - Understand data fetching with
                custom hooks
              </li>
              <li>
                <strong>Browse Posts Page</strong> - See state management in
                action with Zustand
              </li>
              <li>
                <strong>Read the Code</strong> - All files are well-commented with
                learning objectives
              </li>
            </ol>
          </section>

          <section className="about-section">
            <h2>Best Practices</h2>
            <div className="practices">
              <div className="practice">
                <h4>✅ Type Safety</h4>
                <p>TypeScript ensures safer code with compile-time checking</p>
              </div>
              <div className="practice">
                <h4>✅ Component Isolation</h4>
                <p>Components are independent and reusable</p>
              </div>
              <div className="practice">
                <h4>✅ Separation of Concerns</h4>
                <p>Business logic, UI, and styling are separated</p>
              </div>
              <div className="practice">
                <h4>✅ DRY Principle</h4>
                <p>Avoid repetition with custom hooks and utility functions</p>
              </div>
              <div className="practice">
                <h4>✅ Error Handling</h4>
                <p>Proper error states and user feedback</p>
              </div>
              <div className="practice">
                <h4>✅ Accessibility</h4>
                <p>Semantic HTML and ARIA attributes for inclusive design</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Next Steps</h2>
            <p>
              After exploring this project, consider learning:
            </p>
            <ul className="next-steps">
              <li>Advanced state management patterns</li>
              <li>Testing with Jest and React Testing Library</li>
              <li>Performance optimization techniques</li>
              <li>Server-side rendering and Next.js</li>
              <li>GraphQL for advanced API queries</li>
              <li>Deployment and CI/CD pipelines</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
