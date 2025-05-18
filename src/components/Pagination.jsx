/* -------------------------------------------------------------------------- */
/*                                 Pagination                                 */
/* -------------------------------------------------------------------------- */
export default function Pagination({ currentPage, totalResults, onPageChange }) {
  const totalPages = Math.ceil(totalResults / 10);
  const visiblePages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
      visiblePages.push(i);
    } else if (
      (i === currentPage - 3 && currentPage > 4) ||
      (i === currentPage + 3 && currentPage < totalPages - 3)
    ) {
      visiblePages.push('...');
    }
  }

  /* --------------------------------- Render --------------------------------- */
  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      {visiblePages.map((page, idx) =>
        page === '...' ? (
          <span key={idx} className="px-3 py-2 text-gray-400">...</span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded border ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 text-black dark:text-white'
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
