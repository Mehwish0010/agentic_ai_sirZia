"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! I'll help you with that.",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
  className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-600 z-50"
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setIsOpen(!isOpen)}
>
  <span className="text-4xl">{isOpen ? "✖" : "🤖"}</span>
</motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-b from-slate-900/95 to-blue-900/95 rounded-lg shadow-xl overflow-hidden z-50 border border-blue-500/20"
          >
            {/* Chat Header */}
            <div className="bg-emerald-500 p-4">
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>

            {/* Chat Messages */}
            <div className="h-[380px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-800 text-gray-200'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 