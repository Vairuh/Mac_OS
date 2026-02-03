import React from "react";
import githubdata from "../../assets/github.json"
import Macwindow from "./Macwindow";
import "./github.scss"

const Gitcard = ({data = {id:1, image:"", title:"", description:"",tags:"", repoLink:"", demoLink:""}}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag'>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo</a>}
        </div>

    </div>
}
const Github = ({windowname, setwindowstate}) => {
    return (
        <Macwindow windowname={windowname} setwindowstate={setwindowstate}>
            <div className="cards">
                {githubdata.map(project =>{
                    return <Gitcard data={project}/>
                })}
            </div>
        </Macwindow>
    )
}
export default Github;