import React from 'react';

function Musicas({id, nome, cantor, estilo}){
    return(
        <div>
            <h2>{nome}</h2>
            <p>{cantor}</p>
            <p>{estilo}</p>
        </div>
    )
}

export default Musicas;