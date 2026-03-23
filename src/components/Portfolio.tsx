
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onSelect: () => void; index: number }> = ({ project, onSelect, index }) => {
  const displayImage = project.headerImage || project.images[0];
  const hasImages = project.images.length > 0;
  const hasVideos = project.videos && project.videos.length > 0;
  const imageCount = project.images.length;
  const videoCount = project.videos?.length || 0;
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div 
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.24 : 0.62, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={shouldReduceMotion ? { y: -3, transition: { duration: 0.14, ease: 'easeOut' } } : { y: -12, scale: 1.01, transition: { duration: 0.18, ease: 'easeOut' } }}
      className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl shadow-black/10 transition-all duration-300 will-change-transform dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 cursor-pointer"
      onClick={onSelect}
    >
      <motion.img src={displayImage} alt={project.title} className="w-full h-80 object-cover" whileHover={shouldReduceMotion ? { scale: 1.02, transition: { duration: 0.16, ease: 'easeOut' } } : { scale: 1.1, transition: { duration: 0.28, ease: 'easeOut' } }} transition={{ duration: 0.7, ease: 'easeOut' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 transition-all duration-300 group-hover:from-black/90 dark:from-black/90 dark:via-black/45 dark:to-black/25" />

      <div className="absolute inset-x-0 bottom-0 p-6 min-h-[7.5rem] flex flex-col justify-end">
        <span className="inline-flex w-fit rounded-full bg-arup-red/90 px-3 py-1 text-[10px] uppercase font-semibold text-white tracking-[0.2em]">{project.category}</span>
        <h3 className="text-white font-bold mt-3 text-2xl leading-tight">{project.title}</h3>
        <p
          className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-slate-100 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.description.substring(0, 110)}...
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-arup-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Media Indicators */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-100 transition-opacity duration-300">
        {hasImages && (
          <div className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            {imageCount}
          </div>
        )}
        {hasVideos && (
          <div className="bg-arup-red bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            {videoCount}
          </div>
        )}
      </div>
    </motion.div>
  );
};


const Portfolio: React.FC<PortfolioProps> = ({ projects, onProjectSelect }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="portfolio" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.26 : 0.68, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full bg-arup-red/10 text-arup-red px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
            Featured Work
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black uppercase tracking-wider text-arup-medium-gray dark:text-slate-100">Portfolio</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-slate-300">This is the core of the portfolio: selected projects with process evidence, outcomes, and KSB mapping. Click any tile to explore the full case study.</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => onProjectSelect(project)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;