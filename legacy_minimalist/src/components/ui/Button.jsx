import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    external,
    ...props
}) => {
    const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all shadow-lg flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-blue-500/25",
        outline: "border-2 border-primary text-white hover:bg-primary/10 hover:border-blue-400 hover:shadow-blue-500/20",
        ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50"
    };

    const Component = href ? motion.a : motion.button;

    const componentProps = {
        className: `${baseClasses} ${variants[variant]} ${className}`,
        whileHover: { scale: 1.02, y: -2 },
        whileTap: { scale: 0.98 },
        onClick,
        ...props
    };

    if (href) {
        componentProps.href = href;
        if (external) {
            componentProps.target = "_blank";
            componentProps.rel = "noopener noreferrer";
        }
    }

    return (
        <Component {...componentProps}>
            {children}
        </Component>
    );
};

export default Button;
