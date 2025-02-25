import React , {useState, useEffect}from "react";
import SlidingPanel from 'react-sliding-side-panel';
import { ACCESS_TOKEN } from '../constants';
import { useNavigate } from "react-router-dom";
import api from '../api';
import coin_png from '../assets/coins_32x32.png'
import '../styles/Header.css';
import SidePanel from "./Side-Panel";
import Scan from "./QrScan";

const Header = () => {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const response = await api.get('/api/user/Points/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
                    }
                });
                setPoints(response.data.points);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPoints();
    }, []);

    return(
        <div className = "top-bar">
            <SidePanel/>
            <div className="points">
                <img src = {coin_png} alt="coins"/>
                <div className="pnt">Points {points} </div>
            </div>
            <Scan/>
        </div>
    );
}

export default Header;