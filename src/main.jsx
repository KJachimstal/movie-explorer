import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';
import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <FavoritesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FavoritesProvider>
  </ThemeProvider>
);
