import React from 'react';

function Musicas({id, nome, cantor, estilo}){
    return(
        <main>
            <h2>{nome}</h2>
            <p>{cantor}</p>
            <p>{estilo}</p>
        </main>
    )
}

export default Musicas;