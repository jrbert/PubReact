import React from 'react';
import { Caixa, Container, Main } from './Music.styles.js'
function Musicas({ nome, cantor, estilo, link }) {
    return (
        <Caixa>
            <h1>{nome}</h1>
            <p>{cantor}</p>
            <p>{estilo}</p>
            <a href={link} target="_blank">{link}</a>
        </Caixa>
    )
}

export default Musicas;