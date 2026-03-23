import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/profilePicture.jpg';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="mb-4 border-b-2 border-arup-red pb-2 text-xl font-bold text-arup-dark-gray dark:text-white">{children}</h3>
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
          <h2 className="mt-4 text-4xl lg:text-5xl font-black uppercase tracking-wider text-arup-medium-gray dark:text-slate-100">About Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-arup-medium-gray sm:text-lg dark:text-slate-300">
            Combining civil engineering experience with modern digital design to communicate technical information clearly and effectively.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start md:items-stretch">
          <motion.div className="md:col-span-2" {...reveal(0.08)}>
            <div className="sticky top-24">
              <motion.img src={profileImage} alt="Eleanor Seaton" loading="lazy" className="aspect-[3/4] w-full rounded-2xl border border-white object-cover shadow-2xl shadow-black/20 dark:border-white/10 dark:shadow-black/40" whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.24, ease: 'easeOut' }} />
            </div>
          </motion.div>
          <div className="md:col-span-3 flex">
            <motion.div className="flex h-full flex-1 flex-col rounded-2xl border border-white bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30 sm:p-8" {...reveal(0.12)} whileHover={{ y: -4 }} transition={{ ...reveal(0.12).transition, y: { duration: 0.24 } }}>
              <SectionTitle>About Me</SectionTitle>
              <div className="flex flex-1 items-center">
                <p className="text-lg leading-relaxed text-arup-medium-gray dark:text-slate-300">
                As a Technician Designer at Arup, I am committed to supporting digital transformation within the civil engineering industry. My role involves identifying and applying innovative digital solutions to improve workflows, enhance efficiency, and address complex technical challenges.<br /><br />
                I take detailed engineering data and translate it into precise technical drawings and 3D models, enabling clients and engineers to better understand and visualise project outcomes. Through the use of advanced digital tools and emerging technologies, I help to make engineering processes more accurate, efficient, and data‑driven, contributing to the successful delivery of major infrastructure projects.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            <div className="md:col-span-2 flex flex-col gap-4">
              <motion.div className="text-left rounded-2xl border border-arup-red/20 bg-gradient-to-br from-white to-red-50/40 p-5 shadow-lg shadow-black/10 backdrop-blur dark:from-slate-900 dark:to-slate-800 dark:shadow-black/30" {...reveal(0.16)} whileHover={{ y: -4 }} transition={{ ...reveal(0.16).transition, y: { duration: 0.24 } }}>
                <p className="mb-4 border-b-2 border-arup-red pb-2 text-xl font-black text-arup-dark-gray dark:text-white">Eleanor Seaton</p>
                <div className="mt-4 space-y-2 text-sm text-arup-medium-gray dark:text-slate-300">
                  <p><span className="font-bold text-arup-dark-gray dark:text-white">Profession:</span> Civil and Ground Engineer</p>
                  <p><span className="font-bold text-arup-dark-gray dark:text-white">Current Position:</span> Technician</p>
                  <p><span className="font-bold text-arup-dark-gray dark:text-white">Years of Experience:</span> 8</p>
                  <p><span className="font-bold text-arup-dark-gray dark:text-white">Student ID:</span> 27020329</p>
                </div>
              </motion.div>
              <motion.div className="flex-1 rounded-2xl border border-white bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30" {...reveal(0.2)} whileHover={{ y: -4 }} transition={{ ...reveal(0.2).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Hobbies</SectionTitle>
                <ul className="list-inside list-disc space-y-2 text-sm text-arup-medium-gray dark:text-slate-300">
                  <li>Horse Riding</li>
                  <li>Photography</li>
                  <li>Learning Spanish</li>
                  <li>Travelling the world with my boyfriend</li>
                </ul>
              </motion.div>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-stretch">
              <motion.div className="h-full rounded-2xl border border-white bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30" {...reveal(0.24)} whileHover={{ y: -4 }} transition={{ ...reveal(0.24).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Education</SectionTitle>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold dark:text-white">Sheffield Hallam University</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Sept 2023 - Present</p>
                    <p className="text-sm dark:text-slate-300">BA (Hons) Creative Digital Design</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">Coventry University</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Sept 2019 - 2022</p>
                    <p className="text-sm dark:text-slate-300">CertHE Civil Engineering</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">Solihull College</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Sept 2017 - 2019</p>
                    <p className="text-sm dark:text-slate-300">BTech Level 3 Civil Engineering</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">Professional Associations & Certifications</p>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-slate-400">
                      <li>Engineering Technicians of the ICE (EngTech)</li>
                      <li>CSCS Card obtained</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="flex h-full flex-col rounded-2xl border border-white bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30" {...reveal(0.3)} whileHover={{ y: -4 }} transition={{ ...reveal(0.3).transition, y: { duration: 0.24 } }}>
                <SectionTitle>Project Experience</SectionTitle>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold dark:text-white">South East Strategic Option</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">July 2023 - Present</p>
                    <p className="text-sm dark:text-slate-300">Reservoir</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">High Speed 2 Contract</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Apr 2024 - Present</p>
                    <p className="text-sm dark:text-slate-300">Railway infrastructure</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">Alexander Stadium</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Dec 2019 - Jan 2020</p>
                    <p className="text-sm dark:text-slate-300">Sport Statium</p>
                  </li>
                  <li>
                    <p className="font-semibold dark:text-white">Luton Airport Expansion</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Aug 2017 - Aug 2019</p>
                    <p className="text-sm dark:text-slate-300">Aeronautical</p>
                  </li>
                </ul>
                <motion.button
                  onClick={onReadMoreClick}
                  className="mt-6 md:mt-auto bg-arup-red text-white font-bold py-2.5 px-6 rounded-xl shadow-md hover:bg-red-700 transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Full Experience
                </motion.button>
              </motion.div>
            </div>
          </div>
          <motion.div className="md:col-span-5 rounded-2xl border border-white bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30 sm:p-8" {...reveal(0.28)} whileHover={{ y: -4 }} transition={{ ...reveal(0.28).transition, y: { duration: 0.24 } }}>
            <SectionTitle>Digital Skills</SectionTitle>
            <p className="text-base text-arup-medium-gray dark:text-slate-300">I am proficient in a wide range of industry-standard software, with strong skills in engineering design tools and creative applications. My key capabilities include:</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-arup-medium-gray dark:text-slate-300">
              <li><strong>Geotechnical and Engineering Software:</strong> Experienced in gINT, GIS, OpenGround, and OpenGround Connectors for managing and analysing geotechnical data.</li>
              <li><strong>Engineering CAD Tools:</strong> Advanced proficiency in MicroStation, AutoCAD, and Civil 3D for accurate drawings across complex civil engineering projects.</li>
              <li><strong>Adobe Creative Suite:</strong> Skilled in Illustrator, Photoshop, and Procreate for technical visuals, design concepts, and professional editing.</li>
              <li><strong>Data Analysis & Workflow Automation:</strong> Practical experience using Python and R Studio to automate tasks and support data-driven decision-making.</li>
              <li><strong>3D Modelling:</strong> Proficient in producing and interpreting 3D ground models using Leapfrog and Civil 3D.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;