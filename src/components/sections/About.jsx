import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/profile.jpeg';
import cvFile from '../../assets/Morris_Muchiri_CV.pdf';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-20"
            >
                <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
                <div className="h-1 w-12 bg-accent rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Image with Blob */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    {/* Orange Blob */}
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 fill-accent opacity-90">
                        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.1,13.5,77.7,27.1,68.9,39.4C60.1,51.7,49.9,62.8,37.3,71.1C24.7,79.4,9.6,84.9,-5.3,88.9C-20.2,92.8,-34.9,95.2,-47.9,89.5C-60.8,83.8,-72.1,70,-79.8,54.7C-87.5,39.4,-91.7,22.6,-92.3,6.2C-92.9,-10.1,-89.9,-26.1,-81.4,-39.1C-72.9,-52.1,-58.9,-62,-44.6,-68.8C-30.3,-75.6,-15.2,-79.3,0.7,-80.6C16.6,-81.9,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>

                    {/* Image Placeholder - update with real image path */}
                    <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src={profilePic}
                            alt="Morris Muchiri" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-start"
                >
                    <p className="text-gray-300 leading-relaxed text-lg mb-8 text-justify">
                        I'm Morris Muchiri, a Full Stack Developer, Flutter Engineer, and Network Technician based in Kenya. I specialize in designing and developing scalable web platforms and mobile applications, and enjoy bringing complex ideas to life through code. 
                        <br /><br />
                        I offer freelance services and always strive to deliver high-quality work that offers an exceptional user experience. I work with clients of all sizes to create systems that elevate their brands and streamline their operations. Let's collaborate to create something great!
                    </p>

                    <a 
                        href={cvFile} 
                        target="_blank"
                        className="px-8 py-3 bg-accent text-dark font-bold rounded hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                    >
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
