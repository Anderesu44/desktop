import "./Footer.css"
import Img from "../components/Img.jsx"
import {scrollToElement} from "../main.jsx"
import { toHome } from "../main";
import { Langs } from "../configs.json";

function Footer({lang,className,location}){
    return(
        <footer className={className ? `Footer ${className}`: "Footer"}>
            <div className="Footer__tilte">
            <h3 className="Footer_tilte__text">{Langs[lang]["Footer_tilte__text"]}</h3>
            {location === "Home"? 
            (<ul className="Footer_tilte__list">
                <li><a className="Footer_tilte__link" onClickCapture={()=>{scrollToElement("Top")}}>Top</a></li>
                <li><a className="Footer_tilte__link" onClickCapture={()=>{scrollToElement("Sumary")}}>Sumary</a></li>
                <li><a className="Footer_tilte__link" onClickCapture={()=>{scrollToElement("Skills")}}>Skills</a></li>
                <li><a className="Footer_tilte__link" onClickCapture={()=>{scrollToElement("Projects")}}>Projects</a></li>
            </ul>):
            (<ul className="Footer_tilte__list">
                <li><a className="Footer_tilte__link" onClickCapture={()=>{toHome()}}>Home</a></li>
                <li><a className="Footer_tilte__link" onClickCapture={()=>{scrollToElement("Top")}}>Top</a></li>
            
            </ul>)
            }
            </div>
            <div className="Footer_Contact">
                <h3 className="Footer__Contact_title" >{Langs[lang]["Footer__Contact_title"]}:</h3>
                <a className="Footer__link" href="/#/msg">{Langs[lang]["Footer__link_direct_mesenger"]}<Img className="Footer__link__icon" src="res/Ui/avion-de-papel.svg" /></a>
                <a className="Footer__link" href="https://www.facebook.com/profile.php?id=100078431937752" target="_blank">Facebook<Img className="Footer__link__icon" src="https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico"/></a>
                <a className="Footer__link" href="https://mail.google.com/mail/?view=cm&fs=1&to=anderesu44@gmail.com" target="_blank">Gmail<Img className="Footer__link__icon" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" /></a>
            </div>
            <div className="Footer__creditos">
            <a className="Footer__link" href="https://www.flaticon.en" target="_blank">{Langs[lang]["Footer__link_cradits_icons"]}</a>
            <a className="Footer__link" href="https://www.instagram.com/melred39?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title="MelRed instagram" target="_blank">{Langs[lang]["Footer__link_credits_mel"]}</a>
            </div>
            
            <p className="Footer__firma">{Langs[lang]["Footer__firma"]}</p>
        </footer>
    )
}
export default Footer