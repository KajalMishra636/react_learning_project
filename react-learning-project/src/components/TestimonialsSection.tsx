import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

/**
 * Testimonials Section Component
 * Learn: Array mapping, card components, rating systems
 */
interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      content:
        'This project helped me understand React hooks and state management. The well-commented code made learning much easier!',
      rating: 5,
      avatar: 'SC',
    },
    {
      name: 'Marcus Johnson',
      role: 'Full Stack Developer',
      content:
        'Great resource for learning modern React patterns. I especially loved the custom hooks examples and TypeScript integration.',
      rating: 5,
      avatar: 'MJ',
    },
    {
      name: 'Emma Williams',
      role: 'Junior Developer',
      content:
        'Perfect for beginners! The step-by-step structure and practical examples helped me transition from vanilla JS to React.',
      rating: 4,
      avatar: 'EW',
    },
    {
      name: 'Alex Rodriguez',
      role: 'React Developer',
      content:
        'Excellent project structure and best practices. I recommend this to everyone learning React.',
      rating: 5,
      avatar: 'AR',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'star-filled' : 'star-empty'}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Developers Say</h2>
          <p>Real feedback from learners who used this project</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>

              <p className="testimonial-content">"{testimonial.content}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
