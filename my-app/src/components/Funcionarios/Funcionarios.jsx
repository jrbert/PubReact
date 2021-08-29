import React from 'react';

function Funcionarios ({nome, github, linkedin}){
    return(
        <div>
            <h2>{nome}</h2>
            <p>Github:<a>{github}</a></p>
            <p>Linkedin:<a>{linkedin}</a></p>
        </div>
    )
}

export default Funcionarios;