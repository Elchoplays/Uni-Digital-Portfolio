import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-arup-medium-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-wider">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          I am available for collaboration and open to discussing new projects, creative challenges, and opportunities to contribute to innovative teams.
        </p>
        <div className="mt-8">
          <a 
            href="mailto:eleanor.seaton@student.shu.ac.uk"
            className="inline-block bg-white text-arup-red font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-arup-light-gray transition-colors duration-300 text-lg"
          >
            eleanor.seaton@student.shu.ac.uk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;