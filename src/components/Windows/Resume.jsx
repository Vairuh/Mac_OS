import React from "react";
import Macwindow from "./Macwindow";
import "./resume.scss"

const Resume = ({windowname, setwindowstate}) => {
    return (
        <Macwindow windowname={windowname} setwindowstate={setwindowstate}>
            <div className="resume-window">
                <iframe src="/resume.pdf" frameBorder="0"></iframe>
            </div>
        </Macwindow>
    )
}

export default Resume