// index.jsx — App entry point

// React runtime + DOM renderer
import React from 'react';
import ReactDOM from 'react-dom/client';

// Root app component
import App from './App';

// Global tokens and styles
import './index.css';

// Mount React into <div id="root"></div> from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
