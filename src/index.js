import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// AGREGADO:
import 'bootstrap/dist/css/bootstrap.min.css';
/* instalar bootstrap:
npm install react-bootstrap bootstrap
*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

