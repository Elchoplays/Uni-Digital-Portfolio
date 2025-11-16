import React from 'react';
import testImage from '../assets/test-image.jpg';

const ArupLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="100" height="35" viewBox="0 0 133 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "h-8 w-auto text-arup-red"}>
    <path fill="currentColor" d="M0 34.238V0h11.97v13.913H24.3V0h11.97v34.238H24.3V19.74h-12.33v14.498H0zM47.07 0h11.97v34.238H47.07V0zM74.49 11.087V0h33.91v11.087h-11.97v23.151H84.46V11.087H74.49zM119.34 0h11.97v34.238h-11.97V0z"></path>
  </svg>
);


const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img 
          src={testImage}
          alt="Abstract digital art background" 
          className="w-full h-full object-cover filter brightness-50" 
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          El Seaton
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light tracking-widest text-gray-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Creative Digital Design Portfolio
        </p>
        <div className="w-24 h-1 bg-arup-red mx-auto my-8 rounded"></div>
        <a 
          href="#about"
          onClick={handleScrollClick}
          className="bg-arup-red text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 text-lg uppercase tracking-wider cursor-pointer"
        >
          Explore
        </a>
        
        <div className="mt-12 flex justify-center space-x-8">
            <a href="https://github.com/Elchoplays" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="GitHub Profile">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.738 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/eleanor-seaton/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="LinkedIn Profile">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://arup-my.sharepoint.com/personal/eleanor_seaton_arup_com/documents/documents/cv/cv%20final%20verision%202025.docx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300" aria-label="View CV">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">CV</text>
              </svg>
              <span className="sr-only">View CV</span>
            </a>
        </div>

      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
         <a href="#about" aria-label="Scroll to about section" onClick={handleScrollClick} className="cursor-pointer">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
         </a>
      </div>
    </section>
  );
};

export default Hero;
