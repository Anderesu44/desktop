import ReactDOM from 'react-dom/client'
import Router  from "./router"
import "./index.css"


export function scrollToElement(id){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

ReactDOM.createRoot(document.body).render(<Router/>)

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const body = document.body
body.setAttribute("theme",isDark?"Dark":"Light")

