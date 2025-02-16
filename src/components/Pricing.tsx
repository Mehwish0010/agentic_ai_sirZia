"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Starter",
    price: "$499",
    features: [
      "2 AI Agents",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Reports"
    ]
  },
  {
    name: "Professional",
    price: "$999",
    features: [
      "10 AI Agents",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Agents",
      "Custom Development",
      "Dedicated Support",
      "Full API Access"
    ]
  }
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-800/80 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-emerald-500 mb-8">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 