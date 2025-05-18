import { motion } from 'motion/react';

/* -------------------------------------------------------------------------- */
/*                                Circle Loader                               */
/* -------------------------------------------------------------------------- */
export default function CircleLoader() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"
    />
  )
}
