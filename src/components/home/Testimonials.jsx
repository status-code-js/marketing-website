import React from 'react';
import styles from "../../style.js";

const Testimonials = () => {
    return (
        <div className="bg-white">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="py-40">
                        <div className="flex justify-between items-top gap-x-40">
                            <div className="w-2/4">
                                <span className="text-base text-blue font-medium tracking-widest uppercase">Testimonials</span>
                                <h2 className="max-w-2xl text-5xl text-black font-semibold pt-7">Look what our customers say about us</h2>
                                <p className="pt-10 text-lg">Don't just take our word for it. Hear what our clients have to say about their experience working with our digital marketing agency. We take pride in delivering exceptional results and exceeding our clients' expectations.</p>
                                <div className="flex pt-14 text-blue gap-x-12">
                                    <div className="border border-blue rounded-full p-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M14 7l-5 5 5 5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="border border-blue rounded-full p-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M10 17l5-5-5-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <div className="grid grid-rows-1 grid-cols-1 gap-14">
                                    <div className="bg-gradient-to-r from-cyan to-red max-w-sm rounded-lg border border-grey6 max-w-xl">
                                        <div className="p-5">
                                            <div className="flex flex-col bg-white p-10">
                                                <img src="/assets/quote.svg" alt="Testimonial Icon" className="w-12"/>
                                                <p className="text-lg text-grey8 py-5">Working with the Creative Studio has been a game-changer for our business. The team's professionalism, attention to detail, and commitment to our success are truly commendable.</p>
                                            </div>
                                            <div className="flex gap-x-4 pt-10">
                                                <img src="/assets/testimonial-1.png" alt="Testimonial Photo" className="w-10 h-10"/>
                                                <p>Mary Smith</p>
                                            </div>
                                        </div>

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

export default Testimonials;