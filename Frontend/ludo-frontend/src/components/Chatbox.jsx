import React, { useState} from 'react';
import './css/Chatbox.css'; // for styling

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message once
      setMessages([{ text: "Welcome to Ludo Game", from: "bot" }]);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, from: 'user' };
      setMessages(prev => [...prev, userMessage]);
      const userInput = input;
      setInput('');

      try {
        const res = await fetch('http://localhost:8000/api/reply/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userInput })
        });
      
        const data = await res.json();
        console.log("Bot reply:", data);  //  Add this for debugging
      
        if (data.reply) {
          const botMessage = { text: data.reply, from: 'bot' };
          setMessages(prev => [...prev, botMessage]);
        }
      } catch (error) {
        console.error("Error in fetching bot reply:", error);
      }
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
