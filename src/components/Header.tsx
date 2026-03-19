import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [useLightText, setUseLightText] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.34,
  });

  const navLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const updateHeaderState = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const heroSection = document.getElementById('home');
      const headerElement = document.querySelector('header');

      if (!(heroSection instanceof HTMLElement) || !(headerElement instanceof HTMLElement)) {
        setUseLightText(!isScrolled);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const headerBottom = window.scrollY + headerElement.offsetHeight;

      // Keep white text until the header has fully moved onto the lighter sections.
      setUseLightText(headerBottom < heroBottom + 36);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Let the dropdown close first so section offsets are stable on mobile.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => scrollToSection(targetId));
      });
      return;
    }

    scrollToSection(targetId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white/5 border-white/30 shadow-xl backdrop-blur-xl'
            : 'bg-white/5 border-white/30 shadow-lg backdrop-blur-xl'
        } relative overflow-hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <div className="flex-shrink-0">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="group relative inline-flex items-center justify-center h-11 w-11 rounded-xl bg-arup-red text-white font-black text-sm tracking-wider shadow-md shadow-arup-red/30"
              aria-label="Back to home"
              whileHover={shouldReduceMotion ? { y: -1, scale: 1.01 } : { y: -2, scale: 1.03 }}
              whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.97 }}
            >
              <span className="relative z-10">ES</span>
              <span className="pointer-events-none absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 rounded-2xl bg-arup-red/35 blur-md"></span>
              </span>
            </motion.a>
          </div>
          <nav className="hidden md:block" aria-label="Primary navigation">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                    useLightText
                      ? 'text-white hover:text-white hover:bg-white/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                      : 'text-arup-dark-gray hover:text-arup-red hover:bg-white/40'
                  }`}
                  whileHover={shouldReduceMotion ? { y: -1 } : { y: -2 }}
                  whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </nav>
          <motion.button
            type="button"
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg transition-colors ${
              useLightText
                ? 'text-white hover:text-white hover:bg-white/20'
                : 'text-arup-dark-gray hover:text-arup-red hover:bg-white/40'
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            whileTap={shouldReduceMotion ? { scale: 0.98 } : { scale: 0.94 }}
          >
            <motion.svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={shouldReduceMotion ? undefined : { rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.24, ease: 'easeOut' }}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              className={`md:hidden border-t px-4 pb-4 pt-2 overflow-hidden ${
                useLightText ? 'border-white/30 bg-black/20' : 'border-white/40 bg-white/20'
              }`}
              aria-label="Mobile navigation"
              initial={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0, y: -8 }}
              transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="grid grid-cols-2 gap-2"
                variants={{
                  hidden: {},
                  show: shouldReduceMotion
                    ? {}
                    : {
                        transition: {
                          staggerChildren: 0.06,
                          delayChildren: 0.05,
                        },
                      },
                }}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      useLightText
                        ? 'bg-white/15 text-white hover:bg-white/25'
                        : 'bg-white/40 text-arup-dark-gray hover:text-arup-red'
                    }`}
                    variants={{
                      hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeOut' }}
                    whileHover={shouldReduceMotion ? { y: -1, scale: 1.005 } : { y: -1, scale: 1.01 }}
                    whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
        <motion.div
          className={`pointer-events-none absolute bottom-0 left-0 h-[2px] origin-left ${
            useLightText ? 'bg-white/80' : 'bg-arup-red/80'
          }`}
          style={{
            scaleX: shouldReduceMotion ? scrollYProgress : smoothScrollProgress,
            width: '100%',
          }}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

export default Header;