import React from 'react';
import {Func} from './Funcionarios.styles.js';


function Funcionarios ({nome, github, linkedin, imagem}){
    return(
        <Func>
            <img src={imagem}></img>
            <h2>{nome}</h2>
            <p id="githubequipe">Github: <a id="github1" href={github} target="_blank">{github}</a></p>
            <p id="linkedin">Linkedin: <a id="github1" href={linkedin} target="_blank">{linkedin}</a></p>
        </Func>
    )
}

export default Funcionarios;