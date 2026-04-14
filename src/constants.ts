import type { Project } from './types';
import LaptopImage from './assets/LaptopOpenground.png';
import OpengroundFinal from './assets/FinalisedDesign.png';
import Before from './assets/BeforePhotography.jpeg';
import After from './assets/AfterPhotography.jpeg';
import ProcreateDrawing from './assets/ProcreateDrawing.png';
import ipadmockupConcepts from './assets/ipadmockupConcepts.png';
import HandDrawing from './assets/HandDrawing.png';
import Observationscreenshot from './assets/Observationscreenshot.jpg';
import ipadmockup3dMODEL from './assets/ipadmockup3dMODEL.png';
import RStudioScreenshot from './assets/RStudioScreenshot.jpg';
import RStudioScreenshot2 from './assets/RStudioScreenshot2.jpg';
import VREquipment from './assets/VREquipment.jpeg';
import Markup from './assets/Markup.png';
import Illustration from './assets/Illustration.jpg';
import CopilotLicenseInfo from './assets/CopilotLicenseInfo.png';
import GDPR from './assets/GDPR.png';
import aimessageScreenshot from './assets/aimessageScreenshot.jpg';
import FigmaPhone from './assets/FigmaPhone.png';
import FullimageFigma from './assets/FullimageFigma.png';
import CopilotExample from './assets/Copilot example.png';
import CopilotWhy from './assets/Copilot Why.png';
import StoryboardConcept from './assets/Storyboard Concept.png';
import Storyboard_inuse from './assets/Storyboard_inuse.png';
import Concept_DigitalSketching from './assets/Concept_DigitalSketching.png';
import Dprinting1 from './assets/3Dprinting1.png';
import Dprinting2 from './assets/3dPrinting2.png';
import Dprinting3 from './assets/3Dprinting3.png';
import Dprinting4 from './assets/3D_Printing4.png';
import Dprinting5 from './assets/3D_Printing5.png.jpg';
import Dprinting6 from './assets/3D_Printing6.png.jpg';
import RLogo from './assets/R-logo.png';
import copilot_preview from './assets/Copilot header.png';
import WhatsAppImage from './assets/WhatsAppImage.jpeg';
import PythonCoding from './assets/PythonCoding.jpg';
import Tutorial_Video_Complete_Guide from './assets/Tutorial_Video_Complete_Guide_2024_.jpg';
import VideoTutorial1 from './assets/Arup_MediaSpace_Video_.png';
import VideoTutorial2 from './assets/VideoTutorial2.jpeg'; 
import PythonScript from './assets/Pythoncoding_script.png'; 
import PythonScript2 from './assets/Python coding_script2.png'; 
import PythonScript3 from './assets/Python coding_script3.png'; 
import VRDEMO from './assets/VR_DEMO.png'; 
import VRDEMO2 from './assets/VR_DEMO2.png'; 
import Openground_BlackLogo from './assets/Openground_BlackLogo.png';
import DMODEL_LEAPFROG from './assets/free_ipad_mockupBOREHOLE.png';
import DMODEL_LEAPFROG2 from './assets/Leapfrog2.png';
import AbiWedding1 from './assets/AbiWedding1.jpg';
import AbiWedding2 from './assets/AbiWedding2.jpg';
import PieChart from './assets/PieChart.png';
import scatterGraph from './assets/ScatterGraph.png';
import scatterGraph2 from './assets/ScatterGraphPlot.png';
import Process from './assets/Process.png';
import Process2 from './assets/Process2.png';
import ProcessFigma from './assets/ProcessFigma.png';
import ProcessFigma2 from './assets/ProcessFigma2.png';
import ProcessFigma3 from './assets/ProcessFIGMA3.png';
import ClipChamp from './assets/ClipChamp.png';
import secretcode from './assets/Code_Secret.png';
import photoablumn from './assets/PhotoAlbum.jpeg';
import QuarryOld from './assets/QuarryOld.png';
import QuarryPicture from './assets/Quarry_Picture.jpg';
import OrganisationStructureImage from './assets/Organisation Diagram Creative.png';
import QuarryImage2 from './assets/QuarryImage2.jpeg';
import QuarryImage3 from './assets/QuarryImage3.png';
import QuarryRoad4 from './assets/QuarryRoad4.png';
import QuarryCutFill from './assets/Quarry_Cut&Fill.png';
import QuarryMissingArea from './assets/QuarryMissing_Area.png';
import MissingQuarryImage from './assets/MissingQuarryImage.png';
import Xcross from './assets/Xcross_sectionDesign.png';


