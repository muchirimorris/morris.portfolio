import React from 'react';


const SimpleCard = ({ children, className = "", onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};

export default SimpleCard;
