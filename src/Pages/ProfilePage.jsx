import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-container">
      {}
      <div className="profile-header-card">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="subtitle">B.Tech AI Student | 4th Semester</p>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">🪙 {user.credits}</span>
              <span className="stat-label">Credits Earned</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">🤖 AI/ML</span>
              <span className="stat-label">Focus Area</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content-layout">
        {}
        <div className="side-column">
          <div className="profile-card">
            <h3>Technical Stack</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Structures</span>
            </div>
          </div>

          <div className="profile-card">
            <h3>Recent Achievements</h3>
            <ul className="achievement-list">
              <li>India AI Impact Buildathon 2026</li>
              <li>25+ Days Gym Consistency</li>
              <li>Based in Sambhal, UP</li>
            </ul>
          </div>
        </div>

        {}
        <div className="main-column">
          <div className="profile-card">
            <h3>Project Showcase</h3>
            
            <div className="project-item">
              <h4>Code Plagiarism Detection System</h4>
              <p>An AI-based system to detect similarities in source code, built for academic integrity.</p>
              <span className="project-tag">Python</span>
              <span className="project-tag">AI Logic</span>
            </div>

            <div className="project-item">
              <h4>CodeBarter (This Project)</h4>
              <p>A skill-swap and debugging network platform for developers to trade help for credits.</p>
              <span className="project-tag">React</span>
              <span className="project-tag">Frontend</span>
            </div>

            <div className="project-item">
              <h4>Fraud Detection AI</h4>
              <p>Developed during the India AI Buildathon to enhance user safety in digital transactions.</p>
              <span className="project-tag">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;