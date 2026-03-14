import { useState, useEffect } from 'react'
import './App.css'
import RequestCard from './Components/RequestCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './Pages/LandingPage'; 
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';
import AuthPage from './Pages/AuthPage';
import Editor from '@monaco-editor/react';

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-header"><div className="skeleton-title"></div><div className="skeleton-tag"></div></div>
    <div className="skeleton-line"></div>
    <div className="skeleton-line short"></div>
    <div className="skeleton-footer"><div className="skeleton-user"></div><div className="skeleton-btn"></div></div>
  </div>
);

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'; 
  });
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedTag, setSelectedTag] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); 
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const categories = ['All', 'React', 'Python', 'JavaScript', 'Java', 'C++'];

  const leaderboardData = [
    { rank: 1, name: "Sahil_NIET", score: 150, badge: "Master Architect" },
    { rank: 2, name: "Mursleen", score: 120, badge: "Expert Debugger" },
    { rank: 3, name: "Rahul_AI", score: 95, badge: "Rising Star" },
  ];

  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('requests');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "React useEffect Loop", tag: "React", desc: "Infinite loop help!", credits: 5, author: "Mursleen" }
    ];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('React');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    localStorage.setItem('requests', JSON.stringify(requests));
    if (user) localStorage.setItem('user', JSON.stringify(user));
  }, [requests, user]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLogin = (email) => {
    const userName = email.split('@')[0];
    const newUser = { name: userName, credits: 50, messages: 2 };
    setUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); 
    toast.success(`Welcome, ${userName}!`, { theme: theme });
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setShowLanding(true);
    toast.info("Logged out successfully!", { theme: theme });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false); 
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800); 
  };

  const handleOfferHelp = (reward) => {
    setUser(prev => ({...prev, credits: prev.credits + reward}));
    toast.success(`Well! You earned ${reward} credits!`, {
      position: "bottom-right",
      theme: theme === 'dark' ? 'dark' : 'light',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.credits < 10) {
      toast.error("Bhai, credits kam hain! Help karke kama lo.", {
        position: "bottom-right",
        theme: theme === 'dark' ? 'dark' : 'light',
      });
      return;
    }
    const newPost = { id: Date.now(), title, tag, desc, credits: 10, author: user.name };
    setRequests([newPost, ...requests]);
    setUser({...user, credits: user.credits - 10});
    setIsModalOpen(false);
    setTitle(''); setDesc('');
    toast.info("Request Post Ho Gayi!", { position: "bottom-right", theme: theme === 'dark' ? 'dark' : 'light' });
  };

  const renderContent = () => {
    if (activeTab === 'Messages') return <ChatPage />;
    if (activeTab === 'Settings') return <ProfilePage user={user} />;

    if (activeTab === 'Leaderboard') {
      return (
        <div className="leaderboard-container">
          <h2 className="section-title">Top Contributors</h2>
          <div className="leaderboard-list">
            {leaderboardData.map(player => (
              <div key={player.rank} className="leaderboard-card">
                <span className="rank">#{player.rank}</span>
                <div className="player-info">
                  <h4>{player.name}</h4>
                  <p className="badge-tag">{player.badge}</p>
                </div>
                <div className="score">🪙 {player.score}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'Credit History') {
      return (
        <div className="history-container">
          <h2 className="section-title">Credit Transactions</h2>
          <div className="history-list">
            <div className="history-item earned"><span>+10</span> Daily Login Bonus</div>
            <div className="history-item spent"><span>-10</span> Posted: React Help</div>
            <div className="history-item earned"><span>+5</span> Helped: Python Script</div>
          </div>
        </div>
      );
    }

    let displayRequests = requests;
    if (activeTab === 'My Requests') displayRequests = requests.filter(r => r.author === user.name);
    if (selectedTag !== 'All') displayRequests = displayRequests.filter(r => r.tag === selectedTag);
    const filtered = displayRequests.filter(req => req.title.toLowerCase().includes(searchTerm.toLowerCase()) || req.tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <>
        <div className="content-header">
          <h2>{activeTab === 'Dashboard' ? 'Active Help Requests' : 'My Posted Requests'}</h2>
          <div className="filter-pills">
            {categories.map(cat => (
              <button key={cat} className={`pill ${selectedTag === cat ? 'active-pill' : ''}`} onClick={() => { setSelectedTag(cat); setIsLoading(true); setTimeout(() => setIsLoading(false), 500); }}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="feed">
          {isLoading ? [1, 2, 3].map(n => <SkeletonCard key={n} />) : filtered.length > 0 ? filtered.map(req => <RequestCard key={req.id} {...req} onOfferHelp={() => handleOfferHelp(req.credits)} />) : <div className="no-results">No requests found.</div>}
        </div>
      </>
    );
  };

  if (showLanding) {
    return <LandingPage onEnterApp={() => setShowLanding(false)} />;
  }

  if (!isLoggedIn) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <ToastContainer autoClose={3000} theme={theme === 'dark' ? 'dark' : 'light'} position="bottom-right" />
      
      <header className="navbar">
          {}
          <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
          
          <div className="logo">CodeBarter</div>
          <div className="search-container">
            <input type="text" placeholder="Search problems..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="nav-actions">
            <div className="notification-icon">
              <span className="bell">🔔</span>
              <span className="notify-badge">2</span>
              <div className="notif-dropdown">
                <div className="notif-item">New help request in AI</div>
                <div className="notif-item">Mursleen, someone liked your code!</div>
              </div>
            </div>

            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="post-request-btn" onClick={() => setIsModalOpen(true)}>+ Post</button>
            <div className="user-profile-pill">🪙 {user?.credits || 0}</div>
          </div>
      </header>

      <div className="app-layout">
          <aside className={`sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
              <nav>
                  <ul>
                      <li className={activeTab === 'Dashboard' ? 'active' : ''} onClick={() => handleTabChange('Dashboard')}>Dashboard</li>
                      <li className={activeTab === 'My Requests' ? 'active' : ''} onClick={() => handleTabChange('My Requests')}>My Requests</li>
                      <li className={activeTab === 'Messages' ? 'active' : ''} onClick={() => handleTabChange('Messages')}>Messages <span className="badge">{user?.messages || 0}</span></li>
                      <li className={activeTab === 'Leaderboard' ? 'active' : ''} onClick={() => handleTabChange('Leaderboard')}>Leaderboard</li>
                      <li className={activeTab === 'Credit History' ? 'active' : ''} onClick={() => handleTabChange('Credit History')}>Credit History</li>
                      <li className={activeTab === 'Settings' ? 'active' : ''} onClick={() => handleTabChange('Settings')}>Settings</li>
                      {}
                      <li className="logout-item" onClick={handleLogout}>Logout</li>
                  </ul>
              </nav>
          </aside>
          <main className="main-content">{renderContent()}</main>
      </div>

      <div className={`cb-ai-wrapper ${isAIChatOpen ? 'expanded' : ''}`}>
        <div className="cb-ai-window">
          <div className="cb-ai-header">
            <div className="ai-status-dot"></div>
            <span>CB-ASSISTANT v1.0</span>
            <button onClick={() => setIsAIChatOpen(false)}>×</button>
          </div>
          <div className="cb-ai-messages">
            <div className="bot-msg">System Online... I am Mursleen's AI bot. Ready to barter?</div>
          </div>
          <div className="cb-ai-input">
            <input type="text" placeholder="Type a command..." />
            <button>⚡</button>
          </div>
        </div>
        <button className="cb-ai-trigger" onClick={() => setIsAIChatOpen(!isAIChatOpen)}>
          <div className="ai-core-glow"></div>
          🤖
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content large-modal">
            <h3>Post Request</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <select value={tag} onChange={(e) => setTag(e.target.value)}>{categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}</select>
              <div className="editor-wrapper">
                <label>Code Snippet / Problem Description</label>
                <Editor
                  height="250px"
                  defaultLanguage={tag.toLowerCase() === 'c++' ? 'cpp' : tag.toLowerCase()}
                  theme={theme === 'dark' ? 'vs-dark' : 'light'}
                  value={desc}
                  onChange={(value) => setDesc(value)}
                  options={{ minimap: { enabled: false }, fontSize: 14 }}
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="help-btn">Post</button>
                <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App