import React from 'react';
import Button from "../common/Button.jsx";
import styles from "../../style.js";

const Hero = () => {
    return (
        <div className={`${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="flex lg:flex-col lg:items-center justify-between items-top mt-40 xl:mt-20 sm:mt-10 gap-x-11 lg:gap-20">
                    <div className="w-3/5 lg:w-4/5">
                        <div>
                            <span className="text-base text-blue font-medium tracking-widest uppercase">Agency</span>
                            <h1 className="max-w-3xl text-7xl lg:text-5xl sm:text-4xl font-extrabold pt-7">A fully integrated digital <span className="text-blue">marketing</span> agency</h1>
                            <p className="max-w-xl pt-8 pb-8 text-lg sm:text-base">We are a fully integrated digital marketing agency that empowers your digital presence, unleashes your brand's potential, and fully realizes your digital marketing goals with our innovative solutions.</p>
                            <Button text="Get Started" className="py-4 px-8 sm:py-2 sm:px-4"/>
                        </div>
                     </div>
                    <div>
                        <img src="/assets/1.png" alt="Hero Image" className="pb-0 w-620 lg:w-520"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;