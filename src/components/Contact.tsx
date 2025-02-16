"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-900/20 to-cyan-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 from-emerald-500 to-transparent">Contact Us</h3>
              <p className="text-gray-300 mb-6">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <span className="mr-2">📍</span> 123 AI Street, Tech City
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="mr-2">📧</span> contact@aienterprise.com
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="mr-2">📱</span> +1 234 567 890
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-teal-900/30 border border-teal-500/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-teal-900/30 border border-teal-500/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-teal-900/30 border border-teal-500/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
