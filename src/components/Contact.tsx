import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: 'easeOut', delay },
  });

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-arup-medium-gray via-arup-dark-gray to-black text-white p-8 sm:p-12 lg:p-14 shadow-2xl"
          {...reveal(0)}
        >
          <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-arup-red/40 blur-3xl"></div>
          <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl"></div>

          <div className="relative z-10 text-center">
            <motion.div {...reveal(0.06)}>
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                Let’s Collaborate
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-black uppercase tracking-wider">Get In Touch</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                I am available for collaboration and open to discussing new projects, creative challenges, and opportunities to contribute to innovative teams.
              </p>
            </motion.div>
            <motion.div className="mt-8" {...reveal(0.14)}>
              <motion.a 
                href="mailto:eleanor.seaton@student.shu.ac.uk"
                className="inline-block bg-white text-arup-red font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-arup-light-gray transition-colors duration-300 text-base sm:text-lg"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                eleanor.seaton@student.shu.ac.uk
              </motion.a>
            </motion.div>

            <motion.div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-200" {...reveal(0.2)}>
              <motion.a href="https://github.com/Elchoplays" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-4 py-2 hover:bg-white/10 transition-colors" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                GitHub
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/eleanor-seaton/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-4 py-2 hover:bg-white/10 transition-colors" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;