import React from 'react';
import { navLinks} from "../../data/index.js";
import Button from "../common/Button.jsx";
import styles from "../../style.js";
import {Link} from "react-router-dom";



const Navbar = () => {
    return (
        <div className={`${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="flex justify-between items-center py-6">
                    <Link to='/'>
                        <img src="/assets/logo.svg" alt="Logo" className="w-[70px] h-[70px]" />
                    </Link>
                    <div className="flex items-center gap-x-16">
                        <ul className="flex gap-x-10">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={`/${link.title.toLowerCase()}`} className="nav-link">
                                        {link.title}
                                    </Link>
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