import React, { useState, useEffect, useCallback } from 'react';
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

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false); // State for the new modal

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
    <div className="bg-white text-arup-dark-gray font-sans">
      <Header />
      <main>
        <Hero />
        <About onReadMoreClick={openAboutModal} />
        <Portfolio projects={projects} onProjectSelect={openProjectModal} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
      {isAboutModalOpen && (
        <AboutModal onClose={closeAboutModal} />
      )}
    </div>
  );
};

export default App;
