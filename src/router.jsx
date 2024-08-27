import {BrowserRouter as BRouter, Routes, Route, } from "react-router-dom"
import Home from './routes/Home.jsx'
import Mesenger from "./routes/Mesenger.jsx"

function Router(){
    return(
        <BRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/msg" element={<Mesenger/>}/>
            </Routes>
        </BRouter>
    )
}



export default Router