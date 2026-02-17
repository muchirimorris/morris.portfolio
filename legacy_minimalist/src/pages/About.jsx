import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Network, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'JavaScript / React / Native', level: 90, color: 'bg-blue-500' },
        { name: 'Flutter / Dart', level: 85, color: 'bg-blue-400' },
        { name: 'UI/UX Design (Figma)', level: 85, color: 'bg-purple-500' },
        { name: 'Python', level: 80, color: 'bg-green-500' },
        { name: 'Networking & Hardware', level: 75, color: 'bg-yellow-500' },
    ];

    const services = [
        {
            icon: <Code size={32} className="text-blue-400" />,
            title: "Development",
            desc: "Building robust web and mobile applications with modern technologies and clean code."
        },
        {
            icon: <Palette size={32} className="text-purple-400" />,
            title: "Design",
            desc: "Creating visually appealing and user-friendly interfaces that delight users."
        },
        {
            icon: <Network size={32} className="text-green-400" />,
            title: "Networking",
            desc: "Designing and implementing reliable network infrastructures and systems."
        },
        {
            icon: <Cpu size={32} className="text-yellow-400" />,
            title: "Problem Solving",
            desc: "Analyzing challenges and developing effective, innovative technical solutions."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                {/* About Text */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">About <span className="text-blue-400">Me</span></h2>
                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                        <p>
                            I'm a versatile professional blending <span className="text-white font-semibold">development</span>,
                            <span className="text-white font-semibold"> design</span>, and <span className="text-white font-semibold">networking</span> expertise.
                        </p>
                        <p>
                            With a passion for user-centric design and robust coding practices, I create solutions that bridge the gap between complex technology and intuitive user experiences.
                        </p>
                        <p>
                            Whether I'm developing a farmer's market AI application, designing a brand identity, or setting up a corporate fiber network, I deliver practical, polished, and impactful work.
                        </p>
                    </div>
                </div>

                {/* Skills Bars */}
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                    <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-300">{skill.name}</span>
                                    <span className="text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className={`h-full ${skill.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-12">What I Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/60 transition-all text-center group"
                        >
                            <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;
