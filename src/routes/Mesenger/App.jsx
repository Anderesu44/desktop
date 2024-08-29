import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import EmergingWindow from "../../components/EmergingWindow.jsx";
import { Langs } from "../../configs.json";

import Main from "./Main.jsx";
import { useState } from "react"



function App() {
    const [Lang,changeLang] = useState("EN")
    return(
    <>
        <Nav lang={Lang} langSwitch={changeLang} />
        <Main lang={Lang}/>
        <Footer lang={Lang}/>    

        <EmergingWindow init id="EmergingWindow-0" title={Langs[Lang]["Error_wind_title"]}>{Langs[Lang]["Error_wind_msg"]}</EmergingWindow>
        <EmergingWindow  id="EmergingWindow-1" title={Langs[Lang]["Suspended_wind_title"]} onClickCapture={({target})=>{/*location.href="/#/"*/}}>{Langs[Lang]["Suspended_wind_msg"]}</EmergingWindow>
    </>)
}
export default App