import React from 'react';

const Button = ({ className, text, textColor }) => {
    return (
        <button className={`bg-black py-4 px-10 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-110 ${className}`} style={{ color: textColor }}>
            {text}
        </button>
    );
};

export default Button;