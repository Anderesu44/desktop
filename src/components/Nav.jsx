import "./Nav.css"
import { useState } from "react"

import {Langs} from "../configs.json"

function changeTheme(theme,themeSwitch) {
    let body = document.body

    if (theme === "Dark"){
        body.setAttribute("theme","Light")
        themeSwitch("Light")
    }else{
        body.setAttribute("theme","Dark")
        themeSwitch("Dark")
    }
}
function changeLang(lang,langSwitch) {
    let html = document.documentElement
    if (lang === "EN"){
        html.setAttribute("lang","ES")
        langSwitch("ES")
    }else{
        html.setAttribute("lang","EN")
        langSwitch("EN")
    }
}

function Nav({className,lang,langSwitch,children,location}) {
    let body = document.body
    let theme_ = body.getAttribute("theme")
    const [theme,themeSwitch] = useState(theme_)
    
    return (<nav className={className ? `Nav ${className}` : "Nav"}>
    <img className="Nav__Swith_theme" src={theme === "Light"?"res/Ui/cambiar_0.png":"res/Ui/cambiar_1.png"} onClickCapture={({target})=>{changeTheme(theme,themeSwitch)}}/>
    <img className="Nav__Swith_Lang" src="res/Ui/idioma.png" onClickCapture={({target})=>{changeLang(lang,langSwitch)}}/>
    <h2 className="Nav__Title">{Langs[lang]["Footer_tilte__text"]}</h2>
    </nav>)
}
export default Nav