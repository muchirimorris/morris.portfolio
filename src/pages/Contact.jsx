import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-3xl">
                <span className="text-sm font-medium text-secondary uppercase tracking-wider block mb-8">Get in Touch</span>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight">
                    Have an idea?<br /> Let's build it.
                </h2>

                <div className="flex flex-col md:flex-row gap-12 md:items-center mb-24">
                    <a
                        href="mailto:hello@morris.dev"
                        className="px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-white/90 transition-colors w-fit"
                    >
                        hello@morris.dev
                    </a>

                    <div className="flex gap-8 text-secondary">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-between items-center text-sm text-secondary">
                    <span>&copy; 2026 Morris Muchiri.</span>
                    <span>Nairobi, Kenya</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
