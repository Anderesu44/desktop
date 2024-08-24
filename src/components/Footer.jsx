import "./Footer.css"
import Img from "../components/Img.jsx"

function Footer({children,className}){
    return(
        <footer className={className ? `Footer ${className}`: "Footer"}>
            <div className="Footer__tilte">
            <h3 className="Footer_tilte__text">Portafolios Laboral</h3>
            <ul className="Footer_tilte__list">
                <li><a className="Footer_tilte__link" href="#">Top</a></li>
                <li><a className="Footer_tilte__link" href="#Sumary">Sumary</a></li>
                <li><a className="Footer_tilte__link" href="#Skills">Skills</a></li>
                <li><a className="Footer_tilte__link" href="#Projects">Projects</a></li>
            </ul>
            </div>
            <div className="Footer_Contact">
                <h3 className="Footer__Contact_title" >Contactame:</h3>
                <a className="Footer__link" href="http://localhost:5174/"target="_blank">Mensage directo<Img className="Footer__link__icon" src="/res/a44.ico" /></a>
                <a className="Footer__link" href="https://www.facebook.com/profile.php?id=100078431937752" target="_blank">Facebook <Img className="Footer__link__icon" src="https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico"/></a>
                <a className="Footer__link" href="https://mail.google.com/mail/?view=cm&fs=1&to=anderesu44@gmail.com" target="_blank">Gmail <Img className="Footer__link__icon" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" /></a>
            </div>
            <div className="Footer__creditos">
            <a className="Footer__link" href="https://www.instagram.com/melred39?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title="MelRed instagram" target="_blank">Avatar image by MelRed</a>
            <a className="Footer__link" href="https://www.flaticon.es/iconos-gratis/palanca" title="palanca iconos" target="_blank">iconos creados por Icon Mela - Flaticon</a>
            </div>
            
            <p className="Footer__firma">Pagina Diseñada por A44</p>
        </footer>
    )
}
export default Footer