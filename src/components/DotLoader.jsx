import { motion } from 'motion/react';

/* -------------------------------------------------------------------------- */
/*                                 Dot Loader                                 */
/* -------------------------------------------------------------------------- */
export default function DotLoader() {
  return (
    <div className="flex justify-center items-center gap-3 py-8">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-4 w-4 rounded-full bg-gray-500 dark:bg-gray-300"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
