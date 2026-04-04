
import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Project, ProjectSection, KSBs } from '../types';
import KSBTooltipBadge from './KSBTooltipBadge';

const KSBBadge: React.FC<{ type: 'K' | 'S' | 'B'; code: string }> = ({ type, code }) => {
  return <KSBTooltipBadge code={code} type={type} align="start" />;
};

const KSBsDisplay: React.FC<{ ksbs: KSBs }> = ({ ksbs }) => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-lg font-bold text-arup-medium-gray dark:text-slate-200">Knowledge</h4>
        <div className="flex flex-wrap gap-2">
          {ksbs.knowledge.map(k => <KSBBadge key={k} type="K" code={k} />)}
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-bold text-arup-medium-gray dark:text-slate-200">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {ksbs.skills.map(s => <KSBBadge key={s} type="S" code={s} />)}
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-bold text-arup-medium-gray dark:text-slate-200">Behaviours</h4>
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

    // Handle sections
    const sections = project.sections ?? [];
    const hasSections = sections.length > 0;
    const defaultSection = hasSections ? (sections.find(s => s.isDefault) || sections[0]) : null;
    const [activeSection, setActiveSection] = useState<ProjectSection | null>(defaultSection);

    // Use section data if sections exist, otherwise use project data
    const displayData = activeSection || project;
    const displayTitle = activeSection?.subtitle || activeSection?.title || project.title;
    const orderedSections = [...sections].sort((a, b) => {
      const getRank = (section: ProjectSection) => {
        const key = `${section.id} ${section.title}`.toLowerCase();
        if (key.includes('project')) return 0;
        if (key.includes('uni')) return 1;
        return 2;
      };

      return getRank(a) - getRank(b);
    });
    const videoCount = displayData.videos?.length ?? 0;
    const hasVideos = videoCount > 0;
    const allMedia = displayData.images.length + videoCount;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeMediaType === 'image') {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % displayData.images.length);
        } else {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % (displayData.videos?.length || 1));
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeMediaType === 'image') {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + displayData.images.length) % displayData.images.length);
        } else {
            setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + (displayData.videos?.length || 1)) % (displayData.videos?.length || 1));
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
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.99 }}
        transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.42, ease: 'easeOut' }}
      >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-white dark:border-white/10 dark:bg-slate-900 lg:flex-row">
        <motion.button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/45 p-2 text-white transition-colors hover:bg-black/65 dark:bg-slate-800/85 dark:hover:bg-slate-700 lg:right-4 lg:top-4"
          aria-label="Close project details"
          whileHover={shouldReduceMotion ? { scale: 1.02 } : { scale: 1.08, rotate: 90 }}
          whileTap={shouldReduceMotion ? { scale: 0.98 } : { scale: 0.94 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
        {/* --- Image Gallery Section --- */}
        <div className="relative flex h-1/2 w-full flex-col items-center justify-center overflow-hidden bg-arup-light-gray dark:bg-slate-950 lg:h-full lg:w-[60%]">
          {/* Media Tabs */}
          {hasVideos && (
            <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 z-10">
              <motion.button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setActiveMediaType('image');
                }}
                aria-pressed={activeMediaType === 'image'}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.08em] backdrop-blur-sm border transition-all duration-200 ${
                  activeMediaType === 'image'
                    ? 'bg-arup-red text-white border-arup-red shadow-lg shadow-arup-red/25'
                    : 'bg-white/88 text-arup-medium-gray border-white/70 hover:bg-white hover:text-arup-dark-gray dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
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
                <span>Images ({displayData.images.length})</span>
              </motion.button>
              <motion.button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setActiveMediaType('video');
                }}
                aria-pressed={activeMediaType === 'video'}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.08em] backdrop-blur-sm border transition-all duration-200 ${
                  activeMediaType === 'video'
                    ? 'bg-arup-red text-white border-arup-red shadow-lg shadow-arup-red/25'
                    : 'bg-white/88 text-arup-medium-gray border-white/70 hover:bg-white hover:text-arup-dark-gray dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
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
                <span>Videos ({displayData.videos?.length || 0})</span>
              </motion.button>
            </div>
          )}
          
          {/* Display Images or Videos */}
          <AnimatePresence mode="wait" initial={false}>
            {activeMediaType === 'image' ? (
              <motion.img
                src={displayData.images[currentImageIndex]}
                alt={`${project.title} - image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                key={`image-${displayData.images[currentImageIndex]}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.32, ease: 'easeOut' }}
              />
            ) : (
              <motion.iframe
                width="100%"
                height="87%"
                src={getYouTubeEmbedUrl(displayData.videos?.[currentVideoIndex] || '')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="max-w-full max-h-full"
                key={`video-${displayData.videos?.[currentVideoIndex] || currentVideoIndex}`}
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
                {activeMediaType === 'image' ? currentImageIndex + 1 : currentVideoIndex + 1} / {activeMediaType === 'image' ? displayData.images.length : displayData.videos?.length || 0}
              </div>
            </>
          )}
        </div>

        {/* --- Content Section --- */}
        <div className="relative isolate h-1/2 w-full overflow-x-clip overflow-y-auto bg-white dark:bg-slate-900 lg:h-full lg:w-[40%]">
          <div className="p-8 md:p-12 lg:p-16">
            <span className="inline-flex rounded-full bg-arup-red/10 px-3 py-1 text-xs font-bold text-arup-red uppercase tracking-[0.2em]">{project.category}</span>

            {/* Section Tabs */}
            {hasSections && (
              <div className="flex flex-wrap gap-2 my-4">
                {orderedSections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section);
                      setCurrentImageIndex(0);
                      setCurrentVideoIndex(0);
                    }}
                    aria-pressed={activeSection?.id === section.id}
                    className={`inline-flex items-center px-4 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.08em] backdrop-blur-sm border-2 transition-all duration-200 ${
                      activeSection?.id === section.id
                        ? 'bg-arup-red text-white border-arup-red shadow-lg shadow-arup-red/25'
                        : 'bg-white/70 text-arup-medium-gray border-arup-medium-gray/45 hover:bg-white hover:text-arup-dark-gray dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                    whileHover={shouldReduceMotion ? { scale: 1.01 } : { scale: 1.04, y: -1 }}
                    whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.98 }}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>
            )}

            <h2 className="my-4 text-4xl font-bold text-arup-dark-gray dark:text-white lg:text-5xl">{displayTitle}</h2>
            {activeSection?.subtitle && activeSection.subtitle !== displayTitle && (
              <p className="text-lg text-gray-600 dark:text-slate-400 mb-4">{activeSection.subtitle}</p>
            )}
            <p className="mb-12 whitespace-pre-line text-lg leading-relaxed text-gray-700 dark:text-slate-300">{displayData.description}</p>

            <div className="space-y-12">
                <div className="border-t-2 border-arup-red pt-8">
                  <h3 className="mb-4 text-2xl font-bold text-arup-dark-gray dark:text-white">Process & Learnings</h3>
                  <p className="whitespace-pre-line text-base leading-relaxed text-gray-600 dark:text-slate-300">{displayData.processDescription}</p>
              </div>

                <div className="border-t-2 border-arup-red pt-8">
                  <h3 className="mb-4 text-2xl font-bold text-arup-dark-gray dark:text-white">KSB Framework</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-slate-400">Click each code to view the KSB definition.</p>
                  <KSBsDisplay ksbs={displayData.ksbs} />
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