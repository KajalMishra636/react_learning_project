import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Counter from './pages/Counter';
import Advanced from './pages/Advanced';
import About from './pages/About';
import './styles/globals.css';

/**
 * Main App Component
 * Learn: React Router setup, component composition, app structure
 */
function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
