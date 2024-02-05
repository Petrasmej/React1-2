import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from '../src/App';

createRoot(document.querySelector('#app')).render(<App />);
