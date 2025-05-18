import { useState } from 'react';
import { motion } from 'motion/react';

/* -------------------------------------------------------------------------- */
/*                                 Movie Card                                 */
/* -------------------------------------------------------------------------- */
export default function MovieCard({ movie, isFavorite, toggleFavorite, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  /* --------------------------------- Render --------------------------------- */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow hover:scale-105 transition-transform duration-200 overflow-hidden flex flex-col"
    >
      <div className="h-[350px] bg-gray-200 dark:bg-zinc-700">
        {!imgError ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
            onError={() => {
              setImgError(true)
            }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center px-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
            {movie.Title}
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col justify-between flex-grow text-center">
        <div>
          <h2 className="text-sm font-medium text-gray-900 dark:text-white break-words leading-tight mb-1">
            {movie.Title}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">{movie.Year}</p>
        </div>
        <button
          onClick={() => toggleFavorite(movie)}
          className={`mt-3 px-3 py-1 rounded text-xs font-medium text-white ${
            isFavorite
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isFavorite ? 'Favorites' : 'Add to favorites'}
        </button>
      </div>
    </motion.div>
  );
}
