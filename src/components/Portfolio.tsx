
import React from 'react';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onSelect: () => void }> = ({ project, onSelect }) => {
  const displayImage = project.headerImage || project.images[0];
  const hasImages = project.images.length > 0;
  const hasVideos = project.videos && project.videos.length > 0;
  const imageCount = project.images.length;
  const videoCount = project.videos?.length || 0;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
      onClick={onSelect}
    >
      <img src={displayImage} alt={project.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
        <span className="text-xs uppercase font-semibold text-arup-red tracking-wider">{project.category}</span>
        <h3 className="text-white text-2xl font-bold mt-1">{project.title}</h3>
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">
            <p className="text-gray-300 text-sm">{project.description.substring(0, 100)}...</p>
        </div>
      </div>
      
      {/* Media Indicators */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </div>
  );
};


const Portfolio: React.FC<PortfolioProps> = ({ projects, onProjectSelect }) => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-arup-medium-gray uppercase tracking-wider">Portfolio</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A selection of my projects from the Creative Digital Design course.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={() => onProjectSelect(project)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;