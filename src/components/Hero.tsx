import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import testImage from '../assets/test-image.jpg';
import { scrollToSection } from '../utils/scrollToSection';

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, distance = 18) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0.12 } : { duration: 0.62, ease: 'easeOut', delay },
  });

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: 'about' | 'portfolio') => {
    e.preventDefault();
    scrollToSection(targetId);
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <motion.img
          src={testImage}
          alt="Abstract digital art background"
          className="w-full h-full object-cover scale-105 filter brightness-[0.45]"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.6, scale: 1.12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1.05 }}
          transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 1.4, ease: 'easeOut' }}
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/75 via-slate-900/45 to-slate-950/35"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.22),transparent_40%)]"></div>
        <motion.div
          className="absolute bottom-[8%] left-[6%] h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], x: [0, 10, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0.14 } : { duration: 0.72, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/20 bg-white/5 backdrop-blur-[2px] px-6 py-14 sm:px-10 sm:py-16"
      >
        <motion.h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }} {...reveal(0.12, 20)}>
          El Seaton
        </motion.h1>
        <motion.p className="mt-5 text-lg sm:text-xl md:text-2xl font-light tracking-[0.18em] text-gray-100 uppercase" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }} {...reveal(0.2, 18)}>
          Creative Digital Design Portfolio
        </motion.p>
        <motion.p className="mt-6 text-base sm:text-lg text-gray-200/95 max-w-2xl mx-auto leading-relaxed" {...reveal(0.28, 14)}>
          Assistant Technician Designer focused on digital workflows, technical visualisation, and human-centred communication for complex infrastructure projects.
        </motion.p>
        <motion.div className="w-28 h-1 bg-arup-red mx-auto my-8 rounded-full" {...reveal(0.34, 10)}></motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.14 } : { delay: 0.4, duration: 0.56 }}
          className="mt-8 flex items-center justify-center"
        >
          <motion.a
            href="#portfolio"
            onClick={(e) => handleSectionClick(e, 'portfolio')}
            className="bg-arup-red text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-arup-red/30 hover:bg-red-700 transform hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base uppercase tracking-wider cursor-pointer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Portfolio
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex justify-center gap-4 sm:gap-6">
            <motion.a href="https://github.com/Elchoplays" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-colors duration-300" aria-label="GitHub Profile" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.738 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/eleanor-seaton/" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-colors duration-300" aria-label="LinkedIn Profile" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a href="https://arup-my.sharepoint.com/personal/eleanor_seaton_arup_com/documents/documents/cv/cv%20final%20verision%202025.docx" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-colors duration-300" aria-label="View CV" whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">CV</text>
              </svg>
              <span className="sr-only">View CV</span>
            </motion.a>
          </div>

          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-5 flex justify-center"
          >
            <a
              href="#about"
              aria-label="Scroll to about section"
              onClick={(e) => handleSectionClick(e, 'about')}
              className="cursor-pointer"
            >
              <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
