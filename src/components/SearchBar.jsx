/* -------------------------------------------------------------------------- */
/*                                 Search Bar                                 */
/* -------------------------------------------------------------------------- */
export default function SearchBar({ value, onChange, placeholder = 'Search movies...' }) {

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        px-4 py-2 rounded border w-full max-w-xs dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400
        dark:border-zinc-700 bg-white text-gray-900 placeholder-gray-500 border-gray-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  );
}
