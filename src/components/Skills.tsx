
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import KSBTooltipBadge from './KSBTooltipBadge';
import { KSB_DEFINITIONS } from '../ksbDefinitions';

const getCodesByPrefix = (prefix: 'K' | 'S' | 'B'): string[] => {
  return Object.keys(KSB_DEFINITIONS)
    .filter((code) => code.startsWith(prefix))
    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
};

const knowledgeCodes = getCodesByPrefix('K');
const skillCodes = getCodesByPrefix('S');
const behaviourCodes = getCodesByPrefix('B');

const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: 'easeOut', delay },
  });

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div className="text-center" {...reveal(0)}>
          <span className="inline-flex items-center rounded-full bg-arup-red/10 text-arup-red px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
            Development
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-arup-medium-gray uppercase tracking-wider">Skills Framework</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Throughout my university projects, I have developed and demonstrated a range of competencies that align with the Creative Digital Design professional apprenticeship standard. These are grouped into Knowledge (K), Skills (S), and Behaviours (B).
          </p>
        </motion.div>

        <motion.div className="mt-8 text-center" {...reveal(0.08)}>
          <motion.a 
                href="https://skillsengland.education.gov.uk/apprenticeships/st0625-v1-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-arup-red text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-red-700 transition-colors duration-300"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            >
                View Official KSB Standard
          </motion.a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <motion.div className="p-6 sm:p-8 bg-white/90 backdrop-blur rounded-2xl border border-white shadow-lg text-left" {...reveal(0.16)} whileHover={{ y: -4 }} transition={{ ...reveal(0.16).transition, y: { duration: 0.24 } }}>
              <h3 className="text-xl font-bold mb-4 text-arup-dark-gray">How to read the KSBs in my portfolio</h3>
              <p className="text-gray-700 leading-relaxed">
                  Each project in my portfolio is linked to specific KSB codes, which match directly with the criteria in the official standard. Click any code to open the full official definition.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <KSBTooltipBadge code="K1" compact />
                <KSBTooltipBadge code="S5" compact />
                <KSBTooltipBadge code="B2" compact />
                <KSBTooltipBadge code="K3" compact />
              </div>
          </motion.div>
          <motion.div className="p-6 sm:p-8 rounded-2xl border border-arup-red/20 bg-gradient-to-br from-arup-red/5 via-white to-white shadow-lg text-left" {...reveal(0.22)} whileHover={{ y: -4 }} transition={{ ...reveal(0.22).transition, y: { duration: 0.24 } }}>
            <h3 className="text-xl font-bold mb-4 text-arup-dark-gray">Why this framework matters</h3>
            <p className="text-gray-700 leading-relaxed">
              The framework creates a transparent bridge between creative output and professional capability. It makes it easy to see where each piece of work demonstrates technical depth, collaboration, and practical impact.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="font-mono bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">Knowledge</span>
              <span className="font-mono bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">Skills</span>
              <span className="font-mono bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm">Behaviours</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-white bg-white/95 p-6 sm:p-8 shadow-lg"
          {...reveal(0.28)}
        >
          <h3 className="text-2xl font-bold text-arup-dark-gray">Official ST0625 KSB Glossary</h3>
          <p className="mt-2 text-gray-600">
            Click any code for the matching standard definition.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-bold text-arup-medium-gray mb-3">Knowledge</h4>
              <div className="flex flex-wrap gap-2">
                {knowledgeCodes.map((code) => (
                  <KSBTooltipBadge key={code} code={code} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-arup-medium-gray mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skillCodes.map((code) => (
                  <KSBTooltipBadge key={code} code={code} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-arup-medium-gray mb-3">Behaviours</h4>
              <div className="flex flex-wrap gap-2">
                {behaviourCodes.map((code) => (
                  <KSBTooltipBadge key={code} code={code} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
