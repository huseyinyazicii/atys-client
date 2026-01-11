import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { setupAxiosInterceptors } from './services/base/axios.instance.ts';


import './styles/index.css';

setupAxiosInterceptors();

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
