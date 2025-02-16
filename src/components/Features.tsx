"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    id: 1,
    title: "Neural Networks",
    description: "Advanced neural architectures that adapt and learn in real-time",
    icon: "🧠",
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    id: 2,
    title: "Deep Learning",
    description: "Multi-layered learning models for complex pattern recognition",
    icon: "🔮",
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    id: 3,
    title: "Natural Language",
    description: "Human-like text understanding and generation capabilities",
    icon: "💬",
    color: "bg-teal-400/10 text-teal-400"
  },
  {
    id: 4,
    title: "Computer Vision",
    description: "Advanced image and video processing with real-time analysis",
    icon: "👁️",
    color: "bg-cyan-400/10 text-cyan-400"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl bg-teal-900/50 backdrop-blur-sm hover:bg-teal-900/80 transition-all"
    >
      <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
      
      <motion.div
        className="mt-4 h-1 rounded-full bg-gradient-to-r from-teal-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-20 w-full bg-gradient-to-b from-teal-900/20 to-cyan-900/20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={inView ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text mb-4">
            Advanced AI Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Leverage cutting-edge artificial intelligence technologies to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
