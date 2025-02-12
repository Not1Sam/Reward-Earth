import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "../styles/theme-switch.css";

const SwitchTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="switch-button" onClick={toggleTheme}>
            {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </div>
    );
};

export default SwitchTheme;
