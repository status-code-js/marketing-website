import React from 'react';
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <About />
        </div>
    );
};

export default Home;