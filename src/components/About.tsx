import React from 'react';
import profileImage from '../assets/profilePicture.jpg';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-arup-dark-gray border-b-2 border-arup-red pb-2 mb-4">{children}</h3>
);

interface AboutProps {
  onReadMoreClick: () => void;
}

const About: React.FC<AboutProps> = ({ onReadMoreClick }) => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-arup-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-arup-medium-gray uppercase tracking-wider">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <img src={profileImage} alt="Eleanor Seaton" loading="lazy" className="rounded-lg shadow-2xl w-full object-cover aspect-[3/4]" />
            <div className="mt-4 text-center md:text-left bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold text-lg">Eleanor Seaton</p>
                <p className="text-sm text-arup-medium-gray"><span className="font-bold">Profession:</span> Civil and Ground Engineer</p>
                <p className="text-sm text-arup-medium-gray"><span className="font-bold">Current Position:</span> Assistant Technician</p>
                <p className="text-sm text-arup-medium-gray"><span className="font-bold">Years of Experience:</span> 8</p>
                <p className="text-sm text-arup-medium-gray"><span className="font-bold">Student ID:</span> 27020329</p>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-arup-medium-gray mb-6 leading-relaxed">
              As an Assistant Technician Designer at Arup, I am committed to supporting digital transformation within the civil engineering industry. My role involves identifying and applying innovative digital solutions to improve workflows, enhance efficiency, and address complex technical challenges.<br /><br />
              I take detailed engineering data and translate it into precise technical drawings and 3D models, enabling clients and engineers to better understand and visualise project outcomes. Through the use of advanced digital tools and emerging technologies, I help to make engineering processes more accurate, efficient, and data‑driven, contributing to the successful delivery of major infrastructure projects.
            </p>
            <button
              onClick={onReadMoreClick}
              className="bg-arup-red text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
            >
              Read More
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
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
              </div>
              <div>
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
              </div>
            </div>
             <div className="mt-8">
                <SectionTitle>Digital Skills</SectionTitle>
                <p className="text-base text-arup-medium-gray">I am proficient in a wide range of industry‑standard software, with strong skills in engineering design tools and creative applications. My key capabilities include:</p>
                <ul className="list-disc list-inside mt-2 text-arup-medium-gray">
                    <li><strong>Geotechnical and Engineering Software:</strong> Experienced in using gINT, GIS, OpenGround and OpenGround Connectors for managing, analysing, and organising geotechnical data.</li>
                    <li><strong>Engineering CAD Tools:</strong> Advanced proficiency in industry-standard CAD tools: MicroStation, AutoCAD, and Civil 3D, applying these tools to produce accurate and detailed drawings for complex civil engineering projects.</li>
                    <li><strong>Adobe Creative Suite:</strong> Skilled in Illustrator, Photoshop, and Procreate for technical illustrations, design concepts, and professional photo editing.</li>
                    <li><strong>Data Analysis & Workflow Automation:</strong> Practical experience using Python and R Studio  to automate tasks, improve efficiency, and support data‑driven decision‑making.</li>
                    <li><strong>3D Modelling:</strong> Proficient in producing, visualising, and interpreting 3D ground models using Leapfrog and Civil 3D.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;