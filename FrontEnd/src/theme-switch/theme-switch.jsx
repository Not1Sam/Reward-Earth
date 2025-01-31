import React, { useState, useEffect } from "react";
import "./theme-switch.css";

const SwitchTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    }); 

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className="switch-button" onClick={toggleTheme}>
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </div>
    );
};

export default SwitchTheme;