export const projects: Project[] = [
  {
    id: '01',
    title: 'Openground Infographic',
    category: 'Infographic Design',
    description: "This infographic was designed for Arup's internal GeoWiki to clearly explain the features of the new OpenGround software and its extension tools. The objective was to create a simple, user-friendly layout that enables team members to quickly understand the functionality of each connector and encourage the adoption of OpenGround in project workflows.",
    processDescription: "The design followed Arup’s brand guidelines throughout, ensuring the final infographic met the required standards for quality, accessibility, and visual consistency. Key considerations included compliance with web accessibility guidance, such as choosing readable fonts and ensuring strong colour contrast to make the content clear for all users. \n\nAn iterative, user centred approach was used, with testing and feedback helping to refine the layout at each stage. This ensured the final design was both visually appealing and practical, with user feedback directly shaping decisions such as using coloured logos to improve recognition; although black logos looked visually cleaner, people found the coloured versions easier to identify.",
    images: [LaptopImage, OpengroundFinal, HandDrawing, Process, Process2, Openground_BlackLogo],
    ksbs: {
      knowledge: ['K1', 'K2', 'K6', 'K7','K11', 'K13', 'K14', 'K16',],
      skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
  {
    id: '02',
    title: 'Leapfrog 3D Modelling',
    category: '3D Modelling',
    description: "This project involved creating a 3D ground model using real drilling data by digitising the geological information from boreholes. The completed model provided essential insight for foundation design. A key part of the work was a cut‑and‑fill assessment to understand how much of the site’s natural material could be reused, helping to optimise material use. The project also required overcoming technical challenges, including software limitations, complex tasks, and performance issues.",
    processDescription: "To meet the technical requirements of this project and strengthen my skills in Leapfrog, I completed a structured Arup learning module, as I did not yet have the knowledge needed to carry out cut‑and‑fill calculations in the software. This involved studying technical documentation, completing formal training, and working closely with project engineers to fully understand all project requirements. \n\nThis proactive approach enabled me to successfully produce the 3D ground model, which formed an important part of the process for designing suitable foundations based on the underlying geology. I also completed accurate cut‑and‑fill calculations, which were essential in determining how much on‑site soil could be reused. This helped minimise landfill waste and reduced the need for imported materials, supporting more sustainable construction practices. The analysis also provided valuable data for the sustainability team’s carbon impact assessment.",
    images: [ipadmockup3dMODEL, DMODEL_LEAPFROG, DMODEL_LEAPFROG2],
    ksbs: {
      knowledge: ['K7', 'K8', 'K16', 'K17', 'K19', 'K20'],
      skills: ['S2', 'S5', 'S7', 'S12', 'S14', 'S15', 'S17', 'S18'],
      behaviours: ['B2', 'B3']
    }
  },
  {
    id: '03',
    title: 'Concepts Sketching',
    category: 'Digital Sketching',
    description: "This project examines how sketches have traditionally been produced within Arup, where the quality has often been inconsistent and has sometimes led to unclear communication. Its aim is to explore better ways of improving sketching practices within the Geotechnical team.",
    processDescription: `This research project examined which sketching software would be most suitable for Arup. I assessed each application by considering ease of use, how well it supported existing workflows, and the quality of sketches it could produce. Testing involved observing how users interacted with the tools, how effectively the features worked, and how well each programme integrated with other software. \n\nThe three main applications reviewed were Concepts, Procreate, and Sketchbook. I tested them on iPads, which are commonly used at Arup for both site and office work, as well as on desktop devices, where most sketching still takes place. I also gathered feedback from users with varying levels of experience to understand their challenges and ensure the process was fair and handled ethically. \n\nThe research found that Concepts was the best option for Arup. Its engineering‑focused features, including the ability to draw to scale, made it particularly suitable. It also offers both desktop and tablet versions, meeting many practical needs across the team. As a future development, I recommended creating a library of scaled sketching assets that staff can insert into their drawings, helping to speed up the sketching process and support more professional, consistent results.`,
    images: [ipadmockupConcepts, ProcreateDrawing, Observationscreenshot, StoryboardConcept, Storyboard_inuse, Concept_DigitalSketching],
    ksbs: {
      knowledge: ['K1', 'K2', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K14', 'K16', 'K17'],
      skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8','S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S18'],
      behaviours: ['B1', 'B2', 'B3', 'B4', 'B5']
    }
  },
  {
    id: '04',
    title: 'Using AI Copilot',
    category: 'Artificial Intelligence',
    description: "This project demonstrates how I have been learning to use AI Copilot to make everyday tasks quicker and more efficient. It helps manage repetitive work, allowing myself to focus more on creative thinking and important decision‑making. I have used it to check data, support decisions, and help draft materials such as PowerPoint slides and work emails. ",
    processDescription: "The use of AI Copilot in my work has highlighted both its key benefits and the ethical considerations that come with it. While it helps make tasks more efficient, it also raises important concerns about data privacy, copyright, and bias. This is particularly significant because many of our projects involve strict confidentiality agreements, and any misuse could lead to serious issues. \n\nThrough this learning process and my experiments with AI, I gained a better understanding of Arup’s agreement with Copilot and the reasons the company holds a Copilot licence. This agreement ensures that any information entered into the system is not used to train the AI, helping to protect our confidentiality commitments. I also learned that other chatbot tools can be used, but any confidential information must be removed before entering data. In some cases, Arup has blocked access to certain sites to prevent sensitive information from being shared accidentally.\n\nOverall, this experience has reinforced the professional responsibility to stay aware of the ethical issues surrounding AI, to question its outputs, and to support its responsible use in line with industry standards.",
    images: [CopilotWhy, CopilotExample, CopilotLicenseInfo, GDPR, aimessageScreenshot],
    headerImage: copilot_preview,
    ksbs: {
      knowledge: ['K1', 'K2', 'K6', 'K8', 'K9', 'K10', 'K13', 'K14', 'K16', 'K17', 'K18'],
      skills: ['S5', 'S6', 'S10', 'S11', 'S13', 'S14', 'S18'],
      behaviours: ['B2', 'B3', 'B4', 'B5']
    }
  },
  {
    id: '05',
    title: 'Coding',
    category: 'R Studio & Python',
    description: "This section combines two distinct coding experiences: university work using R Studio for data analysis and visualisation, and project work using Python for real engineering applications. Each project enhanced my programming skills and understanding of how different languages serve different purposes.",
    processDescription: "My coding journey began with R Studio in a university context, where I was new to the language and used generative AI to help understand difficult functions and syntax. A key learning was how to review and improve AI‑generated code. I found that copying code directly from the AI often led to errors that needed fixing. Rather than getting frustrated, I used this as an opportunity to understand why the code was wrong and how to correct it. Over time, I started spotting issues before running the script. This process of checking and refining code was very useful in building my programming skills, showing that when used carefully and with a critical approach, AI can be a powerful tool for accelerating learning in technical subjects.\n\nI also learned that different programming languages suit different tasks, for example, R is particularly strong for data analysis and visualisation. This understanding directly transferred to my project work using Python. The Reservoir project gave me the opportunity to use my Python skills in a real engineering context, moving from training exercises to practical problem‑solving. My main tasks were to improve a Bill of Quantities calculation script so that it worked reliably with the current dataset, and to create a new Python script that automatically generated legend codes based on the data available in the OpenGround database.\n\nWith Python, I began by reviewing the project requirements and exploring the OpenGround database to understand how the data was structured. I then planned the logic for a new legend code script and improved the Bill of Quantities script so it would run reliably with the current dataset. The challenge with the legend code script was to read geology descriptions and match them to the most suitable legend codes, despite variations in how the descriptions were written. To address these issues, I tested, rewrote, and refined the code, explored new Python libraries to make the script cleaner, and used Copilot to troubleshoot and learn alternative approaches. I also added clear comments to the code so others could reuse my work. Through this process, I became more confident using Python in real engineering tasks, learned the value of breaking problems into steps, and saw how AI tools can support learning. Overall, both projects strengthened my coding, problem‑solving, and teamwork skills, and prepared me to take on larger technical challenges.",
    images: [RStudioScreenshot, scatterGraph, scatterGraph2, RStudioScreenshot2, PieChart, PythonScript, PythonScript2, PythonScript3],
    headerImage: PythonCoding,
    ksbs: {
      knowledge: ['K6', 'K7', 'K8', 'K9', 'K13', 'K14', 'K17', 'K18'],
      skills: ['S5', 'S6', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
      behaviours: ['B1', 'B2', 'B3', 'B5']
    },
    sections: [
      {
        id: 'uni',
        title: 'Uni Work',
        subtitle: 'R Studio',
        color: 'white',
        description: "This university project was about learning to use R Studio for data analysis and visualisation. As I was new to the language, I was encouraged to use generative AI to help me understand difficult functions and syntax, and to build my knowledge of R. One of the main things I learnt was how to write clear prompts to get accurate and useful guidance from the AI, which made the learning process much quicker.",
        processDescription: "A key part of this project was learning how to review and improve AI‑generated code. I found that copying code directly from the AI often led to errors that needed fixing. Rather than getting frustrated, I used this as an opportunity to understand why the code was wrong and how to correct it. Over time, I started spotting issues before running the script, as the guidance was not always fully accurate.\n\n This process of checking and refining code was very useful in building my programming skills. It showed that, when used carefully and with a critical approach, AI can be a powerful tool for accelerating learning in technical subjects. I also learned that different programming languages suit different tasks, for example, R is particularly strong for data analysis and visualisation.",
        images: [RStudioScreenshot, scatterGraph, scatterGraph2, RStudioScreenshot2, PieChart],
        ksbs: {
          knowledge: ['K7', 'K13', 'K17', 'K18'],
          skills: ['S5', 'S6', 'S10', 'S11', 'S18'],
          behaviours: ['B1', 'B2', 'B5']
        }
      },
      {
        id: 'project',
        title: 'Project Work',
        subtitle: 'Python',
        color: 'red',
        isDefault: true,
        description: "The Reservoir project gave me the opportunity to use my Python skills in a real engineering context, moving from training exercises to practical problem‑solving. My main tasks were to improve a Bill of Quantities calculation script so that it worked reliably with the current dataset, and to create a new Python script that automatically generated legend codes based on the data available in the OpenGround database. \n\nThe project helped build my confidence in coding, introduced me to more advanced techniques, and showed how AI tools like Copilot can support learning and development.",
        processDescription: "I began by reviewing the project requirements and exploring the OpenGround database to understand how the data was structured. I then planned the logic for a new legend code script and improved the Bill of Quantities script so it would run reliably with the current dataset. The Bill of Quantities script had been built for another project and was not designed to handle multiple projects, so I redesigned and fixed it to work more broadly. The challenge with the legend code script was to read geology descriptions and match them to the most suitable legend codes, despite variations in how the descriptions were written. \n\nTo address these issues, I tested, rewrote, and refined the code, explored new Python libraries to make the script cleaner, and used Copilot to troubleshoot and learn alternative approaches. I also added clear comments to the code so others could reuse my work. Through this process, I became more confident using Python in real engineering tasks, learned the value of breaking problems into steps, and saw how AI tools can support learning. Overall, the project strengthened my coding, problem‑solving, and teamwork skills, and prepared me to take on larger technical challenges.",
        images: [PythonScript, PythonScript2, PythonScript3, secretcode],
        ksbs: {
          knowledge: ['K6', 'K7', 'K8', 'K9', 'K13', 'K14', 'K17', 'K18'],
          skills: ['S5', 'S6', 'S10', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
          behaviours: ['B2', 'B3', 'B5']
        }
      }
    ]
  },
  {
    id: '06',
    title: 'Geotechnical Design',
    category: 'Illustration & UI/UX Design',
    description: 'This section brings together two related design projects focused on making geotechnical engineering easier to understand. The project work centred on updating a technical illustration for Arup, while the university work explored how the same subject could be communicated through an interactive Figma mobile app. Together, they show how illustration and interface design can support clearer communication for technical audiences and the wider public.',
    processDescription: 'Across both projects, the main challenge was translating technical geotechnical content into formats that felt clear, engaging, and accessible. One project used illustration and stakeholder feedback to improve a professional engineering graphic, while the other applied UX principles and interactive design to create a mobile-first educational experience. Both strengthened my ability to adapt technical information for different audiences and platforms.',
    images: [Illustration, FigmaPhone, FullimageFigma],
    headerImage: FigmaPhone,
    ksbs: {
      knowledge: ['K1', 'K2', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12', 'K13', 'K14', 'K15', 'K16', 'K17'],
      skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    },
    sections: [
      {
        id: 'project',
        title: 'Project Work',
        subtitle: 'Geotechnics Illustration',
        color: 'red',
        isDefault: true,
        description: "For this task, I was asked to update a Geotechnical Engineering graphic to include the team’s offshore expertise, which was missing from the original design. I used Procreate to sketch initial ideas and Illustrator to create a polished, brand compliant version. The project also helped explain what geotechnical engineering involves, as many people, even within the engineering department find it difficult to understand. The updated graphic strengthened our professional image and provided a clearer overview of the team’s capabilities.",
        processDescription: "I learned the importance of being flexible and using feedback to make sure the final design met stakeholder needs. The process involved gathering comments and adjusting the design based on their suggestions. I enjoyed using Procreate for quick sketches, as it allowed me to show different ideas and move through the review process more quickly. \n\nFor example, I first sketched an offshore oil rig, but the engineer asked for a wind turbine instead. Because it was only a rough sketch, the change was easy to make and ensured the final version matched what the engineers needed. This approach saved time and ensured the final design was informative, visually appealing, and suitable for reports, presentations, and online use.",
        images: [Illustration, Markup, ProcreateDrawing],
        ksbs: {
          knowledge: ['K1', 'K2', 'K7', 'K9', 'K10', 'K11', 'K13', 'K14', 'K15', 'K16', 'K17'],
          skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      },
      {
        id: 'uni',
        title: 'Uni Work',
        subtitle: 'Figma Mobile App UI/UX Design',
        color: 'white',
        description: 'The aim of this project was to create an interactive infographic that makes geotechnical engineering easier to understand and more engaging for a wider audience. It was designed to support training, client education, and internal communication. The goal was to develop an interactive experience that explains why geotechnical work is important in engineering. \n\nUsing Figma, I transformed a static illustration into a clickable, animated infographic that allows users to explore geotechnical processes, infrastructure, and techniques. The design also follows Arup’s brand and accessibility guidelines.',
        processDescription: 'The project began by comparing illustration‑based learning with VR to see which approach best suited the team’s skills and available resources. Illustration was chosen because it was more practical, required less time, and matched my level of experience. With the tools available at Arup at the time, it was also quicker and easier to implement an interactive illustration on a website. \n\nUsing Figma, I created an interactive infographic with animations, clickable elements, and scrollable overlays, supported by a clear navigation flow from the homepage through to the tutorial. A mobile‑first design approach was selected because it reflects how people usually access this type of content. Taking this approach also improved accessibility, helping to keep the layout clean and easy to use on smaller screens. I worked closely with Arup’s Graphics team to follow brand guidelines, ensuring the design was clear, consistent, and suitable for non‑technical audiences. \n\nThrough this process, I gained valuable experience with Figma’s animation tools, strengthened my understanding of UX design, and saw how effective interactive learning can be in practice.',
        images: [FigmaPhone, FullimageFigma, ProcessFigma, ProcessFigma2, ProcessFigma3],
        videos: ['https://www.youtube.com/watch?v=ssXQ9v3PYu8&t=1s', 'https://youtube.com/shorts/rOpkeKF1BgQ'],
        ksbs: {
          knowledge: ['K1', 'K2', 'K4', 'K5', 'K6', 'K8', 'K7', 'K10', 'K11', 'K12', 'K13', 'K15', 'K17'],
          skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      }
    ]
  },
  {
    id: '07',
    title: 'Photography',
    category: 'Photography & Editing',
    description: "As part of my ongoing development in photography, I kept improving my skills through workshops and hands‑on practice. A recent commission to photograph a big birthday celebration and a wedding gave me the chance to use my technical knowledge in a real setting, focusing on lighting, composition, and capturing important moments.",
    processDescription: "Each commission came with its own challenges. At the wedding, the focus was on capturing the bridal party as they got ready, while working in a small space and managing indoor lighting. The 80th birthday celebration brought together guests from different places, and the client wanted plenty of photos of people they do not often see, which meant paying close attention to group shots and key moments. \n\nOne of the main issues at the birthday party was the cake‑cutting, which took place outside under a green gazebo because of the poor weather. This created a strong green tint in the photos. The main technical challenge was correcting this colour cast. Using professional editing software such as Photoshop and Lightroom, I restored natural tones and improved the overall appearance of the images. \n\nThe project ended with the design and delivery of a commemorative photo album, giving me valuable experience in managing the whole process from client consultation through to final delivery.",
    images: [AbiWedding1, AbiWedding2, Before, After, photoablumn],
    headerImage: WhatsAppImage,
    ksbs: {
      knowledge: ['K1', 'K2', 'K4', 'K7', 'K10'],
      skills: ['S1', 'S2', 'S3', 'S4', 'S6', 'S8', 'S14', 'S15'],
      behaviours: ['B1', 'B3', 'B5']
    }
  },
  {
    id: '08',
    title: 'Immersive Technology',
    category: 'Digital Futures',
    description: 'This project explored the immersive technologies available and how they could support engineering by improving client engagement and design reviews. I was able to experience a range of advanced tools during my time at Sheffield Hallam, and some of my understanding also came from my workplace environment. \n\nThe aim was to balance cost with benefits and identify the most suitable technology to showcase Arup’s digital work and strengthen communication with clients.',
    processDescription: 'During this project, I explored a range of immersive technologies, starting with high‑end dome systems, which I experienced at Sheffield Hallam in the Igloo before moving on to more practical options like VR, MR, and AR. I compared the costs, ease of use, and benefits of each, and considered how they could be applied to real engineering projects. \n\nDome systems provide an impressive shared experience but require significant investment, ongoing maintenance, and dedicated space, making them impractical for everyday use. VR proved useful for walking through 3D models and spotting design issues early. MR showed strong potential for overlaying digital plans onto real environments to support construction planning, and AR worked well for quick client presentations and helping people understand complex designs more easily.',
    images: [VREquipment, VRDEMO , VRDEMO2],
    videos: ['https://youtu.be/eNRhM7VkT2Q'],
    ksbs: {
      knowledge: ['K1', 'K2', 'K4', 'K5', 'K8','K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K19', 'K20', 'K21'],
      skills: ['S5', 'S6', 'S10', 'S12', 'S13','S17','S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    },
    sections: [
      {
        id: 'uni',
        title: 'Uni Work',
        subtitle: 'Immersive Technology',
        color: 'white',
        isDefault: true,
        description: 'This project explored the immersive technologies available and how they could support engineering by improving client engagement and design reviews. I was able to experience a range of advanced tools during my time at Sheffield Hallam, and some of my understanding also came from my workplace environment. \n\nThe aim was to balance cost with benefits and identify the most suitable technology to showcase Arup’s digital work and strengthen communication with clients.',
        processDescription: 'During this project, I explored a range of immersive technologies, starting with high‑end dome systems, which I experienced at Sheffield Hallam in the Igloo before moving on to more practical options like VR, MR, and AR. I compared the costs, ease of use, and benefits of each, and considered how they could be applied to real engineering projects. \n\nDome systems provide an impressive shared experience but require significant investment, ongoing maintenance, and dedicated space, making them impractical for everyday use. VR proved useful for walking through 3D models and spotting design issues early. MR showed strong potential for overlaying digital plans onto real environments to support construction planning, and AR worked well for quick client presentations and helping people understand complex designs more easily.',
        images: [VREquipment],
        videos: ['https://youtu.be/eNRhM7VkT2Q', 'https://youtu.be/da_e4Pqs_3c', 'https://youtu.be/jlIJDBahILU', 'https://youtu.be/4HY7YJPKpsQ'],
        ksbs: {
          knowledge: ['K1', 'K2', 'K4', 'K5', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K19', 'K20', 'K21'],
          skills: ['S5', 'S6', 'S10', 'S12', 'S13', 'S17', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      },
      {
        id: 'project',
        title: 'Project Work',
        subtitle: 'VR Ground Model Demo',
        color: 'red',
        description: 'As part of this project, I used a VR ground model to help engage new starters and work experience students and introduce them to what a ground model is and the level of complexity involved. The VR model allowed users to explore the geology in three dimensions, helping them understand how different layers interact and why ground models are an important part of engineering projects.\n\n I travelled to Manchester to deliver a VR demonstration for new starters on the apprenticeship programme. The aim of the session was to use VR as an interactive learning tool, giving them an early insight into the type of projects they may work on in the future. VR proved to be a very effective way of making complex ground data easier to understand and more engaging, especially for people who are new to ground engineering.',
        processDescription: 'The VR ground model was set up so users could move around, navigate through the model, and view the geology from different angles. This allowed them to see how the ground changes with depth and across the site, which is often difficult to understand using traditional drawings or sections alone. \n\nDuring the demonstration, the new starters were encouraged to explore the model themselves. They were able to navigate the VR environment, focus on specific areas of the model, and ask questions as they interacted with it. This made the session more engaging and helped create open discussions around ground conditions, uncertainty, and engineering decision‑making. \n\n The VR setup was used as a guided learning experience rather than a formal presentation. By allowing users to explore the model freely, it supported different learning styles and helped build confidence when discussing unfamiliar technical topics.',
        images: [VRDEMO, VRDEMO2,Dprinting4],
        ksbs: {
          knowledge: ['K1', 'K2', 'K4', 'K5', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K19', 'K20', 'K21'],
          skills: ['S5', 'S6', 'S10', 'S12', 'S13', 'S17', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      }
    ]
  },
  {
    id: '11',
    title: 'Video Tutorials',
    category: 'Video & Audio',
    description: 'This project began after I completed a task using the OpenGround extension for Civil 3D, something no one else at Arup had done before. It was a valuable learning experience, as I had to quickly develop my skills and work out the best way to approach it. My mentor suggested creating a tutorial video to share what I had learned so other Arup users could follow the process themselves. I recorded the video and audio, edited the content, and uploaded it to Arup’s media space.',
    processDescription: 'One of the main challenges in this project was ensuring the audio quality of the tutorial video was clear and professional. From my own experience of watching tutorials, I know that poor sound quality makes it harder to follow instructions and often discourages viewers from continuing. Good audio was therefore essential so that users could understand the steps without distraction. \n\nTo achieve this, I tested two different headsets by recording short clips and comparing the sound quality before choosing the one that performed best. I also focused on balancing the audio with the visuals, making sure the narration matched the pace of the demonstration and was easy to follow. \n\nAfter recording, I edited the video using Clipchamp, a free editing tool. I chose Clipchamp instead of Premiere Pro because the project had a small budget and I needed a quick, efficient way to produce the tutorial. With a larger budget, I could have spent more time refining the final edit, but Clipchamp allowed me to create a clear and accessible video effectively.',
    images: [VideoTutorial1, ClipChamp, VideoTutorial2],
    videos: ['https://youtu.be/bSO4XNdvy1M'],
    headerImage: Tutorial_Video_Complete_Guide,
    ksbs: {
      knowledge: ['K1','K2', 'K4', 'K5', 'K6', 'K7','K8', 'K15','K17'],
      skills: ['S1', 'S2', 'S4', 'S5', 'S6','S10','S14', 'S15','S18'],
      behaviours: ['B1', 'B2', 'B3', 'B5']
    }
  },
  {
    id: '12',
    title: '3D Printing',
    category: '3D modelling & printing',
    description: 'This project explored how 3D printing technology, using the Bambu Lab P1S printer and its app, can support engineering work and make processes more efficient. The aim was to follow the printing process from start to finish, explore the app’s features, and understand how 3D printing could be used within Arup’s geotechnics team. By testing a small print model, I was able to observe how the printer handled setup, calibration, and production, while also considering the wider benefits of 3D printing for communication, design reviews, and client engagement.',
    processDescription: 'I explored the Bambu Lab app, which was the user’s preferred choice as it matched the Bambu printer. I found it easy to browse designs created and shared by other users. I also observed the printer as it completed its setup and calibration, including the test line used to check the nozzle, filament feed, and bed levelling before starting a print. I learned that CAD models can be customised, but poor preparation can lead to weak or failed prints. The printer’s built‑in safety checks helped highlight issues such as thin walls or poor adhesion, and provided suggestions on how to fix them. \n\nI then watched the full process of printing a small print‑in‑place fidget toggle switch. Although it was a small print, it was a very good choice because it was quick to produce while still showing all the key steps involved in 3D printing. \n\nFrom this project, I gained a clearer understanding of how modern 3D printers operate and how many calibration features are built in to reduce errors and improve print quality. I saw how important accurate bed levelling and calibration are, and learned that strong, reliable prints depend heavily on good design. I also realised how different infill patterns affect both the strength and appearance of a model. Overall, this project showed me how 3D printing can support everyday tasks and engineering work by creating practical models that improve communication and design reviews.',
    images: [Dprinting1, Dprinting2, Dprinting3, Dprinting4, Dprinting5, Dprinting6],
    videos: ['https://youtube.com/shorts/xwoWwcZufM8','https://youtube.com/shorts/XOYg_JeFOlY'],
    ksbs: {
      knowledge: ['K1', 'K2','K8','K10','K11','K12','K13','K14','K16','K20','K21'],
      skills: ['S1', 'S4', 'S5', 'S6','S10','S14','S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    },
    sections: [
      {
        id: 'uni',
        title: 'Uni Work',
        subtitle: '3D Printing',
        color: 'white',
        isDefault: true,
        description: 'This project explored how 3D printing technology, using the Bambu Lab P1S printer and its app, can support engineering work and make processes more efficient. The aim was to follow the printing process from start to finish, explore the app’s features, and understand how 3D printing could be used within Arup’s geotechnics team. By testing a small print model, I was able to observe how the printer handled setup, calibration, and production, while also considering the wider benefits of 3D printing for communication, design reviews, and client engagement.',
        processDescription: 'I explored the Bambu Lab app, which was the user’s preferred choice as it matched the Bambu printer. I found it easy to browse designs created and shared by other users. I also observed the printer as it completed its setup and calibration, including the test line used to check the nozzle, filament feed, and bed levelling before starting a print. I learned that CAD models can be customised, but poor preparation can lead to weak or failed prints. The printer’s built‑in safety checks helped highlight issues such as thin walls or poor adhesion, and provided suggestions on how to fix them. \n\nI then watched the full process of printing a small print‑in‑place fidget toggle switch. Although it was a small print, it was a very good choice because it was quick to produce while still showing all the key steps involved in 3D printing. \n\nFrom this project, I gained a clearer understanding of how modern 3D printers operate and how many calibration features are built in to reduce errors and improve print quality. I saw how important accurate bed levelling and calibration are, and learned that strong, reliable prints depend heavily on good design. I also realised how different infill patterns affect both the strength and appearance of a model. Overall, this project showed me how 3D printing can support everyday tasks and engineering work by creating practical models that improve communication and design reviews.',
        images: [Dprinting1, Dprinting2, Dprinting3],
        videos: ['https://youtube.com/shorts/xwoWwcZufM8','https://youtube.com/shorts/XOYg_JeFOlY'],
        ksbs: {
          knowledge: ['K1', 'K2', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K20', 'K21'],
          skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      },
      {
        id: 'project',
        title: 'Project Work',
        subtitle: '3D Printed Ground Model',
        color: 'red',
        description: 'As part of this project, I experimented with using a 3D printer to produce a physical ground model based on a 3D geological model. The aim was to explore whether 3D printing could be a useful way to help people better understand ground conditions by turning digital data into a physical object. \n\nThe ground model was prepared so that each geological layer was printed in a different colour. This made it easier to clearly see the different strata and understand how the geology changed with depth. Being able to physically hold the model helped with visualising the relationships between layers and made the geology more accessible to people who may struggle to interpret traditional drawings, sections, or screens.',
        processDescription: 'One of the main benefits was how effective the physical model was for visualisation. Being able to see and physically hold the geology made it much easier to explain complex ground conditions, especially to people without a technical background. Using different colours for each geological layer was particularly useful, as it made the model clear, easy to follow, and more intuitive to understand. \n\n However, there were also clear challenges. Printing the model at full scale is not realistic because the ground model is based on real‑world coordinates and covers a very large area. This meant the model had to be scaled down, and some simplification was required. As a result, certain geological details had to be reduced or removed to make the model suitable for 3D printing. \n\n Another key limitation is that ground models are constantly changing as new ground investigation data becomes available. Because of this, a 3D printed model can quickly become out of date. Unlike digital models, which can be updated easily, a physical model would need to be re‑printed every time the geology changes. This makes 3D printing impractical for live or evolving projects.',
        images: [Dprinting4, Dprinting5, Dprinting6],
        ksbs: {
          knowledge: ['K1', 'K2', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K20', 'K21'],
          skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      }
    ]
  },
  {
    id: '13',
    title: 'Quarry Geotechnics Review',
    category: 'Engineering & Design',
    description: 'This project explored how complex quarry projects are and what is involved in understanding them. this project entry is temporary and is only being used to test the portfolio card layout, text wrapping, and responsiveness across different screen sizes before final content is added.',
    processDescription: 'Placeholder process description: this temporary content represents a draft workflow summary for layout testing. It is intentionally generic and can be replaced later with accurate project steps, methods, tools used, and outcomes once the real project information is ready.',
    images: [QuarryPicture, QuarryImage3 ,QuarryOld, QuarryImage2, QuarryImage3, QuarryRoad4, QuarryCutFill],
    headerImage: QuarryPicture,
    ksbs: {
      knowledge: ['K1', 'K2', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K20', 'K21'],
      skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    },
    sections: [
      {
        id: 'uni',
        title: 'Quarry Topo Data Correction',
        subtitle: 'LiDAR Topographic Gap Filling',
        color: 'white',
        isDefault: true,
        description: 'This task focused on improving the quality and accuracy of the topographic surface for the quarry area. Updated topographic data had been provided because there had been significant changes to the ground levels, and the project required these changes to be accurately captured. \n\n Although a drone survey had been carried out to collect up‑to‑date data, some areas within the quarry were not successfully captured. This was mainly because water was present in parts of the quarry at the time of the survey. LiDAR and drone systems are unable to record reliable ground information through water, which resulted in gaps in the dataset. Additional data gaps were also caused by steep quarry faces and areas where LiDAR returns were missing or unreliable.',
        processDescription: 'Two different approaches were used because the amount and quality of data available was different for each quarry. \n\nFor the upper quarry site, there was enough coverage from an older topographic survey carried out in 2019. Although this data was not fully up to date, it covered the whole area and provided a reliable base surface. This meant the existing data could be used to fill the quarry with confidence, with only small changes needed to match the newer information. \n\nThe second quarry was more challenging. Although updated data had been collected using a drone survey, the coverage was incomplete. Some areas were not captured because there was water present during the survey. Drone and LiDAR systems cannot collect accurate ground data through water, which caused gaps in the data. Further gaps were created by steep quarry faces and areas where the LiDAR results were missing or unreliable. \n\nTo deal with this, I used the ground level data that was available where coverage existed. For areas with missing data, I flattened the surface to create a sensible and consistent ground model. This made sure the surface could still be used for the project, while clearly recognising the limits of the available data. This approach helped balance accuracy with practicality.',
        images: [QuarryImage3, QuarryOld, QuarryPicture, QuarryImage2],
        ksbs: {
          knowledge: ['K1', 'K2', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K20', 'K21'],
          skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      },
      {
        id: 'project',
        title: 'Cut and Fill Analysis',
        subtitle: 'Complex Cut and Fill Assessment',
        color: 'red',
        description: 'This project looks at the site topography to estimate the amount of cut and fill needed to achieve a balanced earthworks design. Ideally, material excavated from cut areas would be reused on site in areas of fill, reducing the need to import or export material and helping to lower costs and environmental impact. \n\nOn this site, balancing cut and fill was more complex due to challenging existing ground conditions. A former quarry lies beneath part of the site, with the current road built over it, resulting in large variations in ground levels. This made it difficult to compare existing and proposed levels and raised questions about how realistically material could be reused. As a result, the assessment required careful consideration and detailed discussion within the project team, with different options reviewed to understand the impact of the ground conditions and road alignment.',
        processDescription: 'To complete the cut and fill analysis, I first reviewed the available topographic and ground level data to understand the existing site conditions. Before carrying out the analysis, I had to design what the proposed new ground levels would look like. I was instructed that the new ground should fall at a 1 in 4 slope from the edge of the road down to the existing ground level. This slope was shallow enough for the land quality team to install trees, helping the project meet its environmental requirements. I also had to model a slope between the main road and a secondary road so that the two could connect smoothly. \n\nOnce the proposed ground levels were designed, I compared the existing ground surface with the proposed design surface by creating volume calculations between the two. These volumes were then used to identify areas of cut and fill and formed the basis of the analysis. \n\nDuring this process, the former quarry and the road built over it became a key challenge. The unusual ground profile meant that standard assumptions about reusing material could not always be applied. This showed the importance of understanding the site’s history and existing ground conditions before relying solely on cut and fill results. \n\nA key learning from this work was that cut and fill analysis is not just a technical task. While software can calculate volumes, professional judgement is needed to interpret the results properly. Ground conditions, previous land use, and construction constraints all affect whether the calculated material volumes can realistically be reused on site.',
        images: [QuarryRoad4, Xcross, QuarryCutFill, QuarryMissingArea],
        ksbs: {
          knowledge: ['K1', 'K2', 'K8', 'K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K20', 'K21'],
          skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
          behaviours: ['B1', 'B2', 'B4', 'B5']
        }
      }
    ]
  },
  {
    id: '14',
    title: 'Business Cases and Stare Reports',
    category: 'Business Case Portfolio',
    description: 'This container project groups three business cases in one place and provides direct access to related Stare Reports stored in Miro. Use the tabs to move between business cases and use the links to open supporting report boards.',
    processDescription: 'This structure has been designed to keep report content clear and easy to navigate. Each business case has its own context specific links, and shared Stare Reports are available across all tabs so common references are always easy to find.',
    images: [],
    headerImage: QuarryPicture,
    links: [
      {
        id: 'business-case-1',
        title: 'Business Case 1',
        description: 'This project focuses on improving how geotechnical data is used by moving from gINT to modern tools like OpenGround and Graphe to produce clearer ground models and graphs.',
        url: 'https://miro.com/app/board/uXjVN8z7lag=/?share_link_id=878274260624'
      },
      {
        id: 'business-case-2',
        title: 'Business Case 2',
        description: 'This project improves digital sketching within the geotechnical team by moving from traditional methods to modern tools like Concepts to create clearer, more engaging technical visuals.',
        url: 'https://miro.com/app/board/uXjVLQamFtA=/?share_link_id=124301491638'
      },
      {
        id: 'business-case-3',
        title: 'Leadership Business Case 3',
        description: 'This project aims to improve how the geotechnics team communicates designs by using immersive technology to make project reviews clearer, more interactive, and easier to understand.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      }
    ],
    stareReportLinks: [
      {
        id: 'stare-report-1',
        title: 'Stare Report 1 - 3D Modelling',
        description: 'This project focuses on creating an accurate 3D ground model for a mining site to support shaft foundation planning and calculate cut and fill volumes for environmental assessments.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-2',
        title: 'Stare Report 2- Appraisal Feedback',
        description: 'This Stare report focuses on improving how design mark‑ups are reviewed on a rail project by addressing gaps in process understanding to reduce missed comments and improve accuracy.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-3',
        title: 'Stare Report 3 - OpenGround and Graphe',
        description: 'This Stare supports a new railway scheme by using OpenGround and Graphe to produce geological sections and graphs that help engineers analyse ground conditions and make informed decisions.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-4',
        title: 'Stare Report 4 - OpenGround Adoption in Geotechnics',
        description: 'This Stare Report focuses on improving how geotechnical information is shared by creating an infographic that encourages the use of OpenGround over gINT within the geotechnical team.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-5',
        title: 'Stare Report 5 - AI Copilot Exploration',
        description: 'This Stare Report focuses on exploring the use of AI Copilot to improve efficiency and content quality by supporting repetitive tasks, research, and insight generation across projects.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-6',
        title: 'Stare Report 6 - Digital Sketching Exploration',
        description: 'This Stare Report focuses on improving how geotechnical ideas are shared by exploring digital sketching tools like Procreate and Concepts to produce clearer, more professional report visuals.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-7',
        title: 'Stare Report 7 - Geotechnical Team Graphic Update',
        description: 'This Stare Report focuses on updating a geotechnical team graphic to better showcase the team’s full range of skills and create a clear, professional visual for wider audiences.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
      {
        id: 'stare-report-8',
        title: 'Stare Report 8 - Automating Engineering Data with Python',
        description: 'This Stare Report focuses on developing advanced Python skills by applying coding to real engineering tasks, improving data processing accuracy, automation, and output generation for the project team.',
        url: 'https://miro.com/app/board/uXjVJ9yUF04=/?share_link_id=726506470931'
      },
    ],
    organisationStructure: {
      title: 'Organisation Structure',
      description: 'Overview of the Organisation Structure and Geotechnical Team Responsibilities',
      image: OrganisationStructureImage,
      alt: 'Overview of the Project Organisation Structure and Geotechnical Team Responsibilities.'
    },
    ksbs: {
      knowledge: ['K1', 'K2', 'K8', 'K10', 'K13', 'K14', 'K16'],
      skills: ['S1', 'S4', 'S5', 'S6', 'S10', 'S14', 'S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
];
