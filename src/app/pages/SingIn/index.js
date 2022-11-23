import './styles.css'
import {GoogleLogo} from 'phosphor-react'
/*import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "../../../../node_modules/firebase/auth";
import { auth } from "../../shared/services/firebase";*/
import { Link } from "react-router-dom";

export function SignIn(){

    return (
        <div className="container">
            <h1>Acesse sua conta</h1>
            <span>
                Utilizando atenticação social, por exemplo, atenticação com google você <br/>
                Facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
            </span>
            
                <button type="button" className="button">
                    <GoogleLogo/>
                    Entrar com o google
                </button>
                <Link to="/home" id='link'>Home
                </Link>
            
            <Link to="/cadTurmas">CadTurmas</Link>
            
            <Link to="/cadHorarios">CadHorarios</Link>
        </div>
        


    )
}