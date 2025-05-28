import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import App from './App.tsx';
import SearchPage from './components/SearchPage.jsx';
import { Layout } from './components/Layout.jsx'
import AnimalDetailed from './components/animal/animalDetailed.jsx';
import { Provider } from 'react-redux';
import store from './Store.js';
import SettingsPage from './components/Settings.jsx';
import { ThemeProvider } from './context/themes.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
    

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<App />} />

              <Route path="search" element={<SearchPage />}>
                <Route path=":id" element={<AnimalDetailed />} />
              </Route>

              <Route path="settings" element={<SettingsPage />} />
              
            </Route>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


// <React.StrictMode>
//     <ThemeProvider>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/">
//             <Route index element={<App />} />
//             <Route path="product" element={<ProductPage />} >
//               <Route path=":id" element={<Product />} />
//             </Route>
//             <Route path="settings" element={<SettingsPage />} ></Route>
//           </Route>
//           {/* cetch all */}
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>
