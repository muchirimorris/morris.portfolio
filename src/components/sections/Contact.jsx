import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const response = await fetch('https://formspree.io/f/xwpojojp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });
            
            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
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
                                disabled={status === 'loading'}
                                className={`self-center md:self-end px-10 py-3 font-bold rounded-xl transition-colors mt-2 ${
                                    status === 'loading' ? 'bg-gray-600 text-gray-300 cursor-not-allowed' :
                                    status === 'success' ? 'bg-green-500 text-white' :
                                    status === 'error' ? 'bg-red-500 text-white' :
                                    'bg-accent text-dark hover:bg-accent/90'
                                }`}
                            >
                                {status === 'loading' ? 'Sending...' : 
                                 status === 'success' ? 'Message Sent!' : 
                                 status === 'error' ? 'Failed - Try Again' : 
                                 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
