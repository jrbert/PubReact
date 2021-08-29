import React from 'react';
import {Main} from './Funcionarios.styles.js'
function Funcionarios ({nome, github, linkedin}){
    return(
        <Main>
            <h2>{nome}</h2>
            <p>Github: <a>{github}</a></p>
            <p>Linkedin: <a>{linkedin}</a></p>
        </Main>
    )
}

export default Funcionarios;