import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Cpu, PenTool, Network } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code size={24} />,
        skills: [
            { name: "JavaScript", level: 90 },
            { name: "Dart", level: 85 },
            { name: "Python", level: 75 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: <Layout size={24} />,
        skills: [
            { name: "React Native", level: 88 },
            { name: "Flutter", level: 82 },
            { name: "Next.js", level: 78 },
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 85 }
        ]
    },
    {
        title: "Backend & Database",
        icon: <Database size={24} />,
        skills: [
            { name: "Firebase", level: 80 },
            { name: "Supabase", level: 70 },
            { name: "Node.js", level: 75 },
            { name: "MySQL", level: 65 }
        ]
    },
    {
        title: "Design & Creative",
        icon: <PenTool size={24} />,
        skills: [
            { name: "Web & App Design", level: 85 },
            { name: "Graphic Design", level: 80 },
            { name: "UI/UX Principles", level: 75 },
            { name: "Figma", level: 70 }
        ]
    },
    {
        title: "Networking & Operations",
        icon: <Network size={24} />,
        skills: [
            { name: "Networking Technician", level: 85 },
            { name: "Git / GitHub", level: 85 },
            { name: "Linux Administration", level: 75 },
            { name: "Cloud Basics", level: 70 }
        ]
    },
    {
        title: "Machine Learning & AI",
        icon: <Cpu size={24} />,
        skills: [
            { name: "Linear Regression", level: 70 },
            { name: "Isolation Forest", level: 60 },
            { name: "Data Analysis", level: 75 },
            { name: "Model Training", level: 65 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-16"
            >
                <h2 className="text-4xl font-bold text-white mb-2">Technical Skills</h2>
                <div className="h-1 w-12 bg-accent rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-accent/30 transition-all group flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="text-accent group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-white text-lg">{category.title}</h3>
                        </div>

                        <div className="space-y-5 flex-1">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400">{skill.name}</span>
                                        <span className="text-accent font-medium">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-accent rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
