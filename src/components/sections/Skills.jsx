import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Cpu, GitBranch, Terminal, Globe, Server } from 'lucide-react';

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
        title: "Machine Learning & Tools",
        icon: <Cpu size={24} />,
        skills: [
            { name: "Linear Regression", level: 70 },
            { name: "Isolation Forest", level: 60 },
            { name: "Git", level: 85 },
            { name: "GitHub", level: 80 },
            { name: "VS Code", level: 90 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                    <Terminal size={14} /> My Stack
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Technical <span className="text-accent">Proficiency</span></h2>
                <p className="text-gray-600 dark:text-gray-400">A comprehensive toolkit for building modern applications.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/50 dark:bg-surface backdrop-blur-md border border-gray-200 dark:border-white/5 p-6 rounded-2xl hover:border-accent/30 transition-all hover:shadow-lg dark:hover:shadow-primary-900/10 group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary-100 dark:bg-white/5 rounded-xl text-primary-600 dark:text-accent group-hover:bg-accent/10 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{category.title}</h3>
                        </div>

                        <div className="space-y-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <span className="text-sm text-primary-600 dark:text-accent font-medium">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-primary-500 dark:bg-accent rounded-full"
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
