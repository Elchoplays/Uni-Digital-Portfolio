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



export const projects: Project[] = [
  {
    id: '01',
    title: 'Openground Infographic',
    category: 'Infographic Design',
    description: "This infographic was designed for Arup's internal GeoWiki to clearly explain the features of the new OpenGround software and its extension tools. The objective was to create a simple, user-friendly layout that enables team members to quickly understand the functionality of each connector and encourage the adoption of OpenGround in project workflows.",
    processDescription: "The design process strictly adhered to Arup's brand guidelines to ensure the final infographic met corporate standards for quality, accessibility, and visual consistency. Key considerations included web accessibility compliance, such as appropriate fonts and colour contrasts, to ensure clarity for a diverse audience. An iterative design process, incorporating user testing and feedback, was fundamental to refining the layout. This user-centred approach ensured the final design was not only visually engaging but also highly functional, with feedback directly influencing practical design choices, such as using coloured logos for better recognition.",
    images: [LaptopImage, OpengroundFinal, HandDrawing],
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
    description: "This project involved developing a 3D ground model from real-world drilling data by digitising borehole geology. The resulting model provided critical information for foundation design. A key component of the project was a cut-and-fill analysis to evaluate the potential for reusing site geology, optimising material usage. The project presented technical challenges related to software limitations, task complexity, and performance optimisation.",
    processDescription: "To address the technical demands of this project and expand my proficiency in Leapfrog, I undertook a structured learning approach. This included studying technical documentation, completing a formal training course, and collaborating closely with project engineers to ensure a thorough understanding of all requirements. This proactive approach resulted in the successful delivery of the 3D model and accurate cut-and-fill calculations. These calculations were instrumental in assessing the feasibility of reusing on-site soil, aligning with sustainable construction practices by minimising landfill waste and the need for imported materials. The analysis also provided valuable data for the sustainability team's carbon impact assessment. This project significantly enhanced my 3D modelling skills and reinforced the importance of continuous learning and adaptation in digital design.",
    images: [ipadmockup3dMODEL, 'https://picsum.photos/seed/proj2b/800/600'],
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
    description: "This project looks at how sketches have traditionally been produced at Arup, where the quality has often been poor and led to weak communication. It focuses on finding better ways to improve sketching methods within the Geotechnical team.",
    processDescription: `This research project explored which sketching software would be the best fit for Arup. I assessed applications based on ease of use, workflow compatibility, and the quality of results. Testing involved observing how users interacted with the software, how the features worked, and how well each tool integrated with others. The three main programmes I tested were Concepts, Procreate, and Sketchbook. I looked at how each performed on iPads, which are often used at Arup for site visits and office work, as well as on desktops, where most sketching still takes place. I gathered feedback from users with different levels of experience to understand their challenges, while ensuring feedback was handled fairly and ethically.

The conclusion was that Concepts was the best solution for Arup, mainly because it is designed with engineering in mind, allowing drawings to be made to scale. It also offers both tablet and desktop versions, meeting many of the team’s requirements. As an extension to this project, I developed an asset library of scaled objects that Arup users could add to their sketches, helping speed up the process and produce more professional, standardised drawings.`,
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
    description: "This project shows how I’ve been learning to use AI Copilot to make everyday tasks faster and more efficient. It handles repetitive jobs, so people can spend more time on creative thinking and important decisions. I’ve used it to quickly check data, support decision-making, and help write things like PowerPoint slides and work emails. It’s helped save time, improve productivity, and keep projects on track. I’ve also realised it’s important to think carefully about the ethical issues that come with using AI in project work.",
    processDescription: "The use of AI Copilot in my work has shown both its big advantages and the ethical issues that come with it. While it makes tasks more efficient, it also raises concerns about data privacy, copyright, and bias. This is especially important because we sign many agreements about confidentiality with projects, and misuse could cause problems. Through this process, I learnt about Arup’s agreement with Copilot and why the company holds a Copilot licence. This ensures that any data entered into the system is not used to train the AI, which protects our confidentiality commitments. I also found out that while other chatbot services can be used, all confidential information must be removed before entering data. In some cases, Arup has blocked access to certain sites to stop staff from accidentally sharing sensitive information. This experience has highlighted the professional duty to stay aware of the ethical issues around AI, to question its results, and to promote its responsible use in line with industry standards.",
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
    processDescription: "A key part of this project was learning how to check and improve AI‑generated code. I found that copying and pasting code directly from the AI often caused errors that needed fixing. Instead of being frustrated, I used this as a chance to understand why the code was wrong and how to correct it. Over time, I started spotting mistakes even before running the script, as the guidance was not always completely accurate. This process of reviewing and refining was very useful in building my coding skills. It showed me that, when used carefully and with a critical approach, AI can be a powerful tool for speeding up learning in technical subjects. I also learnt that different programming languages are better suited to different tasks. For example, R is especially good for data analysis and visualising information.",
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
    description: "For this task, I was asked to update a Geotechnical Engineering graphic to show the team’s offshore expertise, which was missing from the original design. I used Procreate to sketch quick ideas and Illustrator to create a polished, brand‑compliant version. The project helped explain what geotechnical engineering actually involves, as many people even within the engineering department,  find it difficult to understand. This graphic also strengthened our professional image.",
    processDescription: "I learned the importance of being flexible and using feedback to make sure the final design met stakeholder needs. The process involved gathering comments, adjusting the design based on suggestions. I enjoyed using Procreate to produce quick sketches, as it allowed me to show different ideas and move through the review process faster. For example, I first sketched an offshore oil rig, but the engineer asked for a wind turbine instead. Because it was only a rough sketch, the change was easy to make and ensured the final version was correct. This approach saved time and made sure the final design was informative, visually appealing, and suitable for reports, presentations, and online use.",
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
    processDescription: "Each commission came with its own challenges. At the wedding, the focus was on capturing the bridal party as they got ready. The 80th birthday celebration brought together guests from different places, and the client wanted lots of photos of people they don’t often see, which meant paying close attention to group shots and key moments. One of the main problems at the birthday party was the cake cutting, which took place outside under a green gazebo because of the weather. This gave the photos a strong green tint. The main technical challenge was fixing this colour cast caused by the lighting. \n\nUsing professional editing software, I corrected the colours to bring back natural tones and improve the overall look of the images. The project finished with the design and delivery of a commemorative photo album, giving me valuable experience in managing the whole process from client consultation to final delivery.",
    images: ['https://picsum.photos/seed/proj7a/800/600', Before, After],
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
    description: 'This project explored how immersive technology could support engineering by improving client engagement and design reviews. It compared costly immersive dome setups with more practical options such as Virtual Reality (VR), Mixed Reality (MR) and Augmented Reality (AR). Domes provide impressive experiences but are expensive and difficult to justify for a single project, while VR, MR and AR are cheaper, portable and flexible, making them easier to use across offices and sites. The aim was to balance cost with benefits and find the most suitable technology to showcase Arup’s digital work and strengthen communication with clients.',
    processDescription: 'During the project I explored different immersive technologies, starting with high‑end dome systems, which I experienced at Sheffield Hallam in the Igloo, before moving on to more practical options like VR, MR and AR. I looked at the costs, ease of use and benefits of each, and how they could be applied to real engineering projects. Dome systems provide an impressive shared experience but require a lot of money, ongoing maintenance and dedicated space, which makes them unsuitable for everyday use. VR proved useful for walking through 3D models and spotting design issues early, MR showed strong potential for overlaying digital plans onto real spaces to support construction planning, and AR worked well for quick client presentations and making complex designs easier to understand. \n\nThrough this work I gained a clearer understanding of how immersive technology can improve teamwork, reduce errors and strengthen client engagement. I also learned the importance of balancing innovation with cost, making sure technology choices are practical as well as impressive. Overall, the project showed me that VR, MR and AR can provide flexible and affordable solutions that add real value to engineering projects without the large investment needed for dome systems. ',
    images: [VREquipment, 'https://picsum.photos/seed/proj8b/800/600'],
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
    description: 'The aim of this project was to make geotechnical engineering easier to understand and more engaging for a wider audience. It was designed to support training, client education, and internal communication. The goal was to create an interactive experience that shows why geotechnical work matters in engineering. Using Figma, I turned a static illustration into a clickable, animated infographic that helps users explore geotechnical processes, infrastructure, and techniques. The design also follows Arup’s brand and accessibility guidelines.',
    processDescription: 'The project started by comparing illustration-based learning with VR to see which worked best for the team’s skills and resources. Illustration was chosen because it was more practical and less demanding in terms of time and my expertise level. Using Figma, I created an interactive infographic with animations, clickable elements, and scrollable overlays, supported by a clear navigation flow from the homepage to the tutorial. A mobile‑first approach was used to match user behaviour and improve accessibility, with a clean layout that made the design easier to use on smaller screens. I worked with Arup’s Graphics team to follow brand guidelines, keeping the design clear and consistent for non‑technical audiences. Through this process, I gained valuable experience with Figma’s animation tools, strengthened my knowledge of UX design, and saw how interactive learning can be effective in practice.',
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
    description: 'The SESRO project gave me the chance to use my Python skills in a real engineering setting, moving on from training exercises to practical problem-solving. My main tasks were to improve a Bill of Quantities script so it worked properly with the current dataset, and to create a new Python script that could automatically generate Legend codes for the OpenGround database. These jobs were important for making workflows smoother, organising data better, and supporting the wider geotechnical engineering team. The project also helped me build confidence in coding, learn more advanced techniques, and see how AI tools like Copilot could support my learning and development.',
    processDescription: 'In this project I started by reviewing the SESRO requirements and exploring the OpenGround database to understand how the data was set up. I then planned the logic for a new Legend Code script and worked on improving the Bill of Quantities script so it would run properly with the dataset. The main issue with the Bill of Quantities was that it had been built for one project and was not designed to handle multiple projects, so I had to adjust and fix it to make it work. The challenge with the Legend Code script was that it needed to read geology descriptions and match them to the most suitable legend codes, which was difficult because the descriptions were often slightly different. \n\nTo solve these problems I tested, rewrote and refined the code, explored new Python libraries to make my scripts cleaner, and used Copilot to troubleshoot and learn new approaches. I also made sure my documentation was clear so that others could reuse my work. Through this process I became more confident using Python in real engineering tasks, learned the importance of breaking problems into steps, saw how AI tools can support learning, and understood the value of good communication and feedback. Overall, the project gave me a stronger base in coding, problem‑solving and teamwork, and prepared me to take on bigger technical challenges in the future.',
    images: [PythonScript, PythonScript2, PythonScript3],
    headerImage: PythonCoding,
    ksbs: {
      knowledge: ['K1', 'K9', 'K11', 'K12', 'K15' , 'K18'],
      skills: ['S2', 'S3', 'S5', 'S6', 'S7', 'S12', 'S15', 'S16', 'S18'],
      behaviours: ['B1', 'B2', 'B3']
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
