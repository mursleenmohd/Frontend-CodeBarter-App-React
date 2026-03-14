import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email); 
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Join CodeBarter'}</h2>
          <p>{isLogin ? 'Login to continue debugging' : 'Create an account to start bartering'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required className="auth-input" />
          )}
          <input 
            type="email" 
            placeholder="College Email (e.g. @niet.co.in)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="auth-input" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="auth-input" 
          />
          
          <button type="submit" className="auth-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;