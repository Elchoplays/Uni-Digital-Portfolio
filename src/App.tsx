import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AboutModal from './components/AboutModal'; // Import the new modal
import { projects } from './constants';
import type { Project } from './types';
import { ThemeProvider } from './theme/ThemeContext';

const AppContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false); // State for the new modal
  const shouldReduceMotion = useReducedMotion();

  const openProjectModal = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
    if (!isAboutModalOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isAboutModalOpen]);
  
  const openAboutModal = useCallback(() => {
    setAboutModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeAboutModal = useCallback(() => {
    setAboutModalOpen(false);
    if (!selectedProject) {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);


  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedProject) closeProjectModal();
        if (isAboutModalOpen) closeAboutModal();
      }
    };

    if (selectedProject || isAboutModalOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject, isAboutModalOpen, closeProjectModal, closeAboutModal]);


  return (
    <div className="relative overflow-x-hidden bg-[#e8edf2] font-sans text-arup-dark-gray antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-arup-dark-gray focus:shadow-lg dark:focus:bg-slate-900 dark:focus:text-white"
      >
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-[20%] h-80 w-80 rounded-full bg-slate-500/14 blur-3xl dark:bg-sky-400/10"
          animate={shouldReduceMotion ? undefined : { x: [0, -18, 0], y: [0, -12, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-arup-red/10 blur-3xl dark:bg-arup-red/15"
          animate={shouldReduceMotion ? undefined : { x: [0, 10, 0], y: [0, -14, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </div>
      <Header />
      <main id="main-content">
        <Hero />
        <About onReadMoreClick={openAboutModal} />
        <Portfolio projects={projects} onProjectSelect={openProjectModal} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProjectModal} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAboutModalOpen && (
          <AboutModal onClose={closeAboutModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
