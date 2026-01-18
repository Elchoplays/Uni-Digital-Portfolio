
import React from 'react';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onSelect: () => void }> = ({ project, onSelect }) => {
  const displayImage = project.headerImage || project.images[0];
  
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