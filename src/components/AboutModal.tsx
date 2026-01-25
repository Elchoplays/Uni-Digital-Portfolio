import React from 'react';

interface AboutModalProps {
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-arup-red border-b-2 border-arup-red pb-2 mb-4">{children}</h3>
);

const ExperienceItem: React.FC<{ title: string; duration: string; description: string }> = ({ title, duration, description }) => (
    <div className="mb-4">
        <h4 className="font-bold text-lg text-arup-dark-gray">{title}</h4>
        <p className="text-sm font-semibold text-arup-medium-gray mb-1">{duration}</p>
        <p className="text-gray-700 text-base">{description}</p>
    </div>
);


const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b bg-arup-light-gray">
          <h2 className="text-2xl font-bold text-arup-dark-gray">Professional Project Experience</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-arup-red text-3xl font-light">&times;</button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
            <p className="text-lg text-gray-800 mb-6">
                Based at One Centenary Way in Arup’s Birmingham office, I am a committed member of the Digital Geotechnical Engineering team, supporting a variety of design projects. During my eight years at Arup, I have built strong technical skills in advanced software and digital engineering methods.
            </p>

            {/* Experience */}
            <div className="mb-8">
                <SectionTitle>Experience</SectionTitle>
                <ExperienceItem 
                    title="South East Strategic Reservoir Option SESRO" 
                    duration="July 2023 – Current" 
                    description="SESRO is a Thames Water project to build the UK’s second-largest reservoir, securing long-term water supply for the Southeast. I managed the OpenGround database to organise and maintain geotechnical data, developed Python scripts to automate workflows and improve efficiency, supported data validation to ensure accuracy for project modelling, and worked with 3D ground models by creating and refining cross-sections for design and analysis." 
                />
                <ExperienceItem 
                    title="Kutch Land Development Site" 
                    duration="February 2023 – September 2023" 
                    description="The largest-scale renewable energy project in India involves developing a site with very complex geotechnical ground conditions. I developed GIS models and created 3D surface models to generate sketches and graph plots." 
                />
                <ExperienceItem 
                    title="TransPennine Route Upgrade" 
                    duration="March 2023 – Present" 
                    description="TRU is a multi-billion-pound railway upgrade project improving travel across the Pennines. I participate in the development of technical drawings for the Mining mitigation package & modelling earthworks, which includes the creation of cross-sections and 3D models." 
                />
                <ExperienceItem 
                    title="High speed two Ltd Phase 2A" 
                    duration="November 2017 – April 2020" 
                    description="Largest scale UK Infrastructure project, a high-speed train connecting the West Midlands to Crewe. I digitally mapped land parcels, incorporating environmental mitigation elements and surface water monitoring sites. My responsibilities also encompassed the creation of technical geotechnical drawings, which include geological cross-sections, LiDAR contours, and ground models." 
                />
                <ExperienceItem 
                    title="HS2 2B" 
                    duration="April 2018 – April 2020" 
                    description="Largest scale UK Infrastructure project, a proposed high-speed rail connecting Crewe to Manchester and the West Midlands to Leeds. I generated a technical geotechnical 3D ground model to support the design phase. Additionally, I contributed to the development of automated scripts to identify intersections of contaminated land parcels with the route alignment, as part of the contamination report. Furthermore, I aided in the review of BGS GI data imported into gINT and used this data to produce cross-sections." 
                />
                <ExperienceItem 
                    title="High speed two Ltd, Interchange Station" 
                    duration="March 2018 – January 2020" 
                    description="A 340-acre development station catering to Birmingham Airport and NEC. My role encompassed the creation of 200 individual technical plots for the GI report using gINT. I was also instrumental in producing technical drawings, including ground models, standard details, cross-sections, and earthwork slope design." 
                />
                <ExperienceItem 
                    title="Alexander Stadium" 
                    duration="December 2019 – January 2020" 
                    description="The renovation of Alexander Stadium, featuring a 400m warm-up track, the addition of new tiered seating, and the replacement of the western stand. I worked on the creation of technical geotechnical drawings for the GQRA report, which incorporates interactive PDFs designed for the client's convenience." 
                />
                <ExperienceItem 
                    title="Luton Airport Expansion- Earthworks" 
                    duration="August 2017 - August 2019" 
                    description="The growth of Luton Airport involves the establishment of a second terminal, a new parking facility, and the creation of a country park on a previously contaminated site. I contributed to the development of contamination assessment reports and participated in reviewing tender reports related to monitoring. My role also included the creation of GIS drawings that depicted site topography and geological context. I was actively engaged in generating graphical plots for reports using the software GINT." 
                />
                <ExperienceItem 
                    title="High speed two Ltd, Interchange Station, Urban Growth Company" 
                    duration="October 2018 – December 2018" 
                    description="The expansion of urban development in the vicinity of the planned Interchange station. I actively participated in the generation of a 3D ground model, skilfully crafting cross-sections to illustrate the projected elevation and highlight intersections with the intended geological features." 
                />
                <ExperienceItem 
                    title="Prison" 
                    duration="March 2018 – August 2018" 
                    description="A confidential endeavour dedicated to aiding the transformation of an established correctional facility. This project involves the consolidation of borehole records and the extraction of vital data to craft a comprehensive ground model for the site." 
                />
                <ExperienceItem 
                    title="Birmingham University" 
                    duration="October 2017 - March 2018" 
                    description="Gathering extensive data from past projects in collaboration with Arup at Birmingham University, I was responsible for constructing a historical map viewer. This viewer housed archival data, including information on geology, Ground Investigation (GI), and radiation hazard maps. My task involved developing a user-friendly system to efficiently manage a substantial volume of data and present this information globally through Geographic Information System (GIS) mapping." 
                />
                <ExperienceItem 
                    title="OBU Helena Kennedy" 
                    duration="August 2017 – December 2017" 
                    description="The development of a state-of-the-art technology hub on the Headington Campus of Oxford Brookes University. My responsibilities included calculating the placement of Ground Investigation (GI) sites, determining the coordinates of these GIs, and ultimately incorporating the GI coordinates into the report." 
                />
                <ExperienceItem 
                    title="Kings Hill Park" 
                    duration="November 2017 – March 2018" 
                    description="Kings Hill Park, study of the environment condition of the surrounding area. I crafted technical drawings that illustrated the environmental characteristics and identified areas with contamination in close proximity to the site. Additionally, I contributed to the creation of drawings depicting the projected geological features, drawing from data sourced from BGS maps." 
                />
                <ExperienceItem 
                    title="Willington C Power Station" 
                    duration="August 2017 - October 2017" 
                    description="Upcoming gas-fired power station.. I played a role in preparing geotechnical drawings for the site, covering aspects such as geological assessments, potential developments, and the presence of contaminated land. My responsibility included identifying potential obstacles in the ground investigation (GI) location to assess risks for the Ground Investigation Report." 
                />
                 <ExperienceItem 
                    title="Missing Maps" 
                    duration="2017" 
                    description="I offered my assistance as a representative for Missing Maps, a charitable organisation focused on creating maps to aid humanitarian efforts in crisis-stricken regions across the globe." 
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;