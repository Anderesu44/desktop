import "./Mesenger/App.css"
import App from "./Mesenger/App.jsx"

function Mesenger() {
    let body = document.body
    document.title = "Send Mesenge - Desktop"
    body.setAttribute("class","msg")
    return(<App/>)
}

export default Mesenger