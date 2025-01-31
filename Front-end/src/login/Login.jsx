import React from 'react'
import './login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignUp = () =>{

    const [action,setAction] = React.useState("Sign Up");

    return(

        <div className="container"> 
            <div className='Header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='user' />
                </div>}
                

                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='email' />
                </div>

                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='password'/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <dev className="forgot-password">Lost Password? <span>Click Here</span></dev>}
            <dev className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sigh Up</div>
                <dev className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</dev>
            </dev>


        </div>


    );

}

export default LoginSignUp