import { motion } from 'motion/react';

/* -------------------------------------------------------------------------- */
/*                           Page Transition Wrapper                          */
/* -------------------------------------------------------------------------- */
export default function PageTransitionWrapper({ children }) {

  /* --------------------------------- Render --------------------------------- */
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen dark:bg-zinc-900 dark:text-white bg-white text-gray-800 bg-zinc-900"
    >
      {children}
    </motion.div>
  );
}
