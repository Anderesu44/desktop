import "./Skills.css"
import { Langs } from "../../configs.json";

function Skills({lang}) {
    return(
        <section className="Skills">
            <h2 id="Skills" className="Skills__title">{Langs[lang]["Skills__title"]}:</h2>
            <div className="Skills__content">
                <div className="Skills__py">
                    <h3>Python:</h3>
                    <div className="Skills__box notpair"> <p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />Django - </p> <p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair"> <p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />KivyMD - </p><p className="Skills__Level Ba">{Langs[lang]["Spc_Basic"]}</p></div>
                    <div className="Skills__box notpair last"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />Vanilla - </p><p className="Skills__Level A">{Langs[lang]["Spc_Advanced"]}</p></div>
                </div>
                <div className="Skills__js">
                    <h3>JavaScript:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />fetch - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />React - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box notpair last"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />Vanilla - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                </div>
                <div className="Skills__html/css">
                    <h3>HTML/CSS:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />Vanilla - </p><p className="Skills__Level A">{Langs[lang]["Spc_Advanced"]}</p></div>
                    <div className="Skills__box pair last"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />telwing - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                </div>
                <div className="Skills__others">
                    <h3>{Langs[lang]["Spc_Others"]}:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />SQL - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair last"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="/res/ui/enlace.png" />GIT - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>

                </div>
            </div>
        </section>
    )
}

export default Skills