import React, { useState, useEffect } from "react";
import Header from '../Components/Header.jsx';
import api from '../api';
import { ACCESS_TOKEN } from '../constants';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import SwitchTheme from '../Components/theme-switch.jsx';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <SwitchTheme />
            <div className="Block" 
                onClick={() => navigate("/logout")}
            >LOGOUT</div>

            <div className="Block"
                onClick={() => navigate("/forgotpass")}
            >LOSTPASS</div>
        
        </div>
    );
}

export default Home;