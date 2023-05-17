import React from 'react';
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Pricing from "./Pricing.jsx";
import Testimonials from "./Testimonials.jsx";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Pricing />
            <Testimonials />
        </div>
    );
};

export default Home;