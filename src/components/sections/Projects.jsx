import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Code } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-900/20"
    >
        {/* Image / Graphic Area */}
        <div className="h-64 bg-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-accent border border-white/10">
                {project.type}
            </div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-20 -mt-12">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/5">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a href={project.github} className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition-all">
                    <Github size={18} /> Code
                </a>
                <a href={project.demo} className="flex-1 px-4 py-3 bg-accent hover:bg-accent/90 text-dark rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20">
                    <ExternalLink size={18} /> Live Demo
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: 'Podago',
            type: 'Mobile App',
            description: 'A comprehensive Milk Collection & Farmer Support System. Streamlines milk collection, tracks records in real-time, and provides data visualization for daily/monthly records.',
            image: "https://images.unsplash.com/photo-1527153857401-418e275d27b8?q=80&w=1000&auto=format&fit=crop", // Dairy Farm
            stack: ['Flutter', 'Firebase', 'Supabase', 'Dart'],
            github: '#',
            demo: 'https://adminportalpodago.netlify.app/'
        },
        {
            title: 'MkulimaSmart',
            type: 'AI Platform',
            description: 'AI-Powered Farmer Support platform. Uses Machine Learning to predict crop yields and diagnose plant diseases from images.',
            image: "https://images.unsplash.com/photo-1625246333195-58f21a41a4f7?q=80&w=1000&auto=format&fit=crop", // Smart Farming
            stack: ['React Native', 'TensorFlow', 'Python', 'API'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Chak Property Platform',
            type: 'Contributor (Web & Mobile)',
            description: 'A property management platform for listing and managing real estate properties. Contributed to both the Flutter mobile app and web platform, improving UI and functionality.',
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop", // Real Estate
            stack: ['React', 'Tailwind CSS', 'Flutter'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Dairy-Farmer-Toolkit',
            type: 'Mobile App (Private)',
            description: 'A smart dairy toolkit for farmers. Provides essential utilities and data management for dairy operations.',
            image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop", // Dairy Cows
            stack: ['Dart', 'Flutter'],
            github: '#',
            demo: '#'
        },
        {
            title: 'E-Commerce Platform',
            type: 'Public (TypeScript)',
            description: 'A modern e-commerce solution built for performance and scalability. Features a shopping cart, product filtering, and secure checkout integration.',
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop", // E-commerce
            stack: ['TypeScript', 'React', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Networking & IT Infrastructure',
            type: 'Network Engineer | IT Infrastructure',
            description: 'Designed, installed, and maintained Wi-Fi networks, configured routers/switches, and performed fiber optic splicing for reliable connectivity.',
            image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1000&auto=format&fit=crop", // Server/Network
            stack: ['Cisco', 'TP-Link', 'Fiber Optic Tools', 'Wireshark'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-accent">Projects</span></h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
