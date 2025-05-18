import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

/* -------------------------------------------------------------------------- */
/*                               Not Found Page                               */
/* -------------------------------------------------------------------------- */
export default function NotFoundPage() {
  const { theme } = useTheme();

  /* --------------------------------- Render --------------------------------- */
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-6 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 ${theme}`}>
      <h1 className="text-6xl font-bold text-blue-600 dark:text-yellow-400 mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Strona, której szukasz, nie istnieje.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white dark:bg-yellow-500 dark:text-zinc-900 font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-700 dark:hover:bg-yellow-600"
      >
        ← Wróć do strony głównej
      </Link>
    </div>
  );
}
