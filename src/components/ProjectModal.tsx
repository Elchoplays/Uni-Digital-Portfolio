
import React, { useState } from 'react';
import type { Project, KSBs } from '../types';

const KSBBadge: React.FC<{ type: 'K' | 'S' | 'B'; code: string }> = ({ type, code }) => {
  const colors = {
    K: 'bg-blue-100 text-blue-800',
    S: 'bg-green-100 text-green-800',
    B: 'bg-yellow-100 text-yellow-800',
  };
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${colors[type]}`}>{code}</span>
  );
};

const KSBsDisplay: React.FC<{ ksbs: KSBs }> = ({ ksbs }) => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-bold text-lg text-arup-medium-gray mb-2">Knowledge</h4>
        <div className="flex flex-wrap gap-2">
          {ksbs.knowledge.map(k => <KSBBadge key={k} type="K" code={k} />)}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-arup-medium-gray mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {ksbs.skills.map(s => <KSBBadge key={s} type="S" code={s} />)}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-arup-medium-gray mb-2">Behaviours</h4>
        <div className="flex flex-wrap gap-2">
          {ksbs.behaviours.map(b => <KSBBadge key={b} type="B" code={b} />)}
        </div>
      </div>
    </div>
  );
}

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };
    
  return (
    <div 
      className="fixed inset-0 bg-white z-50 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full h-full flex flex-col lg:flex-row" onClick={(e) => e.stopPropagation()}>
        {/* --- Image Gallery Section --- */}
        <div className="relative w-full lg:w-[60%] h-1/2 lg:h-full bg-arup-light-gray flex justify-center items-center overflow-hidden">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.title} - image ${currentImageIndex + 1}`} 
            className="max-w-full max-h-full object-contain transition-opacity duration-300" 
            key={project.images[currentImageIndex]} // Re-trigger animations on change
          />
          {project.images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-3 hover:bg-opacity-60 transition-colors" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-3 hover:bg-opacity-60 transition-colors" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>

        {/* --- Content Section --- */}
        <div className="w-full lg:w-[40%] h-1/2 lg:h-full overflow-y-auto">
          <div className="p-8 md:p-12 lg:p-16">
            <span className="text-sm font-bold text-arup-red uppercase tracking-widest">{project.category}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-arup-dark-gray my-4">{project.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">{project.description}</p>
            
            <div className="space-y-12">
              <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-arup-dark-gray mb-4">Process & Learnings</h3>
                  <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">{project.processDescription}</p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-arup-dark-gray mb-4">KSB Framework</h3>
                  <KSBsDisplay ksbs={project.ksbs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Close Button --- */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-black bg-opacity-30 text-white rounded-full p-3 hover:bg-opacity-50 transition-colors z-10"
        aria-label="Close project details"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ProjectModal;