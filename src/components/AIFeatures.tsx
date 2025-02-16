"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aiFeatures = [
  {
    title: "Autonomous Agents",
    description: "Self-learning AI agents that adapt to your business needs",
    icon: "🤖",
    gradient: "from-teal-400 to-cyan-400"
  },
  {
    title: "LangGraph Integration",
    description: "Advanced language processing with graph-based analysis",
    icon: "🔄",
    gradient: "from-teal-400 to-cyan-400"
  },
  {
    title: "CrewAI Framework",
    description: "Collaborative AI agents working together seamlessly",
    icon: "👥",
    gradient: "from-teal-400 to-cyan-400"
  }
];

export default function AIFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-teal-900/20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text mb-6">
            AI Technologies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Powered by cutting-edge AI frameworks and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-b from-teal-900/30 to-black/30 backdrop-blur-sm 
                         border border-teal-500/10 hover:border-teal-500/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
              
              <motion.div
                className={`mt-4 h-1 rounded-full bg-gradient-to-r ${feature.gradient}`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 