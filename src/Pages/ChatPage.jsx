import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = () => {
  const [message, setMessage] = useState("");
  
  
  const chats = [
    { id: 1, name: "Sahil (React Expert)", lastMsg: "Bhai useEffect check kiya?", time: "10:30 AM", active: true },
    { id: 2, name: "Rahul (Python Dev)", lastMsg: "ML model train ho gaya.", time: "Yesterday", active: false }
  ];

  return (
    <div className="chat-container">
      {}
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <h3>Messages</h3>
        </div>
        <div className="user-list">
          {chats.map(chat => (
            <div key={chat.id} className={`user-item ${chat.active ? 'active' : ''}`}>
              <div className="avatar-small">{chat.name.charAt(0)}</div>
              <div className="user-details">
                <span className="user-name">{chat.name}</span>
                <p className="last-msg">{chat.lastMsg}</p>
              </div>
              <span className="chat-time">{chat.time}</span>
            </div>
          ))}
        </div>
      </aside>

      {}
      <main className="chat-window">
        <header className="chat-header">
          <div className="header-info">
            <div className="avatar-small">S</div>
            <div>
              <h4>Sahil (React Expert)</h4>
              <span className="online-status">Online</span>
            </div>
          </div>
        </header>

        <div className="messages-area">
          <div className="msg-bubble received">Bhai, tumhari request dekhi maine. Code bhejo.</div>
          <div className="msg-bubble sent">Haan bhai, ek minute. useEffect mein dependency array ka issue lag raha hai.</div>
          <div className="msg-bubble received">Theek hai, main check karke batata hoon.</div>
          <div className="typing-indicator">Sahil is typing...</div>
        </div>

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-btn">Send</button>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;