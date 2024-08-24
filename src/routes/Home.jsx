import App from "./Home/App.jsx"
import "./Home/App.css"

function Home() {
    const root = document.body
    root.setAttribute("class","home")

    return(<App/>)
}

export default Home