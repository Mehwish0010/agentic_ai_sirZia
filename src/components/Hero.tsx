"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const floatingIcons = [
  // Top left corner
  { icon: "🤖", delay: 0, basePosition: { x: 5, y: 10 } },
  { icon: "🧠", delay: 0.2, basePosition: { x: 8, y: 15 } },
  // Top right corner
  { icon: "⚡", delay: 0.4, basePosition: { x: 85, y: 12 } },
  // Bottom left corner
  { icon: "🔮", delay: 0.6, basePosition: { x: 10, y: 80 } },
  // Bottom right corner
  { icon: "💡", delay: 0.8, basePosition: { x: 88, y: 85 } },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-teal-950 to-black animate-gradient bg-gradient-size" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.7),rgba(0,0,0,1))]" />
      </div>
      
      {/* Desktop Floating icons */}
      {!isMobile && floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl sm:text-5xl md:text-6xl filter drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, -15, 0],
            x: [0, 8, 0],
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${item.basePosition.x}%`,
            top: `${item.basePosition.y}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Mobile Floating Icons */}
      {isMobile && (
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + (i * 20)}%`,
                top: `${20 + (i * 10)}%`,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-teal-500/10 to-white/5 text-teal-300 rounded-full text-sm font-medium border border-teal-500/20">
              POWERED BY ADVANCED AI
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome To
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block mt-2 bg-gradient-to-r from-teal-400 to-teal-200 text-transparent bg-clip-text"
            >
              Agentia
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Transform your business with next-generation AI technology and advanced neural networks
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-teal-500 to-teal-400 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              <span className="flex items-center gap-2">
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-3 rounded-lg group border border-teal-500/20"
            >
              <span className="relative z-10 text-teal-400 group-hover:text-black transition-colors duration-300">
                Watch Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-400/10 group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 