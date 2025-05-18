import MovieCard from '../components/MovieCard';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ThemeToggle from '../components/ThemeToggle';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

/* -------------------------------------------------------------------------- */
/*                               Favorites Page                               */
/* -------------------------------------------------------------------------- */
export default function FavoritesPage() {
  const { theme } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();
  const [search, setSearch] = useState('');

  /* --------------------------------- Render --------------------------------- */
  return (
    <div className={`min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-300 ${theme}`}>
      <header className="py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          My liblary
        </h1>
        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search you liblary..." />
          <ThemeToggle />
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 rounded-lg bg-blue-600 text-white dark:bg-yellow-500 dark:text-zinc-900 font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-700 dark:hover:bg-yellow-600"
        >
          ← Go back
        </Link>
      </header>

      <main className="flex justify-center">
        <div className="w-full max-w-[1400px] px-4">
          {favorites.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-10">
              Library is empty
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {favorites.filter((movie) =>
                movie.Title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie, i) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  isFavorite={true}
                  toggleFavorite={toggleFavorite}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
