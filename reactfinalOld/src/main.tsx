import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(


  <React.StrictMode>
    <App />
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
