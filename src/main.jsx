import React from 'react';
import ReactClasses from 'react-dom/client';
import App from './App';
import './styles/index.css';

import { ThemeProvider } from './context/ThemeContext';

import ErrorBoundary from './ErrorBoundary';

console.log("Starting app initialization...");

try {
    const rootElement = document.getElementById('root');
    console.log("Root element found:", rootElement);

    if (rootElement) {
        ReactClasses.createRoot(rootElement).render(
            <React.StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </React.StrictMode>,
        );
        console.log("App rendered successfully");
    } else {
        console.error("Root element not found!");
    }
} catch (error) {
    console.error("Error during app initialization:", error);
}
