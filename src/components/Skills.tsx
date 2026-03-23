
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
          <h2 className="mt-4 text-4xl lg:text-5xl font-black uppercase tracking-wider text-arup-medium-gray dark:text-slate-100">Skills Framework</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-slate-300">
          Throughout my university projects, I have developed and demonstrated a range of competencies that align with the Creative Digital Design professional apprenticeship standard. These are grouped into Knowledge (K), Skills (S), and Behaviours (B).
          </p>
        </motion.div>

        <div className="mt-12">
          <motion.div className="rounded-2xl border border-white bg-white/90 p-6 text-left shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/30 sm:p-8" {...reveal(0.16)} whileHover={{ y: -4 }} transition={{ ...reveal(0.16).transition, y: { duration: 0.24 } }}>
              <h3 className="mb-4 border-b-2 border-arup-red pb-2 text-xl font-bold text-arup-dark-gray dark:text-white">How to read the KSBs</h3>
              <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                  Each project in my portfolio is linked to specific KSB codes, which match directly with the criteria set out in the official standard. For example, a tag like
                  <span className="mx-1 inline-flex align-middle"><KSBTooltipBadge code="K1" compact /></span>
                  refers to the first Knowledge requirement, while
                  <span className="mx-1 inline-flex align-middle"><KSBTooltipBadge code="S5" compact /></span>
                  refers to the fifth Skill, and
                  <span className="mx-1 inline-flex align-middle"><KSBTooltipBadge code="B2" compact /></span>
                  refers to the second Behaviour. This system provides a clear and transparent way to see how my work meets the academic and professional requirements of my course.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-mono text-blue-800 dark:bg-blue-950/70 dark:text-blue-200">Knowledge</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-mono text-green-800 dark:bg-emerald-950/70 dark:text-emerald-200">Skills</span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-mono text-yellow-800 dark:bg-amber-950/70 dark:text-amber-200">Behaviours</span>
              </div>
              <div className="mt-6">
                <a
                  href="https://skillsengland.education.gov.uk/apprenticeships/st0625-v1-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-arup-red px-4 py-2.5 text-sm font-bold text-white shadow-md transition-colors duration-300 hover:bg-red-700"
                >
                  View KSB Standards
                </a>
              </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-white bg-white/95 p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30 sm:p-8"
          {...reveal(0.28)}
        >
          <h3 className="mb-4 border-b-2 border-arup-red pb-2 text-2xl font-bold text-arup-dark-gray dark:text-white">KSB Glossary</h3>
          <p className="text-gray-600 dark:text-slate-300">
            Click any code for the matching standard definition.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="mb-3 font-bold text-arup-medium-gray dark:text-slate-200">Knowledge</h4>
              <div className="flex flex-wrap gap-2">
                {knowledgeCodes.map((code) => (
                  <KSBTooltipBadge key={code} code={code} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-arup-medium-gray dark:text-slate-200">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skillCodes.map((code) => (
                  <KSBTooltipBadge key={code} code={code} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-arup-medium-gray dark:text-slate-200">Behaviours</h4>
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
