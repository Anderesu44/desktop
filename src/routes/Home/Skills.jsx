import "./Skills.css"
import { Langs } from "../../configs.json";
import Img from "../../components/Img";

function Skills({lang, className}) {
    return(
        <section className={className ? `Skills ${className}`: "Skills"}>
            <h2 id="Skills" className="Skills__title">{Langs[lang]["Skills__title"]}:</h2>
            <div className="Skills__content">
                <div className="Skills__content_box Skills__py">
                    <h3>Python:</h3>
                    <div className="Skills__box notpair"> <p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://static.djangoproject.com/img/icon-touch.e4872c4da341.png" alt="res/img/Languages/dj.ico" />Django - </p> <p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair"> <p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://kivymd.readthedocs.io/en/latest/_static/logo-kivymd.png" alt="res/img/Languages/kv.ico"/>KivyMD - </p><p className="Skills__Level Ba">{Langs[lang]["Spc_Basic"]}</p></div>
                    <div className="Skills__box notpair last"><p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://www.python.org/static/favicon.ico" alt="res/img/Languages/py.ico"/>Vanilla - </p><p className="Skills__Level A">{Langs[lang]["Spc_Advanced"]}</p></div>
                </div>
                <div className="Skills__content_box Skills__js">
                    <h3>JavaScript:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="res/img/Languages/api.ico" />fetch - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair"><p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://es.react.dev/favicon-32x32.png" alt="res/img/Languages/jsx.svg" />React - </p><p className="Skills__Level Ba">{Langs[lang]["Spc_Basic"]}</p></div>
                    <div className="Skills__box notpair last"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="res/img/Languages/js.ico" alt="res/img/Languages/js.ico"/>Vanilla - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                </div>
                <div className=" Skills__content_box Skills__html/css">
                    <h3>HTML/CSS:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="res/img/Languages/html-css.ico" />Vanilla - </p><p className="Skills__Level A">{Langs[lang]["Spc_Advanced"]}</p></div>
                    <div className="Skills__box pair last"><p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://tailwindcss.com/favicons/favicon-32x32.png" alt="res/img/Languages/tw.png" />telwing - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                </div>
                <div className="Skills__content_box Skills__others">
                    <h3>{Langs[lang]["Spc_Others"]}:</h3>
                    <div className="Skills__box notpair"><p className="Skills__Skill"><img className="Skills_Skill__icon" src="res/img/Languages/sql.ico" />SQL - </p><p className="Skills__Level B">{Langs[lang]["Spc_Biginer"]}</p></div>
                    <div className="Skills__box pair last"><p className="Skills__Skill"><Img className="Skills_Skill__icon" src="https://git-scm.com/favicon.ico" alt="res/img/Languages/git.ico"/>GIT - </p><p className="Skills__Level M">{Langs[lang]["Spc_Master"]}</p></div>

                </div>
            </div>
        </section>
    )
}

export default Skills