import React from 'react';
import { Rnd } from 'react-rnd';
import "./window.scss"

const Macwindow = ({children,width="40vw",height="40vh",windowname,setwindowstate}) => {
    return (
        <Rnd 
        default={{
            width: width,
            height: height,
            x: 300,
            y: 200,
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={()=>setwindowstate(state=>({...state,[windowname]:false}))} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="tittle">
                        <p>Vairuh-zsh</p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>

        </Rnd>
    )
}

export default Macwindow;