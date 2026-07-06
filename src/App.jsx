import React, { useLayoutEffect, useEffect } from 'react';
import Lenis from 'lenis';
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
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    // Initialize Lenis for Smooth Scrolling
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
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
