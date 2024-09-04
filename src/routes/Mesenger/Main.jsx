import "./Main.css"
import Img from "../../components/Img"
import { Langs } from "../../configs.json";

import Contact from "./ContactVia.jsx"

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
        const win = document.getElementById("EmergingWindow-1")
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

    //? conexion con mi API
    //!Arreglalo

    // const url = `http://127.0.0.1:8000/sendmsg/${name_text}/${method}/${way.replace("+","%2B")}/${message_text}`

    // const data = {
    // // Aquí puedes agregar cualquier dato adicional que necesites enviar
    // }
    // fetch(url, {
    // method: 'POST', // Método de la petición
    // headers: {'Content-Type': 'application/json'/* Tipo de contenido*/},body: JSON.stringify(data) /* Convertir los datos a JSON*/})
    // .then(response => response.json()) // Convertir la respuesta a JSON
    // .then(data => {
    // console.log('Success:', data); // Manejar la respuesta
    // })
    // .catch((error) => {
    // console.error('Error:', error); // Manejar errores
    // });
    // win = document.getElementById("EmergingWindow-1")
    // if (win){
    //     win.setAttribute("select","True")
    // }
    clearInputs()
}
function clearInputs() {
    const inputs = document.getElementsByClassName("Send_msg_Form__input")
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.value = ""
    }
}

function Main({lang}) {
    return (
        <main className="M-Main">
            <div className="Send_msg">
                <div>
                    <Img className="Send_msg__icon" src="res/Ui/directo.png"/>
                </div>
                <div className="Send_msg__Form">
                    <input className="Send_msg_Form__input"type="text" placeholder={Langs[lang]["Spc_Name"]} id="input__name"/>
                    <Contact lang={lang}/>
                    <textarea className="Send_msg_Form__input text" id="input_Message" placeholder={Langs[lang]["Spc_Message"]}/>
                    <button className="Send_msg_Contact__button" onClickCapture={sendMessage}>{Langs[lang]["Spc_Send"]}</button>
                </div>
            </div>
            <div className="Info">
                <p className="Info_text">{Langs[lang]["Info_text"]}</p>
            </div>
        </main>
    )
}

export default Main