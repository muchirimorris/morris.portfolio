import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagneticWrapper = ({ children, className = "" }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        mouseX.set(middleX * 0.5); // Adjust multiplier for stronger/weaker magnetism
        mouseY.set(middleY * 0.5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            className={`relative inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default MagneticWrapper;
