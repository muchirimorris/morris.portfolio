import React, { useLayoutEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

const App = () => {
    // Scroll to top on refresh
    useLayoutEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="bg-dark min-h-screen text-gray-200 selection:bg-accent selection:text-dark">
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <BentoGrid />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
