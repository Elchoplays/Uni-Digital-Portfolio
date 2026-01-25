
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-arup-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-arup-medium-gray uppercase tracking-wider">Skills Framework</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Throughout my university projects, I have developed and demonstrated a range of competencies that align with the Creative Digital Design professional apprenticeship standard. These are grouped into Knowledge (K), Skills (S), and Behaviours (B).
        </p>
        <div className="mt-8">
            <a 
                href="https://skillsengland.education.gov.uk/apprenticeships/st0625-v1-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-arup-red text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
            >
                View Official KSB Standard
            </a>
        </div>
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto text-left">
            <h3 className="text-xl font-bold mb-4 text-center">How to read the KSBs in my portfolio:</h3>
            <p className="text-gray-700">
                Each project in my portfolio is linked to specific KSB codes, which match directly with the criteria set out in the official standard. For example, a tag like <span className="font-mono bg-blue-100 text-blue-800 rounded px-1.5 py-0.5 text-sm">K1</span> refers to the first Knowledge requirement, while <span className="font-mono bg-green-100 text-green-800 rounded px-1.5 py-0.5 text-sm">S5</span> refers to the fifth Skill. This system provides a clear and transparent way to see how my work meets the academic and professional requirements of my course.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
