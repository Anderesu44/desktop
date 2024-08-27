import ReactDOM from 'react-dom/client'
import Router  from "./router"
import "./index.css"


ReactDOM.createRoot(document.body).render(<Router/>)

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const body = document.body
body.setAttribute("theme",isDark?"Dark":"Light")

