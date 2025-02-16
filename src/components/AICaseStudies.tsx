"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const caseStudies = [
  {
    title: "Autonomous Decision Making",
    description: "AI agents that make intelligent decisions based on complex data analysis",
    icon: "🎯"
  },
  {
    title: "Multi-Agent Collaboration",
    description: "Multiple AI agents working together to solve complex problems",
    icon: "🤝"
  },
  {
    title: "Adaptive Learning",
    description: "Systems that continuously learn and improve from interactions",
    icon: "📈"
  }
];

export default function AICaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-teal-900/20 to-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text mb-6">
            AI in Action
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our AI agents transform businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 
                            rounded-xl transform group-hover:scale-105 transition-all duration-300" />
              <div className="relative p-6 rounded-xl border border-teal-500/20 
                            group-hover:border-teal-500/40 transition-all">
                <div className="text-4xl mb-4">{study.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-300">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 