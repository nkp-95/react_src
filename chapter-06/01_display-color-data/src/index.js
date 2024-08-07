import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

/*
//예전 문법
  const rootElement = document.getElementById("root");
  ReactDOM .render (
    <React.StrictMode>
    <App />
    </React.StrictMode>
    rootElement
    )
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
