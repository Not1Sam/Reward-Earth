import React, { useEffect } from 'react';
import './login.css';
import SwitchTheme from '../theme-switch/theme-switch.jsx';
import '../theme-switch/theme-switch.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignUp = () => {
    const [action, setAction] = React.useState(() => {
        return localStorage.getItem("action") || "Sign Up";
    });

    useEffect(() => {
        localStorage.setItem("action", action);
    }, [action]);

    return (
        <div>
            <SwitchTheme />
            <div className='Name'> Reward Earth </div>

            <div className="container">
                <div className='Header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>

                <div className='inputs'>
                    {action === "Login" ? null : (
                        <div className='input'>
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='user' />
                        </div>
                    )}

                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='email' />
                    </div>

                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='password' />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">Lost Password? <span><a href="https://google.com">Click Here</a></span></div>
                )}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;