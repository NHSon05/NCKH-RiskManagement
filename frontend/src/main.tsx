import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

// browser history api, navigation between pages
// const router = createBrowserRouter([
//   {path:"/Home", element: <App/>},

// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
