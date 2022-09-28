import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontContextProvider } from './context/context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontContextProvider>
      <App />
    </FontContextProvider>
  </React.StrictMode>
);
