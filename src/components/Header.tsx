import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }

    const fixedHeader = document.querySelector('header');
    const headerOffset = fixedHeader instanceof HTMLElement ? fixedHeader.offsetHeight + 12 : 88;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.history.replaceState(null, '', `#${targetId}`);
    window.scrollTo({
      top: Math.max(elementTop - headerOffset, 0),
      behavior: 'smooth',
    });
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
        }`}
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
                    scrolled
                      ? 'text-arup-dark-gray hover:text-arup-red hover:bg-white/40'
                      : 'text-white hover:text-white hover:bg-white/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
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
              scrolled
                ? 'text-arup-dark-gray hover:text-arup-red hover:bg-white/40'
                : 'text-white hover:text-white hover:bg-white/20'
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
                scrolled ? 'border-white/40 bg-white/20' : 'border-white/30 bg-black/20'
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
                      scrolled
                        ? 'bg-white/40 text-arup-dark-gray hover:text-arup-red'
                        : 'bg-white/15 text-white hover:bg-white/25'
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
      </div>
    </header>
  );
};

export default Header;