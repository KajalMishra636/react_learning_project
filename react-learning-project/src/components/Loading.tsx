import React from 'react';
import './Loading.css';

/**
 * Loading Component
 * Learn: Reusable components, CSS animations
 */
const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
