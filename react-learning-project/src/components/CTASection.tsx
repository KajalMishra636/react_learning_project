import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

/**
 * Call-to-Action Section Component
 * Learn: Component composition, conditional rendering, responsive design
 */
const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Master React?</h2>
        <p>Start learning with our comprehensive project and real-world examples.</p>

        <div className="cta-buttons">
          <Link to="/posts" className="cta-btn primary">
            Explore Now
            <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="cta-btn secondary">
            Learn More
          </Link>
        </div>

        <div className="cta-stats">
          <div className="stat">
            <div className="stat-number">5+</div>
            <div className="stat-label">Learning Pages</div>
          </div>
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Components</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
