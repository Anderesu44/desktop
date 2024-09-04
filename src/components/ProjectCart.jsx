import { useState } from "react"

import "./ProjectCart.css"
import { Langs } from "../configs.json";


function showDescription(target,select,selectSwitch,hidden_,hiddenSwitch) {
    selectSwitch(select==="True"?"False":"True")
    hiddenSwitch(hidden_==="True"?"False":"True")
    
}



function setheight({target}) {
    
    const reload = setInterval(()=>{
        let id = target.id.split("-").reverse()[0]
        const title = document.getElementById(`ProjectCart__title-${id}`);
        const titleHeight = title.offsetHeight;
    
    
        const icon = document.getElementById(`ProjectCart__lang_icon-${id}`);
    
        icon.style.maxHeight = titleHeight > 60 ? "112px" : "58px";
        
        if (titleHeight > 60){
            clearInterval(reload);
        }
        // contador++;
        // if (contador === 30) {
        //     clearInterval(reload);
        // }
    },100)
}
function ProjectCart({className,id,project,children,lang}) {
    const Project = children?children:project
    const [select, selectSwitch] = useState("False")
    const [hidden_,hiddenSwitch] = useState("True")
    
    if (! Project){
        return null
    }
    return (
        <div className={className?`ProjectCart ${Project.Language} ${className}`:`ProjectCart ${Project.Language}`} select={select} id={id?id:`ProjectCart-${Project.id}`} onClickCapture={({target})=>{showDescription(target,select,selectSwitch,hidden_,hiddenSwitch,)}}>
            <div className="ProjectCar__header" onLoadCapture={setheight}>
                <img hidden_={hidden_} className="ProjectCart__lang_icon" id={`ProjectCart__lang_icon-${Project.id}`} src={`res/img/Languages/${Project.Language}.ico`}/>
                <h3 className={`ProjectCart__title ${Project.Language}`} id={`ProjectCart__title-${Project.id}`}>{Project.name[lang]}</h3>
            </div>
            <p className="ProjectCart__text" hidden_={hidden_} id={`ProjectCart__text-${Project.id}`}>{Project.description[lang]}</p>
            <div className="ProjectCart__Take_a_look" hidden_={hidden_}>
                <a href={Project.link} target="_blank" className="ProjectCart__Take_a_look_text">{Langs[lang]["ProjectCart__Take_a_look"]}</a>
                <img className="ProjectCart__GitHub_icon" src="res/Ui/github.svg" />
            </div>
        </div>
    )
}

export default ProjectCart