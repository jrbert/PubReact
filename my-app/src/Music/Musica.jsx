import React from 'react';
import {Container} from './Musica.styles.js'
function Musicas({ id, nome, cantor, estilo }) {
    return (
        <main>
            <Container>
                <h2>{nome}</h2>
                <p>{cantor}</p>
                <p>{estilo}</p>
            </Container>
        </main>
    )
}

export default Musicas;