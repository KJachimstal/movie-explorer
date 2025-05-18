import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

/* -------------------------------------------------------------------------- */
/*                             Favorites Provider                             */
/* -------------------------------------------------------------------------- */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'favorites') {
        const updated = e.newValue ? JSON.parse(e.newValue) : [];
        setFavorites(updated);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const updated = prev.find((fav) => fav.imdbID === movie.imdbID)
        ? prev.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prev, movie];

      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

/* --------------------------------- Render --------------------------------- */
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
