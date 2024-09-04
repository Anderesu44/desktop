import {HashRouter as HRouter, Routes, Route, } from "react-router-dom"
import Home from './routes/Home.jsx'
import Mesenger from "./routes/Mesenger.jsx"

function Router(){
    return(
        <HRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="msg" element={<Mesenger/>}/>
            </Routes>
        </HRouter>
    )
}



export default Router