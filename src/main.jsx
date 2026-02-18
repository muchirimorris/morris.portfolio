import React from 'react';
import ReactClasses from 'react-dom/client';
import App from './App';
import './styles/index.css';

import { ThemeProvider } from './context/ThemeContext';

import ErrorBoundary from './ErrorBoundary';

ReactClasses.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </React.StrictMode>,
);
