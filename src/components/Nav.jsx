import "./Nav.css"
import { useState } from "react"

import {Langs} from "../configs.json"
import { toHome } from "../main";

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
    
    return (<nav className={className ? `Nav ${className}` : "Nav"} id="Top">
    <img className="Nav__Swith_Lang" src={lang === "EN"?"res/Ui/espanol.svg":"res/Ui/ingles.svg"} onClickCapture={({target})=>{changeLang(lang,langSwitch)}}/>
    <h2 onClickCapture={toHome} className="Nav__Title">{Langs[lang]["Footer_tilte__text"]}</h2>
    <img className="Nav__Swith_theme" src={theme === "Light"?"res/Ui/sol.svg":"res/Ui/luna.svg"} onClickCapture={({target})=>{changeTheme(theme,themeSwitch)}}/>
    </nav>)
}
export default Nav