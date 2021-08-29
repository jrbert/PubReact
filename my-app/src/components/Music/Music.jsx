import React from 'react';
import { Caixa, Container, Main } from './Music.styles.js'
function Musicas({ nome, cantor, estilo, link }) {
    return (
        <Main>
            <Container>
                <Caixa>
                    <h2>{nome}</h2>
                    <p>{cantor}</p>
                    <p>{estilo}</p>
                    <a>{link}</a>
                </Caixa>
            </Container>
        </Main>
    )
}

export default Musicas;