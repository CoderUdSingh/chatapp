import React from "react";
import "../../src/";

export default function WhatsAppClone() {
  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <input type="text" placeholder="Search or start a new chat" className="search-input" />
        <div className="chat-list">
          <div className="chat-item">
            <div className="chat-name">Ajay JIO</div>
            <div className="chat-time">2:38 AM</div>
          </div>
          <div className="chat-item">
            <div className="chat-name">Harshit Chauhan New</div>
            <div className="chat-time">1:23 AM</div>
          </div>
          {/* Add more chats similarly */}
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-title">Ajay JIO</div>
          <div className="chat-actions">
            <span className="icon">📞</span>
            <span className="icon">🔍</span>
            <span className="icon">⋮</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          <div className="system-message">Missed voice call</div>
          <div className="message sent">Kya krra hai mera baby</div>
          <div className="message sent">krta hu baby thodi der me</div>
          <div className="message received">Jagre hai abhi bhi ?</div>
          <div className="message sent">Call krna hai baby?</div>
          {/* Add more messages similarly */}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input type="text" placeholder="Type a message" className="input-field" />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}
