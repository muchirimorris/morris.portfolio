import React from 'react';
import ReactClasses from 'react-dom/client';
import App from './App';
import './styles/index.css';

import { ThemeProvider } from './context/ThemeContext';

ReactClasses.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
