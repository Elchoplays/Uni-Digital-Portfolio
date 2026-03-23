import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';
import { useTheme } from '../theme/ThemeContext';
import esLogo from '../../es-logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [useLightText, setUseLightText] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isDark, toggleTheme } = useTheme();
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
        setUseLightText(isDark || !isScrolled);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const headerBottom = window.scrollY + headerElement.offsetHeight;

      // Keep white text until the header has fully moved onto the lighter sections.
      setUseLightText(isDark || headerBottom < heroBottom + 36);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, [isDark]);

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

  const useLightNavigation = isDark || useLightText;

  const themeToggle = (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold transition-colors duration-300 ${
        useLightNavigation
          ? 'border-white/25 bg-white/10 text-white hover:bg-white/18'
          : 'border-slate-200/80 bg-white/60 text-arup-dark-gray hover:bg-white/80'
      } dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={shouldReduceMotion ? { scale: 0.98 } : { scale: 0.96 }}
    >
      {isDark ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M4.97 4.97l1.59 1.59M17.44 17.44l1.59 1.59M3 12h2.25M18.75 12H21M4.97 19.03l1.59-1.59M17.44 6.56l1.59-1.59" />
          <circle cx="12" cy="12" r="4.25" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3c-.11.36-.17.74-.17 1.13a9 9 0 009.96 8.66z" />
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </motion.button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white/5 border-white/30 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70'
            : 'bg-white/5 border-white/30 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/45'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <div className="flex-shrink-0">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="group relative inline-flex items-center justify-center overflow-visible"
              aria-label="Back to home"
              whileHover={shouldReduceMotion ? { y: -1, scale: 1.01 } : { y: -2, scale: 1.03 }}
              whileTap={shouldReduceMotion ? { scale: 0.99 } : { scale: 0.97 }}
            >
              <span
                className={`pointer-events-none absolute left-1/2 top-1/2 h-10 w-20 -translate-x-1/2 -translate-y-[20%] rounded-full blur-lg transition-opacity duration-300 ${
                  useLightNavigation
                    ? 'bg-transparent opacity-0'
                    : 'bg-[radial-gradient(circle,rgba(15,23,42,0.38)_0%,rgba(15,23,42,0.24)_38%,rgba(15,23,42,0)_80%)] opacity-100'
                }`}
              ></span>
              <img
                src={esLogo}
                alt="ES logo"
                className={`relative top-[7px] z-10 h-11 w-auto object-contain transition-[filter] duration-300 ${
                  useLightNavigation
                    ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.32)]'
                    : 'drop-shadow-[0_3px_10px_rgba(15,23,42,0.34)]'
                }`}
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-9 w-16 -translate-x-1/2 -translate-y-[18%] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 rounded-full bg-arup-red/30 blur-md"></span>
              </span>
            </motion.a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <nav aria-label="Primary navigation">
              <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                    useLightNavigation
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
            {themeToggle}
          </div>
          <div className="flex items-center gap-2 md:hidden">
            {themeToggle}
            <motion.button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                useLightNavigation
                  ? 'text-white hover:text-white hover:bg-white/20'
                  : 'text-arup-dark-gray hover:text-arup-red hover:bg-white/40'
              } dark:text-white dark:hover:bg-white/10`}
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
        </div>
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              className={`md:hidden border-t px-4 pb-4 pt-2 overflow-hidden ${
                useLightNavigation ? 'border-white/30 bg-black/20' : 'border-white/40 bg-white/20'
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
                      useLightNavigation
                        ? 'bg-white/15 text-white hover:bg-white/25'
                        : 'bg-white/40 text-arup-dark-gray hover:text-arup-red'
                    } dark:bg-white/10 dark:text-white dark:hover:bg-white/15`}
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
            useLightNavigation ? 'bg-white/80 dark:bg-arup-red/80' : 'bg-arup-red/80'
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