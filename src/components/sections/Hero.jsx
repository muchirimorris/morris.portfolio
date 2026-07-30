import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Youtube, Github } from 'lucide-react';
import profilePic from '../../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start"
                >
                    <h2 className="text-3xl md:text-4xl text-white font-medium mb-2">Hello!! I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 tracking-tight">
                        Morris Muchiri
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10">
                        Full Stack Developer, Flutter Engineer
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-6 mb-12">
                        <a href="#contact" className="px-8 py-3 bg-accent text-dark font-bold rounded hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                            Hire Me
                        </a>
                        <a href="#about" className="px-8 py-3 border border-transparent text-white hover:text-accent font-medium transition-colors">
                            Know More
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                        <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="https://github.com/muchirimorris" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Youtube size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Image and Blob */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center lg:ml-auto"
                >
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex justify-center items-center w-[400px] h-[400px]"
                    >
                        {/* Orange Blob */}
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-10 fill-accent opacity-90">
                            <path d="M48.7,-74.6C60.7,-64.5,66.4,-46.6,73,-30.2C79.6,-13.8,87.1,1.1,84.7,14.6C82.3,28.1,70,40.3,57.1,49.8C44.2,59.3,30.7,66.1,16.2,71.7C1.7,77.3,-13.8,81.7,-27.6,77.5C-41.4,73.3,-53.5,60.5,-63.3,46.8C-73.1,33.1,-80.6,18.5,-82.1,3.4C-83.6,-11.7,-79,-27.3,-69.5,-39.8C-60,-52.3,-45.6,-61.7,-31.6,-70.2C-17.6,-78.7,-4,-86.3,7.6,-83.4C19.2,-80.5,36.7,-84.7,48.7,-74.6Z" transform="translate(100 100) scale(1.1)" />
                        </svg>

                        {/* Circular Text - Fixed Structure */}
                        <div className="absolute inset-0 z-0">
                            <div className="w-full h-full animate-[spin_20s_linear_infinite]">
                                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                    <path id="circlePath" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
                                    <text className="text-[6.5px] tracking-[0.2em] uppercase fill-white font-medium" >
                                        <textPath href="#circlePath" startOffset="0%">
                                            Available for Freelance Work • Let's build something • 
                                        </textPath>
                                    </text>
                                    <text className="text-[6.5px] tracking-[0.2em] uppercase fill-white font-medium" >
                                        <textPath href="#circlePath" startOffset="50%">
                                            Available for Freelance Work • Let's build something • 
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-[300px] h-[300px] overflow-hidden z-10 rounded-full border-2 border-accent/20 bg-dark">
                            <img 
                                src={profilePic}
                                alt="Morris Muchiri" 
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Mouse Icon */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
