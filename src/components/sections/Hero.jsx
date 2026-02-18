import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-dark">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="mb-6 relative inline-block"
                    >
                        <div className="w-24 h-24 rounded-full border-4 border-accent/20 overflow-hidden mx-auto">
                            <img src={`${import.meta.env.BASE_URL}legacy/profile.jpeg`} alt="Morris Muchiri" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-600">Morris Muchiri</span>
                    </h1>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for work
                    </div>



                    <div className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 h-12">
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
                    </div>

                    <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                        Software Developer specializing in <strong className="text-accent">AgriTech</strong> and Mobile Apps.
                        Merging code with nature to create impactful digital ecosystems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-dark rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center mt-12">
                        <a href="https://github.com/muchirimorris" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:muchirimorris007@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
