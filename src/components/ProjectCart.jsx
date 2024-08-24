import { useState } from "react"

import "./ProjectCart.css"

function showDescription(target,select,selectSwitch,hidden_,hiddenSwitch) {
    selectSwitch(select==="True"?"False":"True")
    hiddenSwitch(hidden_==="True"?"False":"True")
    
}

function ProjectCart({className,id,project,children,lang}) {
    const Project = children?children:project
    const [select, selectSwitch] = useState("False")
    const [hidden_,hiddenSwitch] = useState("True")
    
    if (! Project){
        return null
    }
    return (
        <div onFocusCapture={({target})=>console.log(target)} className={className?`ProjectCart ${Project.Language} ${className}`:`ProjectCart ${Project.Language}`} select={select} id={id?id:`ProjectCart-${Project.id}`} onClickCapture={({target})=>{showDescription(target,select,selectSwitch,hidden_,hiddenSwitch,)}}>
            <div className="ProjectCar__header">
                <img className="ProjectCart__lang_icon" id={`ProjectCart__lang_icon-${Project.id}`} src={`/res/img/Languages/${Project.Language}.ico`}/>
                <h3 className="ProjectCart__title" id={`ProjectCart__title-${Project.id}`}>{Project.name[lang]}</h3>
            </div>
            <p className="ProjectCart__text" hidden_={hidden_} id={`ProjectCart__text-${Project.id}`}>{Project.description[lang]}</p>
        </div>
    )
}

export default ProjectCart