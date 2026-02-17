import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Podago Ecosystem",
        category: "System Architecture",
        year: "2025",
        description: "Comprehensive digital ecosystem for dairy farming.",
        image: "/legacy/Dashboard.jpg"
    },
    {
        id: 2,
        title: "MkulimaSmart",
        category: "AI Integration",
        year: "2024",
        description: "AI-powered agricultural insights and forecasting.",
        image: "/legacy/d2.jpeg"
    },
    {
        id: 3,
        title: "SkillLink",
        category: "Social Platform",
        year: "2023",
        description: "Professional networking platform for skilled trades.",
        image: "/legacy/d3.jpeg"
    },
    {
        id: 4,
        title: "Investor Portal",
        category: "FinTech",
        year: "2023",
        description: "Investment management and tracking dashboard.",
        image: "/legacy/ux ui.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">Selected Works</h2>
                <p className="text-secondary text-sm max-w-md">
                    A collection of digital products and systems crafted with precision and care.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start"
                    >
                        {/* Image (Clean, simple aspect ratio) */}
                        <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-lg bg-surface relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"; }}
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-2">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-medium text-secondary uppercase tracking-wide">{project.company || "Personal"}</span>
                                <span className="w-1 h-1 rounded-full bg-secondary/30"></span>
                                <span className="text-xs font-medium text-secondary uppercase tracking-wide">{project.year}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-secondary leading-relaxed mb-6 max-w-md">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                                View Case Study <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
