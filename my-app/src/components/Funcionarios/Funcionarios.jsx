import React from 'react';
import {Func} from './Funcionarios.styles.js';


function Funcionarios ({nome, github, linkedin}){
    return(
        <Func>
            <h2>{nome}</h2>
            <p id="names">Github: <a>{github}</a></p>
            <p id="linkedin">Linkedin: <a>{linkedin}</a></p>
        </Func>
    )
}

export default Funcionarios;