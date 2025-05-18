import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import useCachedFetch from '../hooks/useCachedFetch';
import { useTheme } from '../context/ThemeContext';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import CircleLoader from '../components/CircleLoader';
import DotLoader from '../components/DotLoader';
import { useFavorites } from '../context/FavoritesContext';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

/* -------------------------------------------------------------------------- */
/*                                  Home Page                                 */
/* -------------------------------------------------------------------------- */
export default function HomePage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { favorites, toggleFavorite } = useFavorites();
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading } = useCachedFetch(
    debouncedQuery ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${debouncedQuery}&page=${page}` : null
  );

  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

/* --------------------------------- Render --------------------------------- */
  return (
    <div className={`homepage min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-300 ${theme}`}>
      <header className="py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Welcome in{' '}
          <span className="text-blue-600 dark:text-yellow-400">
            Movie Explorer
          </span>
        </h1>
        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
          <ThemeToggle />
        </div>
        <Link
          to="/favorites"
          className="inline-block mt-4 text-sm text-blue-600 dark:text-yellow-400 hover:underline"
        >
          To favorites
        </Link>
      </header>

      <main>
        {isLoading && (
          <div className='h-[950px] flex justify-center items-center'>
            <CircleLoader />
          </div>
        )}

        {!isLoading && (
          <div className="flex justify-center">
            <div className="w-full max-w-[1400px] h-[950px] px-4 perspective-[1000px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data?.Search?.map((movie, index) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    index={index}
                    isFavorite={favorites.some((f) => f.imdbID === movie.imdbID)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className='flex justify-center items-center'>
            <DotLoader />
          </div>
        )}

        {data?.totalResults && (
          <Pagination
            currentPage={page}
            totalResults={parseInt(data.totalResults)}
            onPageChange={setPage}
          />
        )}
      </main>
    </div>
  );
}
