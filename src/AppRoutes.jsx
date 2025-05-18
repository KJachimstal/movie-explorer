import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransitionWrapper from './components/PageTransitionWrapper';

/* -------------------------------------------------------------------------- */
/*                                 App Routes                                 */
/* -------------------------------------------------------------------------- */
export default function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageTransitionWrapper><HomePage /></PageTransitionWrapper>} />
      <Route path="/favorites" element={<PageTransitionWrapper><FavoritesPage /></PageTransitionWrapper>} />
      <Route path="*" element={<PageTransitionWrapper><NotFoundPage /></PageTransitionWrapper>} />
    </Routes>
  );
}
