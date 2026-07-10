import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

const App = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
            let current = 'hero';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is at or above the middle of the viewport
                    if (rect.top <= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-dark min-h-screen text-gray-200 selection:bg-accent selection:text-dark">
            <CustomCursor />
            
            <Sidebar activeSection={activeSection} />
            
            {/* Main Content Area (offset by sidebar width on desktop) */}
            <main className="w-full md:pl-[80px]">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

export default App;
