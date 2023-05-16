import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./components/pages/AboutPage.jsx";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/home/Navbar.jsx";
import ServicesPage from "./components/pages/ServicesPage.jsx";
import PricingPage from "./components/pages/PricingPage.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-cyan to-red">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;