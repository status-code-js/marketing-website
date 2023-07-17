import React, { useState } from 'react';
import styles from "../../style.js";
import { testimonials} from "../../data/index.js";



const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-white">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="py-40 xl:py-20">
                        <div className="flex lg:flex-col lg:justify-center lg:items-center justify-between items-top gap-40 lg:gap-20">
                            <div className="w-2/4 lg:w-full">
                                <span className="text-base text-blue font-medium tracking-widest uppercase">Testimonials</span>
                                <h2 className="max-w-2xl text-5xl xl:text-4xl lg:text-3xl sm:text-2xl text-black font-semibold pt-7">Look what our customers say about us</h2>
                                <p className="pt-10 text-lg sm:text-base">Don't just take our word for it. Hear what our clients have to say about their experience working with our digital marketing agency. We take pride in delivering exceptional results and exceeding our clients' expectations.</p>
                                <div className="flex pt-14 text-blue gap-x-12 sm:gap-x-8">
                                    <div className="border border-blue rounded-full p-6 sm:p-4 hover:bg-blue hover:text-white cursor-pointer transition duration-300" onClick={handlePrev}>
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
                                    <div className="border border-blue rounded-full p-6 sm:p-4 hover:bg-blue hover:text-white cursor-pointer transition duration-300" onClick={handleNext}>
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
                                    <div className="bg-gradient-to-r from-cyan to-red max-w-sm rounded-lg max-w-xl lg:max-w-md 2md:max-w-sm">
                                        <div className="p-5">
                                            <div className="flex flex-col bg-white p-10 sm:p-4">
                                                <img src="assets/quote.svg" alt="Testimonial Icon" className="w-12"/>
                                                <p className="text-lg text-grey8 py-5">{testimonials[currentIndex].quote}</p>
                                            </div>
                                            <div className="flex items-center gap-x-4 pt-4">
                                                <img src={testimonials[currentIndex].photo} alt="Testimonial Photo" className="w-10 h-10"/>
                                                <div>
                                                    <p className="text-xl font-bold text-black">{testimonials[currentIndex].author}</p>
                                                    <p className="text-lg font-normal text-grey8 leading-4">{testimonials[currentIndex].position}</p>
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
        </div>
    );
};

export default Testimonials;