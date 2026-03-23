import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AboutModalProps {
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="mb-4 border-b-2 border-arup-red pb-2 text-xl font-bold text-arup-dark-gray dark:text-white">{children}</h3>
);

const experienceItems = [
    {
        title: 'South East Strategic Reservoir Option SESRO',
        duration: 'July 2023 - Present',
        description:
            'SESRO is a Thames Water project to build the UK\'s second-largest reservoir, securing long-term water supply for the Southeast. I managed the OpenGround database to organise and maintain geotechnical data, developed Python scripts to automate workflows and improve efficiency, supported data validation to ensure accuracy for project modelling, and worked with 3D ground models by creating and refining cross-sections for design and analysis.',
    },
    {
        title: 'TransPennine Route Upgrade',
        duration: 'March 2023 - Present',
        description:
            'TRU is a multi-billion-pound railway upgrade project improving travel across the Pennines. I participate in the development of technical drawings for the Mining mitigation package and modelling earthworks, which includes the creation of cross-sections and 3D models.',
    },
    {
        title: 'Kutch Land Development Site',
        duration: 'February 2023 - September 2023',
        description:
            'The largest-scale renewable energy project in India involves developing a site with very complex geotechnical ground conditions. I developed GIS models and created 3D surface models to generate sketches and graph plots.',
    },
    {
        title: 'Alexander Stadium',
        duration: 'December 2019 - January 2020',
        description:
            'The renovation of Alexander Stadium, featuring a 400m warm-up track, the addition of new tiered seating, and the replacement of the western stand. I worked on the creation of technical geotechnical drawings for the GQRA report, which incorporates interactive PDFs designed for the client\'s convenience.',
    },
    {
        title: 'High Speed Two Ltd, Interchange Station, Urban Growth Company',
        duration: 'October 2018 - December 2018',
        description:
            'The expansion of urban development in the vicinity of the planned Interchange station. I actively participated in the generation of a 3D ground model, skilfully crafting cross-sections to illustrate the projected elevation and highlight intersections with the intended geological features.',
    },
    {
        title: 'High Speed Two Ltd Phase 2B',
        duration: 'April 2018 - April 2020',
        description:
            'Largest scale UK Infrastructure project, a proposed high-speed rail connecting Crewe to Manchester and the West Midlands to Leeds. I generated a technical geotechnical 3D ground model to support the design phase. Additionally, I contributed to the development of automated scripts to identify intersections of contaminated land parcels with the route alignment, as part of the contamination report. Furthermore, I aided in the review of BGS GI data imported into gINT and used this data to produce cross-sections.',
    },
    {
        title: 'High Speed Two Ltd, Interchange Station',
        duration: 'March 2018 - January 2020',
        description:
            'A 340-acre development station catering to Birmingham Airport and NEC. My role encompassed the creation of 200 individual technical plots for the GI report using gINT. I was also instrumental in producing technical drawings, including ground models, standard details, cross-sections, and earthwork slope design.',
    },
    {
        title: 'Prison',
        duration: 'March 2018 - August 2018',
        description:
            'A confidential endeavour dedicated to aiding the transformation of an established correctional facility. This project involves the consolidation of borehole records and the extraction of vital data to craft a comprehensive ground model for the site.',
    },
    {
        title: 'High Speed Two Ltd Phase 2A',
        duration: 'November 2017 - April 2020',
        description:
            'Largest scale UK Infrastructure project, a high-speed train connecting the West Midlands to Crewe. I digitally mapped land parcels, incorporating environmental mitigation elements and surface water monitoring sites. My responsibilities also encompassed the creation of technical geotechnical drawings, which include geological cross-sections, LiDAR contours, and ground models.',
    },
    {
        title: 'Kings Hill Park',
        duration: 'November 2017 - March 2018',
        description:
            'Kings Hill Park, study of the environment condition of the surrounding area. I crafted technical drawings that illustrated the environmental characteristics and identified areas with contamination in close proximity to the site. Additionally, I contributed to the creation of drawings depicting the projected geological features, drawing from data sourced from BGS maps.',
    },
    {
        title: 'Birmingham University',
        duration: 'October 2017 - March 2018',
        description:
            'Gathering extensive data from past projects in collaboration with Arup at Birmingham University, I was responsible for constructing a historical map viewer. This viewer housed archival data, including information on geology, Ground Investigation (GI), and radiation hazard maps. My task involved developing a user-friendly system to efficiently manage a substantial volume of data and present this information globally through Geographic Information System (GIS) mapping.',
    },
    {
        title: 'Luton Airport Expansion- Earthworks',
        duration: 'August 2017 - August 2019',
        description:
            'The growth of Luton Airport involves the establishment of a second terminal, a new parking facility, and the creation of a country park on a previously contaminated site. I contributed to the development of contamination assessment reports and participated in reviewing tender reports related to monitoring. My role also included the creation of GIS drawings that depicted site topography and geological context. I was actively engaged in generating graphical plots for reports using the software GINT.',
    },
    {
        title: 'OBU Helena Kennedy',
        duration: 'August 2017 - December 2017',
        description:
            'The development of a state-of-the-art technology hub on the Headington Campus of Oxford Brookes University. My responsibilities included calculating the placement of Ground Investigation (GI) sites, determining the coordinates of these GIs, and ultimately incorporating the GI coordinates into the report.',
    },
    {
        title: 'Willington C Power Station',
        duration: 'August 2017 - October 2017',
        description:
            'Upcoming gas-fired power station. I played a role in preparing geotechnical drawings for the site, covering aspects such as geological assessments, potential developments, and the presence of contaminated land. My responsibility included identifying potential obstacles in the ground investigation (GI) location to assess risks for the Ground Investigation Report.',
    },
    {
        title: 'Missing Maps',
        duration: '2017',
        description:
            'I offered my assistance as a representative for Missing Maps, a charitable organisation focused on creating maps to aid humanitarian efforts in crisis-stricken regions across the globe.',
    },
];

