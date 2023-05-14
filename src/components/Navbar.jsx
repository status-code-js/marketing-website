import React from 'react';
import { navLinks} from "../data/index.js";
import Button from "./Button.jsx";
import styles from "../style.js";



const Navbar = () => {
    return (
        <div className={`${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="flex justify-between items-center py-6">
                    <img src="/assets/logo.svg" alt="Logo" className="w-[70px] h-[70px]" />
                    <div className="flex items-center gap-x-16">
                        <ul className="flex gap-x-10">
                            {navLinks.map((link, index) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="nav-link">
                                {link.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                        <Button text="Get Started"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;