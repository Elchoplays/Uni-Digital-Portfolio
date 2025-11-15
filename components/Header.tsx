import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-arup-red font-bold text-xl">ES</a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-arup-medium-gray hover:text-arup-red px-3 py-2 rounded-md text-sm font-medium">About Me</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-arup-medium-gray hover:text-arup-red px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-arup-medium-gray hover:text-arup-red px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-arup-medium-gray hover:text-arup-red px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;