import React, { useEffect } from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import '../styles/login.css';
import '../styles/theme-switch.css';

const AuthSwitch = () => {
    const [action, setAction] = React.useState(() => {
        return localStorage.getItem("action") || "Sign Up";
    });

    useEffect(() => {
        localStorage.setItem("action", action);
    }, [action]);

    return (
        <div>
            <div className='Name'> Reward Earth </div>

            <div className="container">
                <div className='Header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>

                {action === "Login" ? <Login /> : <SignUp />}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default AuthSwitch;