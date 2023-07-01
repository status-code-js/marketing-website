import React from 'react';

const Button = ({ className, text, textColor, paddingY, paddingX }) => {

    const paddingClasses = `py-${paddingY} px-${paddingX}`
    return (
        <button className={`bg-black rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-110 ${className}`} style={{ color: textColor}}>
            {text}
        </button>
    );
};

export default Button;