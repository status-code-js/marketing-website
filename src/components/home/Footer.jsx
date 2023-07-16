import React from 'react';
import styles from "../../style.js";
import {Link} from "react-router-dom";
import {navLinks, footerLinks} from "../../data/index.js";
import Button from "../common/Button.jsx";


const Footer = () => {
    return (
        <div className="bg-black text-white py-20">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div>
                        <div>
                            <Link to='/'>
                                <img src="/assets/logo.svg" alt="Logo" className="w-[70px] h-[70px]" />
                            </Link>
                            </div>
                    </div>
                    <div className="flex 2md:flex-wrap 2md:gap-8 justify-between items-end pt-7">
                        <div>
                            <ul className="flex gap-x-10">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={`/${link.title.toLowerCase()}`} className="nav-link footer-link">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p>Get the freshest news from us</p>
                            <div className="flex sm:flex-wrap items-center gap-3 pt-4">
                                <div className="">
                                    <input placeholder="Your email address" className="rounded-md py-2 pr-8 pl-2"/>
                                </div>
                                <Button className="bg-green py-2 px-10" textColor="black" text="Subscribe"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-grey8 mt-16 mb-8"></div>
                    <div className="flex 2md:flex-wrap 2md:gap-8 items-center justify-between">
                        <div>
                            <ul className="flex gap-x-10">
                                {footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={`/${link.title.toLowerCase()}`} className="copyright-link">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-grey8">Made with love ©status-code-js 2023. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;