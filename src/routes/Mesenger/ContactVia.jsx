import "./ContactVia.css"
import { useState } from "react"

import { Langs } from "../../configs.json";

function Contact({lang}) {
    const [method,changeMethod] = useState("null")
    function Back() {
        return <button className="Send_msg_Contact__button back" onClickCapture={()=>{changeMethod("null")}}>{"<="}</button> 
    }
    return(
        <div className="Send_msg_Contact">
        {
         method === "email"?(<><Back/><input className="Send_msg_Form__input" type="email" id="input_contact-email" placeholder={Langs[lang]["Spc_Email"]}/></>):
         method === "tel" ? (<><Back/><input className="Send_msg_Form__input" type="tel" id="input_contact-tel" placeholder={Langs[lang]["Spc_Movile"]}/></>):
         method === "ws"? (<><Back/><input className="Send_msg_Form__input" type="tel" id="input_contact-ws" placeholder={Langs[lang]["Spc_WhatsApp"]}/></>):
        (<>
            <p className="Send_msg_Contact__title">{Langs[lang]["Send_msg_Contact__title"]}</p>
            <div className="Send_msg_Contact__buttons">
            <button className="Send_msg_Contact__button email"  onClickCapture={()=>{changeMethod("email")}}>{Langs[lang]["Spc_Email"]}</button> 
            <button className="Send_msg_Contact__button ws"  onClickCapture={()=>{changeMethod("ws")}}>{Langs[lang]["Spc_WhatsApp"]}</button>
            <button className="Send_msg_Contact__button tel"  onClickCapture={()=>{changeMethod("tel")}}>{Langs[lang]["Spc_Movile"]}</button> 
            </div>
        </>
        )}
        </div>
    )
}
export default Contact