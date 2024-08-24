import { BrowserRouter as BRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home.jsx'

function Router(){
    return(
        <BRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BRouter>
    )
}



export default Router