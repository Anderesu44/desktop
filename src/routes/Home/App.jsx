import Nav from "../../components/Nav.jsx"
import Header from "./Header.jsx"
import Footer from "../../components/Footer.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
// import Works from "./Works.jsx"

import { useState } from "react"

function App(){
    const [Lang,changeLang] = useState("EN")
    return (
        <>
        <Nav lang={Lang} langSwitch={changeLang} />
        <Header lang={Lang}/>
        <Skills lang={Lang}/>
        <Projects lang={Lang}/>
        {/*<Works/> */}
        <Footer lang={Lang}/>
        </>
    )
}
export default App