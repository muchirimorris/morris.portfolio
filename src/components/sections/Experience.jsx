import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const TimelineItem = ({ data, index }) => (
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

const experiencesData = [
        {
            type: 'work',
            period: '2025',
            role: 'Attachment',
            title: 'IT & Network Support Technician',
            description: 'Installed and configured WiFi networks and routers for home and small business clients across Nyeri County. Performed fiber splicing, cable termination, and network diagnostics for ISP-level connectivity projects. Resolved technical network faults and provided ongoing IT support and user training to clients.',
            tags: ['WiFi Configuration', 'Fiber Splicing', 'IT Support']
        },
        {
            type: 'education',
            period: 'Expected Graduation: 2026',
            role: 'Bachelor Degree',
            title: 'Dedan Kimathi University of Technology',
            description: 'Bachelor of Business Information Technology (BBIT). Relevant coursework: Systems Analysis & Design, Database Management, Mobile Application Development, Computer Networking.',
            tags: ['Systems Analysis', 'Database Management', 'Networking']
        },
        {
            type: 'certification',
            period: '2023 - 2024',
            role: 'Cisco Networking Academy',
            title: 'IT Certifications',
            description: 'Introduction to Networks (ITN) [2023], NDG Linux Essentials [2024], IoT and Digital Transformation [2024].',
            tags: ['Cisco', 'Linux', 'IoT']
        }
    ];

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-24 px-6 md:px-20 max-w-4xl mx-auto flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                    <Briefcase size={14} /> My Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Experience & Education</h2>
                <div className="h-1 w-12 bg-accent rounded-full mb-8"></div>
            </motion.div>

            <div className="space-y-0">
                {experiencesData.map((exp, index) => (
                    <TimelineItem key={index} data={exp} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
