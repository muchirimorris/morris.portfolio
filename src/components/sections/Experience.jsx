import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ data, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
    >
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1"><Calendar size={14} /> {data.period}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-accent font-medium">{data.role}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-4">{data.description}</p>

        <div className="flex flex-wrap gap-2">
            {data.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            period: '2023 - Present',
            role: 'Freelance Developer',
            title: 'AgriTech & SME Systems',
            description: 'Developing custom mobile and web solutions for agricultural SMEs. Focusing on digitizing milk collection processes and farm management.',
            tags: ['Flutter', 'React', 'Firebase', 'Data Visualization']
        },
        {
            type: 'education',
            period: 'Graduated 2023',
            role: 'Bachelor Degree',
            title: 'Dedan Kimathi University of Technology',
            description: 'Bachelor of Business Information Technology (BBIT). Specialized in Software Engineering and Database Management.',
            tags: ['System Analysis', 'Database Design', 'Software Engineering']
        },
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                    <Briefcase size={14} /> My Journey
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & <span className="text-accent">Education</span></h2>
            </motion.div>

            <div className="space-y-0">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} data={exp} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
