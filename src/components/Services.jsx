import React from 'react';
import Button from "./Button.jsx";
import styles from "../style.js";

const Services = () => {
    return (
        <div className="bg-black">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="py-40">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-base text-green font-extrabold tracking-widest uppercase">Services</span>
                                <h2 className="max-w-2xl text-5xl text-white font-semibold pt-7">High-impact services to take your business to the next level</h2>
                            </div>
                            <div>
                                <Button className="bg-white" textColor="black" text="Our Services"/>
                            </div>
                         </div>
                        <div className="grid grid-rows-2 grid-cols-3 gap-14 mt-20">
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-1.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">Social Media Marketing</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">Our team of experts can help you develop a comprehensive Social Media Marketing strategy to achieve your business goals and stand out in a crowded digital marketplace.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-2.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">Paid Advertising</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">With our Paid Advertising service, you can reach your target audience and boost conversions, all while maximizing your return on investment.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-3.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">Advanced Analytics</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">Gain powerful insights and make data-driven decisions with our Advanced Analytics solutions. Unlock the full potential of your business and stay ahead of the competition.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-4.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">SEO Optimization</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">Maximize your online visibility and attract more organic traffic with our expert SEO optimization services that deliver measurable results and drive business growth.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-5.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">Funnel Optimization</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">Increase conversions and revenue with our expert Funnel Optimization services. We'll help you identify and optimize every step of your sales funnel for maximum impact.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-grey3 to-grey4 max-w-sm rounded-3xl border border-grey2">
                                <div className="p-10">
                                    <img src="/assets/features-6.svg" alt="Features" className="w-24"/>
                                    <div className="pt-6 text-white">
                                        <h3 className="text-2xl">Content Marketing</h3>
                                        <p className="text-lg text-grey1 pt-3.5 pb-6">Engage your audience and drive conversions with our expert Content Marketing services. We create high-quality content that resonates with your target customers and boosts your online presence.</p>
                                        <Button text="Read More"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;