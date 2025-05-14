import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// here are my pages
import ProductPage from './components/ProductPage';
import Product from './components/Product';
import NavBar from '../src/components/NavBar';
import Error from '../src/components/Error';
import SettingsPage from '../src/components/Settings';
import '../src/css/navStyle.css';
import { ThemeProvider } from './context/Themes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="product" element={<ProductPage />} >
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="settings" element={<SettingsPage />} ></Route>
          </Route>
          {/* cetch all */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);