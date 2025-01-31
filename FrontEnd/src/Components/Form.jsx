/* eslint-disable react/prop-types */
import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import "../styles/Form.css"

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Sign Up";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/");
            }else{
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
                <div className = "Title">{name}</div >
                <div className="Underline"></div>
                <div className = "Inputs">
                    <div className = "Username">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    
                    {method === "signup" && (
                        <div className="Email">
                            <input
                                type="email"
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                    )}

                    <div className="Pass">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                
                <div className="Submit">
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : name}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;