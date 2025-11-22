import React from 'react';
import { Link } from 'react-router-dom';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import './Home.css';

/**
 * Home Page
 * Learn: Page components, routing, component composition, section organization
 */
const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to React Learning!</h1>
          <p>
            A comprehensive project showcasing best practices and common patterns
            for beginner to intermediate React developers.
          </p>
          <div className="hero-buttons">
            <Link to="/posts" className="btn btn-primary">
              Explore Posts
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="container">
          <h2>What You'll Learn</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">⚛️</div>
              <h3>React Fundamentals</h3>
              <p>Components, Props, State, and Hooks</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🛣️</div>
              <h3>Routing</h3>
              <p>React Router for client-side navigation</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">📦</div>
              <h3>State Management</h3>
              <p>Zustand for global state management</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🌐</div>
              <h3>API Integration</h3>
              <p>Axios and custom hooks for data fetching</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">✨</div>
              <h3>Custom Hooks</h3>
              <p>Reusable logic with useFetch and useLocalStorage</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🎨</div>
              <h3>Styling</h3>
              <p>CSS modules and responsive design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features Section */}
      <FeaturesSection />

      {/* Quick Start Section */}
      <div className="quick-start">
        <div className="container">
          <h2>Quick Start</h2>
          <div className="quick-start-content">
            <div className="quick-start-item">
              <div className="number">1</div>
              <h4>Explore Posts</h4>
              <p>See how PostCard components work with Zustand state</p>
            </div>
            <div className="quick-start-item">
              <div className="number">2</div>
              <h4>View Users</h4>
              <p>Learn about data fetching with custom hooks</p>
            </div>
            <div className="quick-start-item">
              <div className="number">3</div>
              <h4>Try Counter</h4>
              <p>Simple example of useState in action</p>
            </div>
            <div className="quick-start-item">
              <div className="number">4</div>
              <h4>Read Code</h4>
              <p>All components are well-commented for learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
