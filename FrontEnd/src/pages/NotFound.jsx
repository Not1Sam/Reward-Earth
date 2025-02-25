import React from "react";
import '../styles/NotFound.css';
import { useNavigate } from "react-router-dom";


const Notfound = () => {
    const navigate = useNavigate();
    return( 
        <div>
            <div className="message">
                <h1>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
            <div className="tohome"
                onClick={()=>{navigate("/");}}>
                    <span>Go back to the Home page</span>
                </div>
        </div>
    );
}

export default Notfound;