import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-medium mb-4">
                    <Mail size={14} /> Get in Touch
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Let's build something <span className="text-accent">great</span></h2>
                <p className="text-gray-400">
                    Open for opportunities in Mobile App Development and AgriTech.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface border border-white/5 p-8 rounded-3xl">
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-400">
                            <div className="p-3 bg-white/5 rounded-full text-accent"><Mail size={20} /></div>
                            <span>muchirimorris007@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <div className="p-3 bg-white/5 rounded-full text-accent"><MapPin size={20} /></div>
                            <span>Nyeri, Kenya</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h4 className="text-sm font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                    />
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
