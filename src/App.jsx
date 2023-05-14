import React from 'react';
import styles from './style'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-cyan to-red">
                    <Navbar />
                    <Hero />
                    <Services />
        </div>
    );
};

export default App;