import ReactDOM from 'react-dom/client'
import Router  from "./router"
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(<Router/>)

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const body = document.body
body.setAttribute("theme",isDark?"Dark":"Light")

//? window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event)=>{
//?     const isDark = event.matches
//?     body.setAttribute("theme",isDark?"Dark":"Light")
//? })
//!Arregla esto 
