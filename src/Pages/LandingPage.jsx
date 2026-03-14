import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnterApp }) => {
  return (
    <div className="landing-container">
      {}
      <div className="glow-circle gc1"></div>
      <div className="glow-circle gc2"></div>

      <nav className="landing-nav">
        <div className="logo-container">
          {}
          {}
          {}
          <div className="logo-placeholder">CB</div> 
          <span className="logo-text">CodeBarter</span>
        </div>
        <div className="nav-links">
          <button className="glass-btn" onClick={onEnterApp}>Enter Dashboard</button>
        </div>
      </nav>

      <main className="hero-section">
        {}
        <div className="badge-new">NEW: AI Buildathon Support Added 🤖</div>
        
        <h1 className="hero-title">
          Code. <span className="gradient-text">Barter.</span> Debug.
        </h1>
        <p className="hero-subtitle">
          The ultimate skill-swap network for developers. Solve bugs, earn credits, 
          and build your reputation in the AI & Dev community.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={onEnterApp}>
            Join the Network — Free
          </button>
          <button className="secondary-btn" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>
            How it Works ↓
          </button>
        </div>
      </main>

      <section className="how-it-works">
        <h2 className="section-title">How It Works?</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-num">01</div>
            <h3>Post a Bug</h3>
            <p>Describe your issue and offer credits to get expert help instantly.</p>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <h3>Trade Help</h3>
            <p>Debug issues posted by others and earn credits for your expertise.</p>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <h3>Level Up</h3>
            <p>Build your professional AI profile and connect with the best minds.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© 2026 CodeBarter by Mursleen | B.Tech AI Student</p>
      </footer>
    </div>
  );
};

export default LandingPage;