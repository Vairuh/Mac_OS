import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Macwindow from "./Macwindow";
import "./note.scss"
import Syntaxhighlight from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = ({windowname, setwindowstate}) => {

    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])
    return (
        <Macwindow windowname={windowname} setwindowstate={setwindowstate} >
            <div className="note-window">
                {markdown ? <Syntaxhighlight language="typescript" style={atelierDuneDark}>{markdown}</Syntaxhighlight> : <p>Loading...</p>}
            </div>
        </Macwindow>
    )
}

export default Note;