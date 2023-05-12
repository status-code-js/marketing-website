import React from 'react';
import styles from './style'
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-r from-cyan to-red">
            <div className={`${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default App;