import React from 'react';

const Sidebar = ({ activeSection = 'hero' }) => {
    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Portfolio' },
        { id: 'contact', label: 'Contact Me' }
    ];

    return (
        <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[80px] bg-dark border-r border-white/5 flex-col items-center py-8 z-50">
            {/* Logo */}
            <div className="flex flex-col items-center mb-auto">
                <span className="text-xl font-bold text-white tracking-widest leading-none">M</span>
                <span className="text-xl font-bold text-white tracking-widest leading-none">M</span>
                <div className="h-0.5 w-4 bg-accent mt-2"></div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-center justify-center gap-[100px] flex-1">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`relative transform -rotate-90 text-sm tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap
                            ${activeSection === item.id 
                                ? 'text-accent font-bold' 
                                : 'text-gray-500 hover:text-white'
                            }`}
                    >
                        {item.label}
                        {activeSection === item.id && (
                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-accent"></span>
                        )}
                    </a>
                ))}
            </nav>

            {/* Bottom Scroll Indicator (optional) */}
            <div className="mt-auto">
                <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
