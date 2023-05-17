import React from 'react';
import styles from "../../style.js";
import Button from "../common/Button.jsx";

const Pricing = () => {
    return (
        <div className="bg-white">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="py-40">
                        <div className="flex flex-column justify-center text-center items-center">
                            <div className="max-w-2xl">
                                <span className="text-base text-blue opacity-70 font-medium tracking-widest uppercase">Pricing</span>
                                <h2 className="max-w-2xl text-5xl text-black font-semibold pt-7">Transparent pricing that fits your budget</h2>
                                <p className="pt-10 text-lg">We offer flexible pricing plans tailored to your specific needs, ensuring that you only pay for the services you require. Whether you're a startup on a tight budget or an established enterprise looking for a comprehensive marketing solution, our pricing options are designed to accommodate your unique requirements. With our transparent pricing model, you can confidently invest in our services, knowing that you're getting the best value for your money. </p>
                            </div>
                        </div>
                        <div className="grid grid-rows-1 grid-cols-3 gap-14 mt-20">
                            <div className="bg-grey5 max-w-sm rounded-lg border border-grey6">
                                <div className="p-10">
                                    <div className="flex gap-x-8 items-center">
                                    <img src="/assets/Pricing-1.svg" alt="Pricing" className="w-12"/>
                                        <div className="flex-column">
                                            <h4 className="text-2xl font-bold">Starter</h4>
                                            <p className="pt-2 text-grey8 text-lg"><span className="text-5xl text-black font-black">$29</span> /Per Month</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-grey7 my-7"></div>
                                    <div className="text-black pb-4">
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Social Media Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Paid Advertising</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                        <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                        <p className="text-lg font-normal">SEO Optimization</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Content Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/cross.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Advanced Analytics</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/cross.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Funnel Optimization</p>
                                        </div>
                                    </div>
                                        <Button className="bg-black w-full" textColor="white" text="Buy Now"/>
                                </div>
                            </div>
                            <div className="bg-black text-white max-w-sm rounded-lg border border-grey6">
                                <div className="p-10">
                                    <div className="flex gap-x-8 items-center">
                                        <img src="/assets/Pricing-2.svg" alt="Pricing" className="w-12"/>
                                        <div className="flex-column">
                                            <h4 className="text-2xl font-bold">Starter</h4>
                                            <p className="pt-2 text-white text-lg"><span className="text-5xl text-white font-black">$49</span> /Per Month</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-grey7 my-7"></div>
                                    <div className="pb-4">
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Social Media Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Paid Advertising</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">SEO Optimization</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Content Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Advanced Analytics</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/cross.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Funnel Optimization</p>
                                        </div>
                                    </div>
                                    <Button className="bg-white w-full" textColor="black" text="Buy Now"/>
                                </div>
                            </div>
                            <div className="bg-grey5 max-w-sm rounded-lg border border-grey6">
                                <div className="p-10">
                                    <div className="flex gap-x-8 items-center">
                                        <img src="/assets/Pricing-3.svg" alt="Pricing" className="w-12"/>
                                        <div className="flex-column">
                                            <h4 className="text-2xl font-bold">Starter</h4>
                                            <p className="pt-2 text-grey8 text-lg"><span className="text-5xl text-black font-black">$99</span> /Per Month</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-grey7 my-7"></div>
                                    <div className="text-black pb-4">
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Social Media Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Paid Advertising</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">SEO Optimization</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Content Marketing</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Advanced Analytics</p>
                                        </div>
                                        <div className="flex items-center gap-x-2.5 pb-4">
                                            <img src="/assets/tick.svg" alt="Tick Icon" className="w-4" />
                                            <p className="text-lg font-normal">Funnel Optimization</p>
                                        </div>
                                    </div>
                                    <Button className="bg-black w-full" textColor="white" text="Buy Now"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;