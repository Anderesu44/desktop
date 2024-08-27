import {BrowserRouter as BRouter, Routes, Route, } from "react-router-dom"
import Home from './routes/Home.jsx'
import Mesenger from "./routes/Mesenger.jsx"

function Router(){

    const publicUrl = process.env.PUBLIC_URL || 'https://anderesu44.github.io/desktop/'
    return(
        <BRouter basename={publicUrl}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/msg" element={<Mesenger/>}/>
            </Routes>
        </BRouter>
    )
}



export default Router