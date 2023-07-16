import React, {useState} from 'react';
import { navLinks} from "../../data/index.js";
import Button from "../common/Button.jsx";
import styles from "../../style.js";
import {Link} from "react-router-dom";



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
            document.body.classList.toggle('overflow-hidden', !isMobileMenuOpen);
        }
    const closeMobileMenu = () => {
            setIsMobileMenuOpen(false)
            document.body.classList.remove('overflow-hidden');
    }


    return (
        <div>
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="flex justify-between items-center py-6">
                        <Link to="/">
                            <img src="/assets/logo.svg" alt="Logo" className="w-[70px] h-[70px]" />
                        </Link>
                        <div className="flex items-center gap-x-16">
                            <ul className="flex gap-x-10 2md:hidden">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={`/${link.title.toLowerCase()}`} className="nav-link" onClick={closeMobileMenu}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Button text="Get Started" className="py-4 px-8 2md:hidden" />
                            <div className="relative z-50">
                            <button className="md:hidden" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-square-rounded-x"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             strokeWidth="2"
                                             stroke="currentColor"
                                             fill="none"
                                             strokeLinecap="round"
                                             strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M10 10l4 4m0 -4l-4 4"></path>
                                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                                        </svg>

                                ) : (
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-baseline-density-medium"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 20h16"></path>
                                        <path d="M4 12h16"></path>
                                        <path d="M4 4h16"></path>
                                        </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={`flex flex-col ${isMobileMenuOpen ? '' : 'hidden'} fixed z-10 top-0 left-0 items-center justify-center h-screen p-10 bg-white w-screen gap-3`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={`/${link.title.toLowerCase()}`} className="nav-link" onClick={closeMobileMenu}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );

};

export default Navbar;