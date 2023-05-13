import React from 'react';
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <div className="flex justify-between items-top mt-40">
            <div className="w-3/5">
                <div>
                    <span className="text-base font-medium tracking-widest uppercase">Agency</span>
                    <h1 className="max-w-3xl text-7xl font-extrabold pt-7">A fully integrated digital <span className="text-blue">marketing</span> agency</h1>
                    <p className="max-w-xl pt-8 pb-8">We are a fully integrated digital marketing agency that empowers your digital presence, unleashes your brand's potential, and fully realizes your digital marketing goals with our innovative solutions.</p>
                    <Button />
                </div>
            </div>
            <div>
                <img src="/assets/1.png" alt="Hero Image" className="pb-0"/>
            </div>
        </div>
    );
};

export default Hero;