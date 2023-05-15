import React from 'react';
import styles from "../../style.js";


const About = () => {
    return (
        <div>
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="py-40">
                        <div className="flex justify-between items-top gap-x-11">
                            <div>
                                <img src="/assets/about.svg" alt="About Image" className="w-480" />
                            </div>
                            <div className="max-w-2xl">
                                <span className="text-base text-blue font-medium tracking-widest uppercase">About</span>
                                <h2 className="max-w-2xl text-5xl text-black font-semibold pt-7">Transform your digital presence with our innovative marketing solutions</h2>
                                <p className="pt-10 text-lg">At our digital marketing agency, we understand the importance of a strong online presence. With our innovative solutions, we can help transform your digital presence and help your brand stand out in today's crowded online world. Our team of experts will work closely with you to develop a customized marketing strategy that aligns with your goals and helps you achieve the results you're looking for.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;