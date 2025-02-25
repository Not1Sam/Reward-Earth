import React, { useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import { useNavigate } from 'react-router-dom';
import "react-sliding-side-panel/lib/index.css";
import SwitchTheme from "../pages/theme-switch";
import "../styles/Side-Panel.css";
import { AiOutlineBars } from 'react-icons/ai';
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdLockReset } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaBug } from "react-icons/fa";



const SidePanel = () => {
    const navigate = useNavigate();
    const [panelOpen, setPanelOpen] = useState(false);

    return (
        <div>
            <div className = "side-panel-button">
                <button onClick={() => setPanelOpen(true)}>
                <AiOutlineBars 
                            size={35}
                            color="var(--text-color)"
                        />
                </button>
            </div>
            <SlidingPanel
            panelClassName="side-panel"
                type={'left'}
                isOpen={!!panelOpen}
                size={80}
                backdropClicked={() => setPanelOpen(false)}
            >
                <div className="side-panel-content">
                    <div className="item"
                        onClick={()=>{navigate("/account");}}>
                        <FaUserAlt
                        size={30}
                        color="var(--text-color)"/>
                        <span>Account</span>
                    </div>
                    <div className="item"
                        onClick={() => {navigate("/forgotpass");}}>
                        <MdLockReset
                        size={30}
                        color="var(--text-color)"/>
                        <span>Change Password</span>
                    </div>
                    
                    <div className="item"
                        onClick = {() => {navigate("/privacy-policy");}}>
                        <CgNotes
                        size={30}
                        color="var(--text-color)"/>
                        <span>Privacy Policy</span>
                    </div>
                    <div className="item"
                        onClick = {() => {navigate("/bug");}}>
                        <FaBug
                        size={30}
                        color="var(--text-color)"/>
                        <span>Report a Bug!</span>
                    </div>
                    
                    <div className="item"
                        onClick={() => {navigate("/logout");}}>
                        <HiOutlineLogout
                        size={30}
                        color="var(--text-color)"/>
                        <span>Logout</span>
                    </div>
                    <div className="theme">
                        
                        <SwitchTheme />
                    </div>
                </div>
            </SlidingPanel>
        </div>
    );
};

export default SidePanel;