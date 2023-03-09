import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Primefaces */
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme    
import "primereact/resources/primereact.min.css"; //core
import "primeicons/primeicons.css"; //icons
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
