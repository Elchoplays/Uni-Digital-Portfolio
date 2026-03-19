import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/profilePicture.jpg';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-arup-dark-gray border-b-2 border-arup-red pb-2 mb-4">{children}</h3>
);

interface AboutProps {
  onReadMoreClick: () => void;
}

const About: React.FC<AboutProps> = ({ onReadMoreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: 'easeOut', delay },
  });

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div className="text-center mb-12" {...reveal(0)}>
          <span className="inline-flex items-center rounded-full bg-arup-red/10 text-arup-red px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
            Profile
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-arup-medium-gray uppercase tracking-wider">About Me</h2>
          <p className="mt-4 text-base sm:text-lg text-arup-medium-gray max-w-3xl mx-auto">
            Combining civil engineering experience with modern digital design to communicate technical information clearly and effectively.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div className="md:col-span-2" {...reveal(0.08)}>
            <div className="sticky top-24">
                <motion.img src={profileImage} alt="Eleanor Seaton" loading="lazy" className="rounded-2xl shadow-2xl shadow-black/20 w-full object-cover aspect-[3/4] border border-white" whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.24, ease: 'easeOut' }} />
              <div className="mt-4 text-left bg-white/90 backdrop-blur rounded-2xl border border-white p-5 shadow-lg">
                  <p className="font-black text-xl text-arup-dark-gray">Eleanor Seaton</p>
                  <div className="mt-3 space-y-2 text-sm text-arup-medium-gray">
                    <p><span className="font-bold text-arup-dark-gray">Profession:</span> Civil and Ground Engineer</p>
                    <p><span className="font-bold text-arup-dark-gray">Current Position:</span> Assistant Technician</p>
                    <p><span className="font-bold text-arup-dark-gray">Years of Experience:</span> 8</p>
                    <p><span className="font-bold text-arup-dark-gray">Student ID:</span> 27020329</p>
                  </div>
                </div>
            </div>
          </motion.div>
          <div className="md:col-span-3">
            <motion.div className="bg-white/90 backdrop-blur rounded-2xl border border-white p-6 sm:p-8 shadow-lg" {...reveal(0.12)} whileHover={{ y: -4 }} transition={{ ...reveal(0.12).transition, y: { duration: 0.24 } }}>
              <p className="text-lg text-arup-medium-gray mb-6 leading-relaxed">
              As an Assistant Technician Designer at Arup, I am committed to supporting digital transformation within the civil engineering industry. My role involves identifying and applying innovative digital solutions to improve workflows, enhance efficiency, and address complex technical challenges.<br /><br />
              I take detailed engineering data and translate it into precise technical drawings and 3D models, enabling clients and engineers to better understand and visualise project outcomes. Through the use of advanced digital tools and emerging technologies, I help to make engineering processes more accurate, efficient, and data‑driven, contributing to the successful delivery of major infrastructure projects.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div className="rounded-2xl border border-white bg-white/90 backdrop-blur p-6 shadow-lg" {...reveal(0.16)} whileHover={{ y: -4 }} transition={{ ...reveal(0.16).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Education</SectionTitle>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Sheffield Hallam University</p>
                    <p className="text-sm text-gray-600">Sept 2023 - Present</p>
                    <p className="text-sm">BA (Hons) Creative Digital Design</p>
                  </li>
                  <li>
                    <p className="font-semibold">Coventry University</p>
                    <p className="text-sm text-gray-600">Sept 2019 - 2022</p>
                    <p className="text-sm">CertHE Civil Engineering</p>
                  </li>
                  <li>
                    <p className="font-semibold">Solihull College</p>
                    <p className="text-sm text-gray-600">Sept 2017 - 2019</p>
                    <p className="text-sm">BTech Level 3 Civil Engineering</p>
                  </li>
                  <li>
                    <p className="font-semibold">Professional Associations & Certifications</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Engineering Technicians of the ICE (EngTech)</li>
                        <li>CSCS Card obtained</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="rounded-2xl border border-white bg-white/90 backdrop-blur p-6 shadow-lg" {...reveal(0.22)} whileHover={{ y: -4 }} transition={{ ...reveal(0.22).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Project Experience</SectionTitle>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">South East Strategic Option</p>
                    <p className="text-sm text-gray-600">July 2023 - Present</p>
                    <p className="text-sm">Reservoir</p>
                  </li>
                  <li>
                    <p className="font-semibold">High Speed 2 Contract</p>
                    <p className="text-sm text-gray-600">Apr 2024 - Present</p>
                     <p className="text-sm">Railway infrastructure</p>
                  </li>
                   <li>
                    <p className="font-semibold">Alexander Stadium</p>
                    <p className="text-sm text-gray-600">Dec 2019 - Jan 2020</p>
                     <p className="text-sm">Sport Statium</p>
                  </li>
                  <li>
                    <p className="font-semibold">Luton Airport Expansion</p>
                    <p className="text-sm text-gray-600">Aug 2017 - Aug 2019</p>
                     <p className="text-sm">Aeronautical</p>
                  </li>
                </ul>
                <motion.button
                  onClick={onReadMoreClick}
                  className="mt-6 bg-arup-red text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:bg-red-700 transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Full Experience
                </motion.button>
              </motion.div>
            </div>
             <motion.div className="mt-8 rounded-2xl border border-white bg-white/90 backdrop-blur p-6 sm:p-8 shadow-lg" {...reveal(0.28)} whileHover={{ y: -4 }} transition={{ ...reveal(0.28).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Digital Skills</SectionTitle>
                <p className="text-base text-arup-medium-gray">I am proficient in a wide range of industry‑standard software, with strong skills in engineering design tools and creative applications. My key capabilities include:</p>
                <ul className="list-disc list-inside mt-3 text-arup-medium-gray space-y-2">
                    <li><strong>Geotechnical and Engineering Software:</strong> Experienced in gINT, GIS, OpenGround, and OpenGround Connectors for managing and analysing geotechnical data.</li>
                    <li><strong>Engineering CAD Tools:</strong> Advanced proficiency in MicroStation, AutoCAD, and Civil 3D for accurate drawings across complex civil engineering projects.</li>
                    <li><strong>Adobe Creative Suite:</strong> Skilled in Illustrator, Photoshop, and Procreate for technical visuals, design concepts, and professional editing.</li>
                    <li><strong>Data Analysis & Workflow Automation:</strong> Practical experience using Python and R Studio to automate tasks and support data-driven decision-making.</li>
                    <li><strong>3D Modelling:</strong> Proficient in producing and interpreting 3D ground models using Leapfrog and Civil 3D.</li>
                </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;