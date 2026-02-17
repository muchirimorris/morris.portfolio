import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-text font-sans">
        <Background />
        <ScrollToTop />
        <Navbar />
        <main className="pt-24 relative z-10 pb-20">
          <AnimatedRoutes />
        </main>

        <footer className="py-8 text-center text-muted border-t border-border mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-sm">© {new Date().getFullYear()} Morris Muchiri. Designed with simplicity.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
