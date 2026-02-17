import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const GitHubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/muchirimorris/repos?sort=updated&per_page=6')
            .then(res => res.json())
            .then(data => {
                // Determine top repos, fallback to sorting by stars if not pinned (API doesn't return pinned directly easily public)
                // We'll just take the top 4 most recently updated or starred
                const sorted = Array.isArray(data) ? data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4) : [];
                setRepos(sorted);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch repos", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null; // Or a loading skeleton

    return (
        <section className="py-24 bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <Github className="w-8 h-8 text-gray-900 dark:text-white" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open Source</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repos.map((repo, index) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 transition-colors group bg-gray-50 dark:bg-gray-800/50"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-primary-600 group-hover:underline flex items-center gap-2">
                                    {repo.name}
                                </h3>
                                <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-600" />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 min-h-[2.5rem]">
                                {repo.description || "No description provided."}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center gap-4">
                                    {repo.language && (
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Star size={14} /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={14} /> {repo.forks_count}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a href="https://github.com/muchirimorris" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">
                        View all repositories on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GitHubRepos;
