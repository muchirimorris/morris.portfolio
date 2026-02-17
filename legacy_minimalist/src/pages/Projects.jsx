import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleCard from '../components/ui/SimpleCard'; // Card component

// Specific project list provided by user with mapped images
const projectsData = [
    // Core System
    {
        id: 1,
        title: "Podago Mobile App",
        category: "Core System",
        image: "/legacy/Dashboard.jpg",
        description: "A comprehensive mobile application for dairy farmers, facilitating milk collection, farmer authentication, and production logging.",
        tags: ["Flutter", "Firebase", "Supabase"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 2,
        title: "Podago Admin Portal",
        category: "Core System",
        image: "/legacy/Dashboard.jpg",
        description: "Web-based administrative portal for managing the Podago system, users, and viewing analytics.",
        tags: ["React", "Node.js", "PostgreSQL"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 3,
        title: "Podago Backend",
        category: "Core System",
        image: "/legacy/ux ui.png",
        description: "Robust backend infrastructure supporting the Podago ecosystem.",
        tags: ["Node.js", "Express", "Supabase"],
        links: { demo: "#", code: "#" }
    },

    // Mobile Applications
    {
        id: 4,
        title: "MkulimaSmart",
        category: "Mobile",
        image: "/legacy/d2.jpeg",
        description: "An AI-powered toolkit for dairy farmers featuring production tracking and forecasting.",
        tags: ["React Native", "ML"],
        links: { demo: "#", code: "#" }
    },

    // Web Applications
    {
        id: 5,
        title: "SkillLink",
        category: "Web",
        image: "/legacy/d3.jpeg",
        description: "A platform connecting professionals and showcasing skills (Social Media style).",
        tags: ["React", "Firebase"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 6,
        title: "Investor System",
        category: "Web",
        image: "/legacy/ux ui.png",
        description: "Platform for managing investments and connecting investors with opportunities.",
        tags: ["React", "MongoDB"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 7,
        title: "ISP Provider System",
        category: "Web",
        image: "/legacy/Dashboard.jpg",
        description: "Management system for Internet Service Providers to handle billing and clients.",
        tags: ["PHP", "Laravel"],
        links: { demo: "#", code: "#" }
    },

    // Business Systems
    {
        id: 8,
        title: "E-commerce Platform",
        category: "Business",
        image: "/legacy/d2.jpeg",
        description: "Full-featured e-commerce solution with cart, checkout, and payment integration.",
        tags: ["React", "Stripe"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 9,
        title: "Inventory Management",
        category: "Business",
        image: "/legacy/d3.jpeg",
        description: "System for tracking stock levels, orders, sales and deliveries.",
        tags: ["React", "Firebase"],
        links: { demo: "#", code: "#" }
    },

    // AI / Data
    {
        id: 10,
        title: "AI Project",
        category: "AI",
        image: "/legacy/ux ui.png",
        description: "Artificial Intelligence project focusing on data analysis and predictive modeling.",
        tags: ["Python", "TensorFlow"],
        links: { demo: "#", code: "#" }
    },

    // Portfolio
    {
        id: 11,
        title: "Morris Portfolio",
        category: "Portfolio",
        image: "/legacy/Dashboard.jpg",
        description: "Modern, responsive portfolio website built with React and Vite.",
        tags: ["React", "Vite"],
        links: { demo: "#", code: "#" }
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const categories = ['All', 'Core System', 'Mobile', 'Web', 'Business', 'AI', 'Portfolio'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
        >
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Selected Works</h2>
                <div className="h-1 w-20 bg-primary mb-8" />

                {/* Minimal Text Filter Buttons */}
                <div className="flex flex-wrap gap-6 border-b border-border pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-sm font-medium transition-colors ${filter === cat
                                ? 'text-primary'
                                : 'text-muted hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <SimpleCard className="h-full flex flex-col group border-0 shadow-none hover:shadow-none bg-transparent">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"; }}
                                    />
                                </div>

                                <div className="flex flex-col h-full">
                                    <span className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">{project.title}</h3>

                                    <p className="text-muted text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-muted bg-surface px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SimpleCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Projects;
