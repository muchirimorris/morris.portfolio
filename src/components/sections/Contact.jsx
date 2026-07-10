import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formState);
        alert('Thanks for your message!');
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="min-h-screen py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Let's Talk</h2>
                <div className="h-1 w-12 bg-accent rounded-full"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl max-w-5xl mx-auto w-full"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left: Social Media */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Social Media</h3>
                        <div className="space-y-6">
                            <a href="https://linkedin.com" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <Linkedin className="group-hover:text-accent transition-colors" />
                                <span>Connect On Linked In</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <Instagram className="group-hover:text-accent transition-colors" />
                                <span>DM Me On Instagram</span>
                            </a>
                            <a href="mailto:morris@example.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <Mail className="group-hover:text-accent transition-colors" />
                                <span>Mail Your Idea</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <Twitter className="group-hover:text-accent transition-colors" />
                                <span>Ping Me On Twitter</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Contact Form</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                required
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                                className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                                className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                            />
                            <textarea 
                                placeholder="Message" 
                                required
                                rows={4}
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600 resize-none"
                            ></textarea>
                            
                            <button 
                                type="submit"
                                className="self-center md:self-end px-10 py-3 bg-accent text-dark font-bold rounded-xl hover:bg-accent/90 transition-colors mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
