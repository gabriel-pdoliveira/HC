import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadTurmas, SignIn, CadHorario, Dashboard } from "../pages";

export const Rota = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/cadTurmas" element={<CadTurmas/>}/>
                <Route path="/cadHorarios" element={<CadHorario/>}/>
                <Route path="/home" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}