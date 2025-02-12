import React, { useState, useEffect } from "react";
import Header from '../Components/Header.jsx';
import api from '../api';
import { ACCESS_TOKEN } from '../constants';
import '../styles/Home.css';

function Home() {
    const [Points, setPoints] = useState(0);

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const response = await api.get('/api/user/Points/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
                    }
                });
                setPoints(response.data.Points);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPoints();
    }, []);
    return (
        <div>
            <Header />
            <div className="home-container">
                <h1>Welcome to Reward Earth</h1>
                <div className="ShowPoints">
                    <h2>Your Points: {Points}</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;