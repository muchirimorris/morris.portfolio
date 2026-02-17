import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-[80vh] flex flex-col justify-center px-6 max-w-5xl mx-auto"
        >
            <div className="space-y-8">

                {/* Minimalist Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
                        Portfolio 2026
                    </span>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
                        Morris Muchiri.
                    </h1>

                    <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed font-light">
                        Software Developer & Designer based in Kenya. <br className="hidden md:block" />
                        Crafting digital products with precision and purpose.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <Button href="/projects" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
                        View Work
                    </Button>
                    <Button variant="outline" href="/contact" className="border-border hover:bg-surface rounded-full px-8">
                        Contact Me
                    </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-12 border-t border-border mt-12 flex gap-6 items-center"
                >
                    <a href="https://github.com/trippiieeM" target="_blank" className="text-muted hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="https://linkedin.com" target="_blank" className="text-muted hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://twitter.com" target="_blank" className="text-muted hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Home;
