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

            <motion.div className="mt-8 flex flex-col items-center" {...reveal(0.2)}>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-300">Connect</p>
              <div className="mt-4 flex justify-center gap-4 sm:gap-6">
                <motion.a href="https://github.com/Elchoplays" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-colors duration-300" aria-label="GitHub Profile" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.738 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/eleanor-seaton/" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-colors duration-300" aria-label="LinkedIn Profile" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;