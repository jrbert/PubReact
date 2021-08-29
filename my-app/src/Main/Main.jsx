import React from 'react';
import { Conteudo } from './Main.styles.js';

const Main = () => {
    return (
        <Conteudo>
                <figure id="imagemprincipal">
                    <img id="foto" src="https://i.ibb.co/mq4BrrQ/Resilia-Pub3.png"/>   
                        <figurecaption id="figcap">Resilia Pub</figurecaption>
                </figure>
                <div id="pratos"></div>
                <div id="aside"></div>
                <div id="info"></div>
        </Conteudo>
    )
}

export default Main;