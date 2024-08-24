import "./Header.css"
import {Langs} from "../../configs.json"

function Header({lang, className}) {

    console.log()
    return(
        <header className={className ? `${className} H-Header` : "H-Header"}>
            <h1 className="H-Header__tilte">Andres Berrios</h1>
            <h2 className="H-Header__tilte">{Langs[lang]["H-Header__tilte"]}</h2>
            <img className="H-Header__Avatar" src="res/img/a44.ico"/>
            <div className="H-Header__Sumary" id="Sumary">
                <h3 className="H-Header_Sumary__title">{Langs[lang]["H-Header_Sumary__title"]}:</h3>
                <p className="H-Header_Sumary__text">{Langs[lang]["H-Header_Sumary__text"]}</p>
            </div>
        </header>
    )
}
export default Header