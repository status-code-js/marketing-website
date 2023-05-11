import React from 'react';
import { navLinks} from "../data/index.js";



const Navbar = () => {
    return (
        <div className="w-full flex py-6 justify-between items-center">
            <img src="../../public/assets/logo.svg" alt="Logo" className="w-[124px] h-[32px]"/>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-4">
                {navLinks.map((link, index) => (
                    <li
                    key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Navbar;