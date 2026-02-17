import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image / Stats */}
                    <div className="space-y-6">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=1000&auto=format&fit=crop"
                            alt="Coding in Nature"
                            className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                                <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white">BBIT</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Graduate</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                                <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white">Dedan Kimathi</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">University</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Bridging Technology & Agriculture
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            I am a passionate <strong className="text-primary-600">Software Developer</strong> and recent graduate from Dedan Kimathi University of Technology.
                            My journey is defined by a curiosity to solve real-world problems, specifically in the <strong className="text-primary-600">agricultural sector</strong>.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            I specialize in building mobile applications and integrating Machine Learning models to empower farmers with data-driven insights.
                            From milk collection systems to disease prediction, I believe code can cultivate a better future.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium flex items-center gap-2">
                                <Heart size={16} className="text-red-500" /> Problem Solver
                            </span>
                            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                🚀 Innovator
                            </span>
                            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                🌿 Agri-Tech Enthusiast
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
