import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import MagneticWrapper from '../ui/MagneticWrapper';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    
    // Dynamic Mouse following glow
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Staggered text reveal variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    const textToReveal = "Morris Muchiri".split("");

    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-dark">

            {/* Dynamic Background Glows */}
            <motion.div 
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] -z-10"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 relative inline-block"
                    >
                        <div className="w-24 h-24 rounded-full border-4 border-accent/20 overflow-hidden mx-auto shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            <img src={`${import.meta.env.BASE_URL}legacy/profile.jpeg`} alt="Morris Muchiri" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
                        <span>Hi, I'm</span>
                        <span className="flex text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-600">
                            {textToReveal.map((char, index) => (
                                <motion.span 
                                    key={index} 
                                    variants={itemVariants}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>
                    
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for work
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 h-12">
                        Building smart solutions for{' '}
                        <TypeAnimation
                            sequence={[
                                'Agriculture.',
                                2000,
                                'the Future.',
                                2000,
                                'Mobile.',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-white border-b-2 border-accent pb-1"
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                        Software Developer specializing in <strong className="text-accent">AgriTech</strong> and Mobile Apps.
                        Merging code with nature to create impactful digital ecosystems.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <MagneticWrapper>
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-accent text-dark rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-transform hover:scale-105"
                            >
                                Contact Me
                            </a>
                        </MagneticWrapper>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-6 justify-center mt-12">
                        <MagneticWrapper>
                            <a href="https://github.com/muchirimorris" className="text-gray-500 hover:text-white transition-colors block"><Github size={24} /></a>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors block"><Linkedin size={24} /></a>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <a href="mailto:muchirimorris007@gmail.com" className="text-gray-500 hover:text-white transition-colors block"><Mail size={24} /></a>
                        </MagneticWrapper>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Parallax Elements (Optional enhancement) */}
            <motion.div style={{ y: y1 }} className="absolute left-[10%] top-[20%] text-white/5">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50"/>
                </svg>
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute right-[15%] bottom-[30%] text-white/5">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80"/>
                </svg>
            </motion.div>
        </section >
    );
};

export default Hero;
