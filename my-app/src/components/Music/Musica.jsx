import React from 'react';
import { Caixa, Container, Main } from './Musica.styles.js'
function Musicas({ nome, cantor, estilo }) {
    return (
        <Main>
            <Container>
                <Caixa>
                    <h2>{nome}</h2>
                    <p>{cantor}</p>
                    <p>{estilo}</p>
                </Caixa>
            </Container>
        </Main>
    )
}

export default Musicas;