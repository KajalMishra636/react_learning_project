import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import './Footer.css';

/**
 * Footer Component
 * Learn: Component composition, icons, links
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          {/* Main Footer Sections */}
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h4>About React Learning</h4>
              <p>
                A comprehensive learning platform for developers transitioning from
                beginner to intermediate React development.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/counter">Counter</a></li>
              </ul>
            </div>

            {/* Learning Resources */}
            <div className="footer-section">
              <h4>Learning Resources</h4>
              <ul className="footer-links">
                <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a></li>
                <li><a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">React Router</a></li>
                <li><a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer">Zustand</a></li>
                <li><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="social-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className="social-link"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:hello@example.com"
                  title="Email"
                  className="social-link"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} React Learning Project. All rights reserved.
            </p>
            <p className="made-with">
              Made with <Heart size={16} className="heart-icon" /> by developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
