
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-arup-dark-gray text-gray-400 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} El Seaton. All Rights Reserved.</p>
        <p className="mt-2">Portfolio created for Creative Digital Design - Sheffield Hallam University.</p>
      </div>
    </footer>
  );
};

export default Footer;
