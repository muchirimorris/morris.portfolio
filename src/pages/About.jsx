import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                {/* Bio */}
                <div>
                    <span className="text-sm font-medium text-secondary uppercase tracking-wider block mb-8">About</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                        A rigorous approach to software engineering.
                    </h2>
                    <div className="text-secondary text-lg leading-relaxed space-y-6">
                        <p>
                            I am a Full Stack Engineer specialized in building accessible, performant, and scalable web applications.
                            My work sits at the intersection of design and engineering, ensuring that every system I build is not only
                            technically sound but also intuitive and delightful to use.
                        </p>
                        <p>
                            With a background in building complex ecosystems like the Podago platform and Investor Portals,
                            I have deep experience in architecting solutions that solve real-world problems.
                        </p>
                    </div>
                </div>

                {/* Skills/Capabilities */}
                <div>
                    <span className="text-sm font-medium text-secondary uppercase tracking-wider block mb-8">Capabilities</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-white font-semibold mb-4">Frontend</h3>
                            <ul className="space-y-2 text-secondary">
                                <li>React / Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Backend</h3>
                            <ul className="space-y-2 text-secondary">
                                <li>Node.js / Express</li>
                                <li>PostgreSQL / MongoDB</li>
                                <li>API Design (REST/GraphQL)</li>
                                <li>System Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
