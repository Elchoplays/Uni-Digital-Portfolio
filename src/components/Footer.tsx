
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-[#202124] text-gray-400 py-8">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm max-w-6xl"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: 'easeOut' }}
      >
        <motion.p initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.36, ease: 'easeOut' }}>&copy; {new Date().getFullYear()} El Seaton. All Rights Reserved.</motion.p>
        <motion.p className="mt-2" initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.36, delay: 0.08, ease: 'easeOut' }}>Portfolio created for Creative Digital Design - Sheffield Hallam University.</motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
