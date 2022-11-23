//import { firebase } from "firebase/app";
//import { FirebaseError } from "firebase/app";
import { Link  } from "react-router-dom";
//import {ArrowLeft} from 'phosphor-react';
//import {auth} from"../../shared/services/firebase";
//import  React  from "react";

export function CadTurmas (){
    


    return(
        <div className="container">
            <Link to="/" id="link">
                 Voltar
            </Link>
            <h1>CadTurmas</h1>
            <form>
                <input type="text" 
                id="nameTurma" 
                placeholder="Digite a turma"
                />
                <button id="addTurma"> Adicionar</button>
            </form>
        </div>
        
    )
}