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
import VideoTutorial1 from './assets/VideoTutorial1.jpg';
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



export const projects: Project[] = [
  {
    id: '01',
    title: 'Openground Infographic',
    category: 'Infographic Design',
    description: "This infographic was designed for Arup's internal GeoWiki to clearly explain the features of the new OpenGround software and its extension tools. The objective was to create a simple, user-friendly layout that enables team members to quickly understand the functionality of each connector and encourage the adoption of OpenGround in project workflows.",
    processDescription: "The design followed Arup’s brand guidelines throughout, ensuring the final infographic met the required standards for quality, accessibility, and visual consistency. Key considerations included compliance with web accessibility guidance, such as choosing readable fonts and ensuring strong colour contrast to make the content clear for all users. \n\nAn iterative, user centred approach was used, with testing and feedback helping to refine the layout at each stage. This ensured the final design was both visually appealing and practical, with user feedback directly shaping decisions such as using coloured logos to improve recognition; although black logos looked visually cleaner, people found the coloured versions easier to identify.",
    images: [LaptopImage, OpengroundFinal, HandDrawing, Openground_BlackLogo],
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
    title: 'Data Economics with R',
    category: 'Data Analysis & Coding',
    description: "This university project was about learning to use R Studio for data analysis and visualisation. As I was new to the language, I was encouraged to use generative AI to help me understand difficult functions and syntax, and to build my knowledge of R. One of the main things I learnt was how to write clear prompts to get accurate and useful guidance from the AI, which made the learning process much quicker.",
    processDescription: "A key part of this project was learning how to review and improve AI‑generated code. I found that copying code directly from the AI often led to errors that needed fixing. Rather than getting frustrated, I used this as an opportunity to understand why the code was wrong and how to correct it. Over time, I started spotting issues before running the script, as the guidance was not always fully accurate. \n\nThis process of checking and refining code was very useful in building my programming skills. It showed that, when used carefully and with a critical approach, AI can be a powerful tool for accelerating learning in technical subjects. I also learned that different programming languages suit different tasks, for example, R is particularly strong for data analysis and visualisation.",
    images: [RStudioScreenshot, RStudioScreenshot2],
    headerImage: RLogo,
    ksbs: {
      knowledge: ['K7', 'K13', 'K17', 'K18', ],
      skills: ['S5', 'S6', 'S10', 'S11', 'S18'],
      behaviours: ['B1', 'B2', 'B5']
    }
  },
  {
    id: '06',
    title: 'Geotechnics Illustration',
    category: 'Technical Illustration',
    description: "For this task, I was asked to update a Geotechnical Engineering graphic to include the team’s offshore expertise, which was missing from the original design. I used Procreate to sketch initial ideas and Illustrator to create a polished, brand compliant version. The project also helped explain what geotechnical engineering involves, as many people, even within the engineering department find it difficult to understand. The updated graphic strengthened our professional image and provided a clearer overview of the team’s capabilities.",
    processDescription: "I learned the importance of being flexible and using feedback to make sure the final design met stakeholder needs. The process involved gathering comments and adjusting the design based on their suggestions. I enjoyed using Procreate for quick sketches, as it allowed me to show different ideas and move through the review process more quickly. \n\nFor example, I first sketched an offshore oil rig, but the engineer asked for a wind turbine instead. Because it was only a rough sketch, the change was easy to make and ensured the final version matched what the engineers needed. This approach saved time and ensured the final design was informative, visually appealing, and suitable for reports, presentations, and online use.",
    images: [Illustration, Markup, ProcreateDrawing],
    ksbs: {
      knowledge: ['K1', 'K2', 'K7', 'K9', 'K10', 'K11', 'K13', 'K14', 'K15', 'K16', 'K17'],
      skills: ['S1','S2', 'S3', 'S4','S5', 'S6', 'S7', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
  {
    id: '07',
    title: 'Photography',
    category: 'Photography & Editing',
    description: "As part of my ongoing development in photography, I keep improving my skills through workshops and hands‑on practice. A recent commission to photograph a big birthday celebration and a wedding gave me the chance to use my technical knowledge in a real setting, focusing on lighting, composition, and capturing important moments.",
    processDescription: "Each commission came with its own challenges. At the wedding, the focus was on capturing the bridal party as they got ready, while working in a small space and managing indoor lighting. The 80th birthday celebration brought together guests from different places, and the client wanted plenty of photos of people they do not often see, which meant paying close attention to group shots and key moments. \n\nOne of the main issues at the birthday party was the cake‑cutting, which took place outside under a green gazebo because of the poor weather. This created a strong green tint in the photos. The main technical challenge was correcting this colour cast. Using professional editing software such as Photoshop and Lightroom, I restored natural tones and improved the overall appearance of the images. \n\nThe project ended with the design and delivery of a commemorative photo album, giving me valuable experience in managing the whole process from client consultation through to final delivery.",
    images: [AbiWedding1, AbiWedding2, Before, After],
    headerImage: WhatsAppImage,
    ksbs: {
      knowledge: ['K1', 'K2', 'K4', 'K7', 'K10'],
      skills: ['S1', 'S2', 'S3', 'S4', 'S6', 'S8', 'S14', 'S15'],
      behaviours: ['B1', 'B3', 'B5']
    }
  },
  {
    id: '08',
    title: 'Immersive technology',
    category: 'Digital Futures',
    description: 'This project explored the immersive technologies available and how they could support engineering by improving client engagement and design reviews. I was able to experience a range of advanced tools during my time at Sheffield Hallam, and some of my understanding also came from my workplace environment. \n\nThe aim was to balance cost with benefits and identify the most suitable technology to showcase Arup’s digital work and strengthen communication with clients.',
    processDescription: 'During this project, I explored a range of immersive technologies, starting with high‑end dome systems, which I experienced at Sheffield Hallam in the Igloo before moving on to more practical options like VR, MR, and AR. I compared the costs, ease of use, and benefits of each, and considered how they could be applied to real engineering projects. \n\nDome systems provide an impressive shared experience but require significant investment, ongoing maintenance, and dedicated space, making them impractical for everyday use. VR proved useful for walking through 3D models and spotting design issues early. MR showed strong potential for overlaying digital plans onto real environments to support construction planning, and AR worked well for quick client presentations and helping people understand complex designs more easily. \n\nThrough this work, I gained a clearer understanding of how immersive technology can improve teamwork, reduce errors, and strengthen client engagement. I also learned the importance of balancing innovation with cost, ensuring that technology choices are practical as well as impactful. Overall, the project showed that VR, MR, and AR offer flexible and affordable solutions that add real value to engineering projects without the large investment required for dome systems.',
    images: [VREquipment, VRDEMO , VRDEMO2],
    videos: ['https://youtu.be/eNRhM7VkT2Q'],
    ksbs: {
      knowledge: ['K1', 'K2', 'K4', 'K5', 'K8','K10', 'K11', 'K12', 'K13', 'K14', 'K16', 'K19', 'K20', 'K21'],
      skills: ['S5', 'S6', 'S10', 'S12', 'S13','S17','S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
  {
    id: '09',
    title: 'Figma Mobile App UI/UX Design',
    category: 'UI/UX Design',
    description: 'The aim of this project was to create an interactive infographic that makes geotechnical engineering easier to understand and more engaging for a wider audience. It was designed to support training, client education, and internal communication. The goal was to develop an interactive experience that explains why geotechnical work is important in engineering. \n\nUsing Figma, I transformed a static illustration into a clickable, animated infographic that allows users to explore geotechnical processes, infrastructure, and techniques. The design also follows Arup’s brand and accessibility guidelines.',
    processDescription: 'The project began by comparing illustration‑based learning with VR to see which approach best suited the team’s skills and available resources. Illustration was chosen because it was more practical, required less time, and matched my level of experience. With the tools available at Arup at the time, it was also quicker and easier to implement an interactive illustration on a website. \n\nUsing Figma, I created an interactive infographic with animations, clickable elements, and scrollable overlays, supported by a clear navigation flow from the homepage through to the tutorial. A mobile‑first design approach was selected because it reflects how people usually access this type of content. Taking this approach also improved accessibility, helping to keep the layout clean and easy to use on smaller screens. I worked closely with Arup’s Graphics team to follow brand guidelines, ensuring the design was clear, consistent, and suitable for non‑technical audiences. \n\nThrough this process, I gained valuable experience with Figma’s animation tools, strengthened my understanding of UX design, and saw how effective interactive learning can be in practice.',
    images: [FigmaPhone, FullimageFigma],
    videos: ['https://www.youtube.com/watch?v=ssXQ9v3PYu8&t=1s','https://youtube.com/shorts/rOpkeKF1BgQ'],
    ksbs: {
      knowledge: ['K1','K2', 'K4', 'K5', 'K6', 'K8', 'K7', 'K10', 'K11', 'K12', 'K13', 'K15' ,'K17'],
      skills: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7','S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
  {
    id: '10',
    title: 'Python',
    category: 'Coding',
    description: 'The Reservoir project gave me the opportunity to use my Python skills in a real engineering context, moving from training exercises to practical problem‑solving. My main tasks were to improve a Bill of Quantities calculation script so that it worked reliably with the current dataset, and to create a new Python script that automatically generated legend codes based on the data available in the OpenGround database. \n\nThe project helped build my confidence in coding, introduced me to more advanced techniques, and showed how AI tools like Copilot can support learning and development.',
    processDescription: 'In this project I started by reviewing the SESRO requirements and exploring the OpenGround database to understand how the data was set up. I then planned the logic for a new Legend Code script and worked on improving the Bill of Quantities script so it would run properly with the dataset. The main issue with the Bill of Quantities was that it had been built for one project and was not designed to handle multiple projects, so I had to adjust and fix it to make it work. The challenge with the Legend Code script was that it needed to read geology descriptions and match them to the most suitable legend codes, which was difficult because the descriptions were often slightly different. \n\nTo solve these problems I tested, rewrote and refined the code, explored new Python libraries to make my scripts cleaner, and used Copilot to troubleshoot and learn new approaches. I also made sure my documentation was clear so that others could reuse my work. Through this process I became more confident using Python in real engineering tasks, learned the importance of breaking problems into steps, saw how AI tools can support learning, and understood the value of good communication and feedback. Overall, the project gave me a stronger base in coding, problem‑solving and teamwork, and prepared me to take on bigger technical challenges in the future.',
    images: [PythonScript, PythonScript2, PythonScript3],
    headerImage: PythonCoding,
    ksbs: {
      knowledge: ['K6', 'K7', 'K8', 'K9', 'K13', 'K14', 'K17', 'K18'],
      skills: ['S5', 'S6', 'S10', 'S12', 'S13', 'S14', 'S15', 'S16', 'S18'],
      behaviours: ['B2', 'B3', 'B5']
    }
  },
  {
    id: '11',
    title: 'Video Tutorials',
    category: 'Video & Audio',
    description: 'This project began after I finished a task using the OpenGround extension for Civil 3D, something no one else at Arup had done before. It was a great learning experience, as I had to quickly build up my skills and work out the best way to get it done. My mentor suggested I make a tutorial video to share what I’d learned, so other Arup users could follow the process themselves. I recorded the video and audio, edited everything, and uploaded it to Arup’s media space.',
    processDescription: 'One of the main challenges I faced during this project was making sure the audio quality of the tutorial video was clear and professional. From my own experience of watching tutorials, I know that sound quality is very important, poor audio makes it harder to take in the information and often makes me stop watching. Good sound was therefore essential so that viewers could follow the instructions without distraction or confusion. To achieve this, I tested two different headsets by recording short videos and comparing the audio quality, before choosing the one that gave the best results. I also worked on balancing the audio with the visuals, making sure the narration matched the pace of the demonstration and was easy to understand. \n\nOnce the recording was complete, I edited the video using Clipchamp, a free editing tool. I chose this software instead of Premiere Pro because the budget for the task was small and I needed a quick way to produce the video. With a larger budget, I could have put more time and effort into refining the final edit, but Clipchamp allowed me to create a clear and accessible tutorial efficiently.',
    images: [VideoTutorial1, VideoTutorial2],
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
    description: 'This project looked at how 3D printing technology, using the Bambu Lab P1S printer and its app, can support engineering work and make processes more efficient. The aim was to follow the printing process from start to finish, explore the app’s features, and see how 3D printing could be used within Arup’s geotechnics team. By testing a small print model, I was able to observe how the printer managed setup, calibration and production, while also considering the wider benefits of 3D printing for communication, design reviews and client engagement.',
    processDescription: 'I explored the Bambu Lab app and found it straightforward to browse designs shared by other users. I observed the printer setup and calibration, where a test line was used to check the nozzle, filament feed and bed levelling before the main print. I noted that CAD models can be customised, but poor preparation may lead to weak or failed prints. The printer’s safety features helped identify issues such as thin walls or poor adhesion and suggested ways to fix them. I watched the full process of printing a small fidget toggle switch using a print‑in‑place design, and learned about infill patterns, repeated prints, and how sharing designs through the app can save time. \n\nFrom this project I gained a better understanding of how modern 3D printers use smart features and simple apps to reduce errors and improve results. I saw how important bed levelling and calibration are, and learned that design quality is vital for strong prints. I also realised how infill patterns affect both strength and appearance. Overall, the project showed me how 3D printing can make everyday tasks easier and support engineering work by creating practical models that improve communication and design reviews.',
    images: [Dprinting1, Dprinting2, Dprinting3, Dprinting4, Dprinting5, Dprinting6],
    videos: ['https://youtube.com/shorts/xwoWwcZufM8','https://youtube.com/shorts/XOYg_JeFOlY'],
    ksbs: {
      knowledge: ['K1', 'K2','K8','K10','K11','K12','K13','K14','K16','K20','K21'],
      skills: ['S1', 'S4', 'S5', 'S6','S10','S14','S18'],
      behaviours: ['B1', 'B2', 'B4', 'B5']
    }
  },
];
