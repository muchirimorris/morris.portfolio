import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import MagneticWrapper from '../ui/MagneticWrapper';

export const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    
    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-500 hover:shadow-2xl hover:shadow-primary-900/20 perspective-1000 flex flex-col h-full"
        >
            {/* Image / Graphic Area */}
            <div className="h-64 bg-dark relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-accent border border-white/10">
                    {project.type}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 -mt-12 bg-surface" style={{ transform: "translateZ(50px)" }}>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                <motion.div 
                    className="flex flex-wrap gap-2 mb-8"
                    initial="hidden"
                    whileHover="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                    {project.stack.map(tech => (
                        <motion.span 
                            key={tech} 
                            variants={{
                                hidden: { opacity: 0.8, y: 0 },
                                visible: { opacity: 1, y: -2 }
                            }}
                            className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="flex items-center gap-4">
                    <MagneticWrapper className="flex-1">
                        <a href={project.github} className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition-all">
                            <Github size={18} /> Code
                        </a>
                    </MagneticWrapper>
                    <MagneticWrapper className="flex-1">
                        <a href={project.demo} className="w-full px-4 py-3 bg-accent hover:bg-accent/90 text-dark rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20">
                            <ExternalLink size={18} /> Live Demo
                        </a>
                    </MagneticWrapper>
                </div>
            </div>
        </motion.div>
    );
};

export const projectsData = [
        {
            title: 'Podago',
            type: 'Mobile App',
            description: 'A comprehensive Milk Collection & Farmer Support System. Streamlines milk collection, tracks records in real-time, and provides data visualization for daily/monthly records.',
            image: "https://images.unsplash.com/photo-1527153857401-418e275d27b8?q=80&w=1000&auto=format&fit=crop",
            stack: ['Flutter', 'Firebase', 'Supabase', 'Dart'],
            github: '#',
            demo: 'https://adminportalpodago.netlify.app/'
        },
        {
            title: 'MkulimaSmart',
            type: 'AI Platform',
            description: 'AI-Powered Farmer Support platform. Uses Machine Learning to predict crop yields and diagnose plant diseases from images.',
            image: "https://images.unsplash.com/photo-1625246333195-58f21a41a4f7?q=80&w=1000&auto=format&fit=crop",
            stack: ['React Native', 'TensorFlow', 'Python', 'API'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Chak Property Platform',
            type: 'Contributor (Web & Mobile)',
            description: 'A property management platform for listing and managing real estate properties. Contributed to both the Flutter mobile app and web platform, improving UI and functionality.',
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
            stack: ['React', 'Tailwind CSS', 'Flutter'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Dairy-Farmer-Toolkit',
            type: 'Mobile App (Private)',
            description: 'A smart dairy toolkit for farmers. Provides essential utilities and data management for dairy operations.',
            image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop",
            stack: ['Dart', 'Flutter'],
            github: '#',
            demo: '#'
        },
        {
            title: 'E-Commerce Platform',
            type: 'Public (TypeScript)',
            description: 'A modern e-commerce solution built for performance and scalability. Features a shopping cart, product filtering, and secure checkout integration.',
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
            stack: ['TypeScript', 'React', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Networking & IT Infrastructure',
            type: 'Network Engineer | IT Infrastructure',
            description: 'Designed, installed, and maintained Wi-Fi networks, configured routers/switches, and performed fiber optic splicing for reliable connectivity.',
            image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1000&auto=format&fit=crop",
            stack: ['Cisco', 'TP-Link', 'Fiber Optic Tools', 'Wireshark'],
            github: '#',
            demo: '#'
        }
    ];

const Projects = () => {

    return (
        <section id="projects" className="py-8 px-6 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-accent">Projects</span></h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
