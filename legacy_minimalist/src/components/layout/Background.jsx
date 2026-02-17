import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
            {/* Subtle dot pattern for texture, very minimal */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
        </div>
    );
};

export default Background;