const ExperienceTimelineItem: React.FC<{
    title: string;
    duration: string;
    description: string;
    index: number;
    isLast: boolean;
}> = ({ title, duration, description, index, isLast }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.38, ease: 'easeOut', delay: index * 0.04 }}
            className="relative grid gap-3 pb-8 md:grid-cols-[11rem_1fr] md:gap-6"
        >
            <div className="text-sm font-semibold text-arup-medium-gray dark:text-slate-400 md:pt-1 md:text-right">{duration}</div>
            <div className="relative pl-8 md:pl-10">
                {!isLast && <span className="absolute left-[7px] top-5 bottom-[-2rem] w-px bg-arup-red/30 md:left-[11px]"></span>}
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-arup-red shadow-sm shadow-arup-red/30 dark:border-slate-900 md:left-1"></span>
                <div className="rounded-2xl border border-arup-red/10 bg-arup-light-gray/35 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-slate-800/70 dark:shadow-black/20">
                    <h4 className="text-lg font-bold text-arup-dark-gray dark:text-white">{title}</h4>
                    <p className="mt-2 text-base text-gray-700 dark:text-slate-300">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};


const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
    const shouldReduceMotion = useReducedMotion();

  return (
        <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.3, ease: 'easeOut' }}
    >
            <motion.div
                                className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.992 }}
                transition={shouldReduceMotion ? { duration: 0.16 } : { duration: 0.42, ease: 'easeOut' }}
      >
                <div className="flex items-center justify-between border-b bg-arup-light-gray p-4 dark:border-white/10 dark:bg-slate-800 sm:p-5">
          <h2 className="text-2xl font-bold text-arup-dark-gray dark:text-white">Professional Project Experience</h2>
                                        <motion.button onClick={onClose} className="text-3xl font-light leading-none text-gray-500 hover:text-arup-red dark:text-slate-400" aria-label="Close about modal" whileHover={shouldReduceMotion ? { scale: 1.02 } : { scale: 1.08, rotate: 90 }} whileTap={shouldReduceMotion ? { scale: 0.98 } : { scale: 0.94 }}>&times;</motion.button>
        </div>
        
                <div className="flex-grow overflow-y-auto bg-white p-6 dark:bg-slate-900 md:p-8 lg:p-10">
            <p className="mb-6 text-lg text-gray-800 dark:text-slate-200">
                Based at One Centenary Way in Arup’s Birmingham office, I am a committed member of the Digital Geotechnical Engineering team, supporting a variety of design projects. During my eight years at Arup, I have built strong technical skills in advanced software and digital engineering methods.
            </p>

            {/* Experience */}
            <div className="mb-8">
                <SectionTitle>Experience</SectionTitle>
                <div className="mt-6">
                  {experienceItems.map((item, index) => (
                    <ExperienceTimelineItem
                      key={`${item.title}-${item.duration}`}
                      title={item.title}
                      duration={item.duration}
                      description={item.description}
                      index={index}
                      isLast={index === experienceItems.length - 1}
                    />
                  ))}
                </div>
            </div>
        </div>
            </motion.div>
        </motion.div>
  );
};

export default AboutModal;