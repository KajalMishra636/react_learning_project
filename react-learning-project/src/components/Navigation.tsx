import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

/**
 * Navigation Component
 * Learn: React Router links, navigation patterns
 */
const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📚 React Learning
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/advanced" className="nav-link">
              Advanced
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
