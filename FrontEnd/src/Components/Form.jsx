import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import "../styles/Form.css"
import user_icon from '../assets/user.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Sign Up";

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme || "light");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = { username, password, email: method === "signup" ? email : undefined };
            const response = await api.post(route, data);

            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Container'>
            <form onSubmit={handleSubmit}>
                <div className="Title">{name}</div>
                <div className="Underline"></div>

                <div className="Inputs">
                    <div className="input">
                        <img src={user_icon} alt='Username' />
                        <input type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {method === "signup" && (
                        <div className="input">
                            <img src={email_icon} alt='Email' />
                            <input type="email"
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="input">
                        <img src={password_icon} alt='Password' />
                        <input type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {method === "login" && (
                    <div>
                        <div className='forgot-password'>
                            Forgot password? <a href="/forgotpass"><span>click here</span></a>
                        </div>
                        <div className='Submit-container'>
                            <div className="submit">
                                <button type="submit" disabled={loading}>
                                    {loading ? "Loading..." : "Login"}
                                </button>
                            </div>
                            <div className="submit gray"
                                onClick={() => navigate("/signup")}>
                                Sign Up
                            </div>
                        </div>
                    </div>
                )}

                {method === "signup" && (
                    <div>
                        <div className='Submit-container'>
                            <div className="submit">
                                <button type="submit" disabled={loading}>
                                    {loading ? "Loading..." : "Sign Up"}
                                </button>
                            </div>
                            <div className="submit gray"
                                onClick={() => navigate("/login")}>
                                Login
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Form;
