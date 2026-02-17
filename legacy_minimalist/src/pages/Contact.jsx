import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-20 px-6 max-w-7xl mx-auto flex items-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

                {/* Contact Info */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's work <br />
                        <span className="text-blue-500">together.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email</h4>
                                <a href="mailto:hello@morris.dev" className="text-gray-400 hover:text-white transition-colors">hello@morris.dev</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Phone</h4>
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+123 456 7890</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Location</h4>
                                <p className="text-gray-400">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 max-w-lg w-full">
                    {submitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-blue-400 hover:text-blue-300 font-semibold"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
