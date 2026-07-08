import React, { useLayoutEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import { BentoGridPart1, BentoGridPart2 } from './components/sections/BentoGrid';
import { skillCategories, SkillCategoryCard } from './components/sections/Skills';
import { projectsData, ProjectCard } from './components/sections/Projects';
import { experiencesData, TimelineItem } from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import BookWrapper from './components/layout/BookWrapper';
import Page from './components/layout/Page';
import { motion } from 'framer-motion';
import { Briefcase, Terminal } from 'lucide-react';

const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const App = () => {
    useLayoutEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    const projectChunks = chunkArray(projectsData, 1); // 1 project per page to fit perfectly
    const experienceChunks = chunkArray(experiencesData, 2); // 2 experiences per page
    const skillChunks = chunkArray(skillCategories, 2); // 2 skill categories per page

    const BENTO_PAGES = 2;
    const SKILLS_START = BENTO_PAGES + 1;
    const PROJECT_START = SKILLS_START + skillChunks.length;
    const EXP_START = PROJECT_START + projectChunks.length;

    return (
        <div className="bg-dark min-h-screen text-gray-200 selection:bg-accent selection:text-dark">
            <CustomCursor />
            <div className="z-50 relative">
                <Navbar />
            </div>
            
            <main className="w-full">
                <BookWrapper>
                    {/* Front Cover */}
                    <Page isCover={true}>
                        <Hero />
                    </Page>
                    
                    {/* Page 1: BentoGrid Part 1 */}
                    <Page pageNumber={1}>
                        <BentoGridPart1 />
                    </Page>

                    {/* Page 2: BentoGrid Part 2 */}
                    <Page pageNumber={2}>
                        <BentoGridPart2 />
                    </Page>
                    
                    {/* Paginated Skills */}
                    {skillChunks.map((chunk, chunkIndex) => (
                        <Page key={`skills-${chunkIndex}`} pageNumber={SKILLS_START + chunkIndex}>
                            <section className="py-8 px-6 max-w-7xl mx-auto h-full flex flex-col justify-center">
                                {chunkIndex === 0 && (
                                    <div className="mb-8 text-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                                            <Terminal size={14} /> My Stack
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Technical <span className="text-accent">Proficiency</span></h2>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                                    {chunk.map((category, i) => (
                                        <SkillCategoryCard key={i} category={category} index={chunkIndex * 2 + i} />
                                    ))}
                                </div>
                            </section>
                        </Page>
                    ))}
                    
                    {/* Paginated Projects */}
                    {projectChunks.map((chunk, chunkIndex) => (
                        <Page key={`projects-${chunkIndex}`} pageNumber={PROJECT_START + chunkIndex}>
                            <section className="py-12 px-6 max-w-7xl mx-auto h-full flex flex-col">
                                {chunkIndex === 0 && (
                                    <div className="mb-8">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-accent">Projects</span></h2>
                                        <div className="h-1 w-20 bg-accent rounded-full"></div>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-6 perspective-1000 flex-1">
                                    {chunk.map((project, i) => (
                                        <ProjectCard key={i} project={project} index={chunkIndex * 1 + i} />
                                    ))}
                                </div>
                            </section>
                        </Page>
                    ))}
                    
                    {/* Paginated Experience */}
                    {experienceChunks.map((chunk, chunkIndex) => (
                        <Page key={`exp-${chunkIndex}`} pageNumber={EXP_START + chunkIndex}>
                            <section className="py-12 px-6 max-w-4xl mx-auto">
                                {chunkIndex === 0 && (
                                    <div className="mb-12 text-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                                            <Briefcase size={14} /> My Journey
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & <span className="text-accent">Education</span></h2>
                                    </div>
                                )}
                                <div className="space-y-0">
                                    {chunk.map((exp, i) => (
                                        <TimelineItem key={i} data={exp} index={chunkIndex * 2 + i} />
                                    ))}
                                </div>
                            </section>
                        </Page>
                    ))}
                    
                    {/* Back Cover */}
                    <Page isCover={true}>
                        <div className="flex flex-col h-full justify-between pt-10">
                            <Contact />
                            <div className="pb-10">
                                <Footer />
                            </div>
                        </div>
                    </Page>
                </BookWrapper>
            </main>
        </div>
    );
};

export default App;
