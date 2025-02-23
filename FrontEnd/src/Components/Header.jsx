import React , {useState, useEffect}from "react";
import { ACCESS_TOKEN } from '../constants';
import { useNavigate } from "react-router-dom";
import api from '../api';
import coin_png from '../assets/coins_32x32.png'
import '../styles/Header.css';

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
        <div>
            <div className="points">
            <img src = {coin_png} alt="coins"/>
            <div>Points:{points} </div>
            </div>
        </div>
    );
}

export default Header;