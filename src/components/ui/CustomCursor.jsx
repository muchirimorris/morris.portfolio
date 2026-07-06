import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovered, setIsHovered] = useState(false);

    // Spring physics for smooth trailing
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 1.5 : 1,
                backgroundColor: isHovered ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
            }}
            transition={{ type: "tween", duration: 0.15 }}
        >
            <motion.div 
                className="w-2 h-2 bg-primary-500 rounded-full"
                animate={{
                    scale: isHovered ? 0 : 1
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
