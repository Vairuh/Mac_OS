import React from 'react'
import "./dock.scss"

const Dock = ({ windowstate, setwindowstate }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => { window.open("https://calendar.google.com/", "_blank") }}
                className="icon calendar">
                <img src="/docs-icons/calender.svg" alt="" />
            </div>
            <div
                onClick={() => { setwindowstate(state => ({ ...state, cli: true })) }}
                className="icon cli">
                <img src="/docs-icons/cli.svg" alt="" />
            </div>
            <div
                onClick={() => { setwindowstate(state => ({ ...state, github: true })) }}
                className="icon github">
                <img src="/docs-icons/github.svg" alt="" />
            </div>
            <div
                onClick={() => { window.open("https://www.linkedin.com/in/vaibhav-ruhela-43702b374/", "_blank") }}
                className="icon link">
                <img src="/docs-icons/link.svg" alt="" />
            </div>
            <div
                onClick={() => { window.open("https://mail.google.com/mail/u/0/#inbox", "_blank") }}
                className="icon mail">
                <img src="/docs-icons/mail.svg" alt="" />
            </div>
            <div
                onClick={() => { setwindowstate(state => ({ ...state, note: true })) }}
                className="icon note">
                <img src="/docs-icons/note.svg" alt="" />
            </div>
            <div
                onClick={() => { setwindowstate(state => ({ ...state, resume: true })) }}
                className="icon pdf">
                <img src="/docs-icons/pdf.svg" alt="" />
            </div>
            <div
                onClick={() => { setwindowstate(state => ({ ...state, spotify: true })) }}
                className="icon spotify">
                <img src="/docs-icons/spotify.svg" alt="" />
            </div>
        </footer>
    )
}
export default Dock