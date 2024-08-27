import { BrowserRouter as BRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home.jsx'
import Mesenger from "./routes/Mesenger.jsx"

function Router(){
    return(
        <BRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/msg" element={<Mesenger/>}/>
            </Routes>
        </BRouter>
    )
}



export default Router