import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Github, ArrowUpRight, Zap, Briefcase } from 'lucide-react';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group ${className}`}
    >
        {children}
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section id="bento" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 flex items-center gap-4"
            >
                <div className="h-px bg-white/10 flex-1"></div>
                <span className="text-sm font-medium text-accent">Discover More</span>
                <div className="h-px bg-white/10 flex-1"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* About Card - Large */}
                <BentoCard className="md:col-span-2 row-span-1 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-accent/20">
                                <img src={`${import.meta.env.BASE_URL}legacy/profile.jpeg`} alt="Morris Muchiri" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-accent text-dark p-1 rounded-full border-2 border-surface">
                                <User size={12} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">About Me</h3>
                            <p className="text-gray-400 text-sm mt-1">Software Developer & AgriTech Innovator</p>
                        </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        I specialize in building mobile applications and integrating Machine Learning models to empower farmers.
                        A BBIT graduate from Dedan Kimathi University with a passion for scalable, real-world solutions.
                    </p>
                </BentoCard>

                {/* GitHub Stats - Small */}
                <BentoCard className="col-span-1 flex flex-col items-center justify-center text-center relative overflow-hidden" delay={0.1}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent"></div>
                    <Github size={40} className="text-white mb-4 relative z-10" />
                    <h3 className="text-3xl font-bold text-white relative z-10">45+</h3>
                    <p className="text-gray-400 text-sm relative z-10">Repositories</p>
                    <a href="https://github.com/muchirimorris" target="_blank" className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                        <ArrowUpRight size={16} />
                    </a>
                </BentoCard>

                {/* Skills - Tall */}
                <BentoCard className="md:row-span-3 col-span-1" delay={0.2}>
                    <div className="flex items-center gap-3 mb-6">
                        <Code size={20} className="text-accent" />
                        <h3 className="font-bold text-white">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['JavaScript', 'Dart', 'Python', 'React Native', 'Flutter', 'Next.js', 'Firebase', 'Supabase', 'ML'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Recent Projects</h4>
                        <div className="space-y-3">
                            <a href="https://adminportalpodago.netlify.app/" target="_blank" className="block p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/proj">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-white text-sm group-hover/proj:text-accent transition-colors">Podago</span>
                                    <ArrowUpRight size={14} className="text-gray-500 group-hover/proj:text-white" />
                                </div>
                                <p className="text-xs text-gray-400">Milk Collection System</p>
                            </a>
                            <a href="#projects" className="block p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/proj">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-white text-sm group-hover/proj:text-accent transition-colors">MkulimaSmart</span>
                                    <ArrowUpRight size={14} className="text-gray-500 group-hover/proj:text-white" />
                                </div>
                                <p className="text-xs text-gray-400">AI Farmer Support</p>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Focus Areas</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center gap-2"><Zap size={14} className="text-accent" /> Mobile Development</li>
                            <li className="flex items-center gap-2"><Zap size={14} className="text-accent" /> Agri-Tech Solutions</li>
                            <li className="flex items-center gap-2"><Zap size={14} className="text-accent" /> Machine Learning</li>
                        </ul>
                    </div>
                </BentoCard>

                {/* Experience Preview - Medium */}
                <BentoCard className="md:col-span-2 flex flex-col justify-between" delay={0.3}>
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase size={20} className="text-accent" />
                        <h3 className="font-bold text-white">Experience Highlights</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-xs text-accent">2023 - Present</span>
                            <h4 className="font-bold text-white mt-1">Freelance Developer</h4>
                            <p className="text-xs text-gray-400">AgriTech & SME Systems</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-xs text-accent">Graduated</span>
                            <h4 className="font-bold text-white mt-1">Dedan Kimathi Univ.</h4>
                            <p className="text-xs text-gray-400">Bachelor of Business IT</p>
                        </div>
                    </div>
                </BentoCard>

                {/* CTA - Small */}
                <BentoCard className="md:col-span-2 bg-gradient-to-r from-primary-900 to-primary-800 border-none flex items-center justify-between" delay={0.4}>
                    <div>
                        <h3 className="text-xl font-bold text-white">Have a project in mind?</h3>
                        <p className="text-primary-200 text-sm">Let's build something great together.</p>
                    </div>
                    <a href="#contact" className="px-6 py-3 bg-white text-primary-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                        Contact Me
                    </a>
                </BentoCard>

            </div>
        </section>
    );
};

export default BentoGrid;
