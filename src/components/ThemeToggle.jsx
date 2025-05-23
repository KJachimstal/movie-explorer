import { useTheme } from '../context/ThemeContext';

/* -------------------------------------------------------------------------- */
/*                                Theme Toggle                                */
/* -------------------------------------------------------------------------- */
export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  /* --------------------------------- Render --------------------------------- */
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300
        dark:bg-yellow-400 bg-gray-400"
    >
      <span
        className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
          dark:translate-x-6 translate-x-1"
      />
    </button>
  );
}
