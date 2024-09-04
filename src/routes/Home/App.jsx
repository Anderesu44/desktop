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
        <Nav className="H-Nav" lang={Lang} langSwitch={changeLang} />
        <Header className="H-Header" lang={Lang}/>
        <Skills className="H-Skills" lang={Lang}/>
        <Projects className="H-Projects" lang={Lang}/>
        {/*<Works/> */}
        <Footer className="H-Footer" lang={Lang} location="Home"/>
        </>
    )
}
export default App