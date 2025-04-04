import React, { useState } from 'react';
import './css/Chatbox.css'; // for styling

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, from: 'user' }]);
      setInput('');
      // TODO: Send message to backend
    }
  };

  return (
    <div className="chatbox-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Customer Support</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle-btn" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbox;
