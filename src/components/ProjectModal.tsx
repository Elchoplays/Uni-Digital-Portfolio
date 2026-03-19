
import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project, KSBs } from '../types';
import KSBTooltipBadge from './KSBTooltipBadge';

const KSBBadge: React.FC<{ type: 'K' | 'S' | 'B'; code: string }> = ({ type, code }) => {
  return <KSBTooltipBadge code={code} type={type} align="start" />;
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

const getYouTubeEmbedUrl = (url: string): string => {
    // Try to extract from YouTube Shorts format first: youtube.com/shorts/VIDEO_ID
    const shortsMatch = url.match(/(?:youtube\.com|youtu\.be)\/shorts\/([^?&]+)/);
    if (shortsMatch) {
        return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }
    
    // Try standard YouTube formats: watch?v=VIDEO_ID or youtu.be/VIDEO_ID
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    if (videoIdMatch) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    
    // Return as-is if already an embed URL
    return url;
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [activeMediaType, setActiveMediaType] = useState<'image' | 'video'>('image');
  const shouldReduceMotion = useReducedMotion();
    const hasVideos = project.videos && project.videos.length > 0;
    const allMedia = project.images.length + (hasVideos ? project.videos.length : 0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeMediaType === 'image') {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        } else {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % (project.videos?.length || 1));
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeMediaType === 'image') {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
        } else {
            setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + (project.videos?.length || 1)) % (project.videos?.length || 1));
        }
    };
    
  return (
    <motion.div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className="w-full h-full p-2 sm:p-4 lg:p-6"
        onClick={(e) => e.stopPropagation()}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.99 }}
        transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.42, ease: 'easeOut' }}
      >
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-white flex flex-col lg:flex-row">
        <motion.button
          onClick={onClose}
          className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-black/45 text-white rounded-full p-2 hover:bg-black/65 transition-colors z-20"
          aria-label="Close project details"
          whileHover={shouldReduceMotion ? { scale: 1.02 } : { scale: 1.08, rotate: 90 }}
          whileTap={shouldReduceMotion ? { scale: 0.98 } : { scale: 0.94 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
        {/* --- Image Gallery Section --- */}
        <div className="relative w-full lg:w-[60%] h-1/2 lg:h-full bg-arup-light-gray flex flex-col justify-center items-center overflow-hidden">
          {/* Media Tabs */}
          {hasVideos && (
            <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaType('image');
                }}
                aria-pressed={activeMediaType === 'image'}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.08em] backdrop-blur-sm border transition-all duration-200 ${
                  activeMediaType === 'image'
                    ? 'bg-arup-red text-white border-arup-red shadow-lg shadow-arup-red/25'
                    : 'bg-white/88 text-arup-medium-gray border-white/70 hover:bg-white hover:text-arup-dark-gray'
                }`}
                whileHover={shouldReduceMotion ? { scale: 1.01 } : { scale: 1.04, y: -1 }}
                whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.98 }}
              >
                <span className={`grid h-5 w-5 place-items-center rounded-full ${activeMediaType === 'image' ? 'bg-white/20' : 'bg-arup-red/10'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                    <circle cx="9" cy="10" r="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 16l-5.25-5.25a1.5 1.5 0 00-2.12 0L7 16" />
                  </svg>
                </span>
                <span>Images ({project.images.length})</span>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaType('video');
                }}
                aria-pressed={activeMediaType === 'video'}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.08em] backdrop-blur-sm border transition-all duration-200 ${
                  activeMediaType === 'video'
                    ? 'bg-arup-red text-white border-arup-red shadow-lg shadow-arup-red/25'
                    : 'bg-white/88 text-arup-medium-gray border-white/70 hover:bg-white hover:text-arup-dark-gray'
                }`}
                whileHover={shouldReduceMotion ? { scale: 1.01 } : { scale: 1.04, y: -1 }}
                whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.98 }}
              >
                <span className={`grid h-5 w-5 place-items-center rounded-full ${activeMediaType === 'video' ? 'bg-white/20' : 'bg-arup-red/10'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5A2.5 2.5 0 015.5 6h8A2.5 2.5 0 0116 8.5v7a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 013 15.5v-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l4-2v8l-4-2" />
                  </svg>
                </span>
                <span>Videos ({project.videos?.length || 0})</span>
              </motion.button>
            </div>
          )}
          
          {/* Display Images or Videos */}
          <AnimatePresence mode="wait" initial={false}>
            {activeMediaType === 'image' ? (
              <motion.img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                key={`image-${project.images[currentImageIndex]}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.32, ease: 'easeOut' }}
              />
            ) : (
              <motion.iframe
                width="100%"
                height="87%"
                src={getYouTubeEmbedUrl(project.videos?.[currentVideoIndex] || '')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="max-w-full max-h-full"
                key={`video-${project.videos?.[currentVideoIndex] || currentVideoIndex}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.28, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
          
          {allMedia > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 transition-transform transition-colors duration-200 hover:bg-black/60 hover:scale-105 active:scale-95"
                aria-label="Previous media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 transition-transform transition-colors duration-200 hover:bg-black/60 hover:scale-105 active:scale-95"
                aria-label="Next media"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {activeMediaType === 'image' ? currentImageIndex + 1 : currentVideoIndex + 1} / {activeMediaType === 'image' ? project.images.length : project.videos?.length || 0}
              </div>
            </>
          )}
        </div>

        {/* --- Content Section --- */}
        <div className="relative isolate w-full lg:w-[40%] h-1/2 lg:h-full overflow-y-auto overflow-x-clip bg-white">
          <div className="p-8 md:p-12 lg:p-16">
            <span className="inline-flex rounded-full bg-arup-red/10 px-3 py-1 text-xs font-bold text-arup-red uppercase tracking-[0.2em]">{project.category}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-arup-dark-gray my-4">{project.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12 whitespace-pre-line">{project.description}</p>
            
            <div className="space-y-12">
              <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-arup-dark-gray mb-4">Process & Learnings</h3>
                  <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">{project.processDescription}</p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-arup-dark-gray mb-4">KSB Framework</h3>
                  <p className="mb-4 text-sm text-gray-600">Click each code to view the official ST0625 definition.</p>
                  <KSBsDisplay ksbs={project.ksbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

    </motion.div>
  );
};

export default ProjectModal;