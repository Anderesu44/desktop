import Nav from "../../components/Nav"
import Img from "../../components/Img"
import Footer from "../../components/Footer"
import { useState } from "react"

function Contact() {
    const [method,changeMethod] = useState("null")
    function Back() {
        return <button className="Send_msg_Contact__button back" onClickCapture={()=>{changeMethod("null")}}>{"<="}</button> 
    }
    return(
        <div className="Send_msg_Contact">
        {
         method === "email"?(<><Back/><input className="Send_msg_Form__input" type="email" id="input_contact-email" placeholder="email"/></>):
         method === "tel" ? (<><Back/><input className="Send_msg_Form__input" type="tel" id="input_contact-tel" placeholder="movile"/></>):
         method === "ws"? (<><Back/><input className="Send_msg_Form__input" type="tel" id="input_contact-ws" placeholder="Whatsapp"/></>):
        (<>
            <p className="Send_msg_Contact__title">¿Como contactamos contigo?</p>
            <div className="Send_msg_Contact__buttons">
            <button className="Send_msg_Contact__button email"  onClickCapture={()=>{changeMethod("email")}}>Correo </button> 
            <button className="Send_msg_Contact__button ws"  onClickCapture={()=>{changeMethod("ws")}}>Whatsapp</button>
            <button className="Send_msg_Contact__button tel"  onClickCapture={()=>{changeMethod("tel")}}>Movile</button> 
            </div>
        </>
        )}
        </div>
    )
}
function semanticCheck(value,type) {
    if (type == "tel"){
        if (value.length < 8 | (!Number(value.replace("+53","").replace(".","N").replace("+","E")))){
            return false
        }else{
            return value
        }
    }else if (type == "ws"){
        if (value.length < 8 | (!Number(value.replace("+","").replace(".","N")))){
            return false
        }else{
            return value
        }
    }else{
        if (value.length < 12 | (value.split("@").length != 2)){
            return false
        }
        if ((value.split("@")[1].length < 3) | (value.split("@")[1].split(".").length != 2)){
            return false
        }
        if (value.split("@")[1].split(".")[1] != "com"){
            return false    
        }else{
            return value
        }
    }
} 
function sendMessage() { 
    const inputs = document.getElementsByClassName("Send_msg_Form__input")
    if (inputs.length != 3){
        const win = document.getElementById("Emerging-Window")
        win.setAttribute("select","True")
        return false
    }
    const input_name = document.getElementById("input__name")
    const name_text = input_name.value

    const methods = ["email","ws","tel"]
    let method
    let way
    for (let i = 0; i < methods.length; i++) {
        const temp = methods[i];
        const input_way = document.getElementById(`input_contact-${temp}`)
        if (input_way){
            method = temp
            way = semanticCheck(input_way.value.toLowerCase() ,method)
            break
        }
    }

    const input_message = document.getElementById("input_Message")
    const message_text = input_message.value
    
     
    console.log(name_text,method,way,message_text)
    clearInputs()
}
function clearInputs() {
    const inputs = document.getElementsByClassName("Send_msg_Form__input")
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.value = ""
    }
}
function App() {
    const [Lang,changeLang] = useState("EN")
    return(
    <>
        <Nav lang={Lang} langSwitch={changeLang} />
        <main>
            <div className="Send_msg">
                <div>
                    <Img className="Send_msg__icon" src="res/Ui/directo.png"/>
                </div>
                <div className="Send_msg__Form">
                    <input className="Send_msg_Form__input"type="text" placeholder="Name" id="input__name"/>
                    <Contact/>
                    <textarea className="Send_msg_Form__input text" id="input_Message" placeholder="Message"/>
                    <button className="Send_msg_Contact__button" onClickCapture={sendMessage}>Send</button>
                </div>
            </div>
        </main>
        <aside className="new_wind" select="False" id="Emerging-Window" onClickCapture={({target})=>{target.setAttribute("select","False")}}>
            <div className="mini_wind">
                <div className="mini_wind__title">
                    <h3 className="mini_wind_title__text">¡Rellene todos los campos correctamente!</h3>
                </div>
                <div className="mini_wind__msg">
                    <p className="mini_wind_msg__text " id="msg">Indique un nombre para identificarle, indique una via para que podamos contactarle e indique el mensaje que quiere enviarnos</p>
                </div>
            </div>
        </aside>
        <aside className="new_wind" select="True" id="Emerging-Window" onClickCapture={({target})=>{location.href="/#/"}}>
            <div className="mini_wind">
                <div className="mini_wind__title">
                    <h3 className="mini_wind_title__text">¡Opcion suspendida!</h3>
                </div>
                <div className="mini_wind__msg">
                    <p className="mini_wind_msg__text " id="msg">Lo siento devido a problemas en donde se almacenaba el back-end esta opsion no esta funcionando pero puede contactarme por los demas metodos</p>
                </div>
            </div>
        </aside>
        <aside>
            <p>Hago todo tipo de trabajo en front-end y cubro tambien algunos campos del back-end si no eres del mundo del desarrollo no dudes en contactarme, cuentame tu idea y te dire si puedo o no, puedo maquetar casi cualquier sitio web que te imajines, tambien desarrollo aplicasiones para ordenador asi que si tienes un negocio y nesesitas una app finansiera y niguna se ajusta a tus necesidades porque no tener una completamente personalisada</p>
        </aside>

        <Footer lang={Lang}/>    
    </>)
}
export default App