import React from 'react';
import { Conteudo } from './Main.styles.js';

const Main = () => {
    return (
        <Conteudo>
            <figure id="imagemprincipal">
                <img id="foto" src="https://i.ibb.co/mq4BrrQ/Resilia-Pub3.png" />
            </figure>
            <div id="subtitulo"> <h2 class="prato">Pratos Principais</h2> </div> 
            <div id="subtitulo2"> <h2 class="bebida">Bebidas</h2> </div>
            <div class="linha1"><div id="linha"></div></div>
            <div class="pratos">
                <img id="prato1" src="https://i.ibb.co/23CFZrP/Roast-Beef.jpg"/>
                <img id="prato2" src="https://i.ibb.co/wsvbxNg/Fish-And-Chips.jpg"/>
                <img id="prato3" src="https://i.ibb.co/K6SCyZt/Bangers-And-Mash.jpg"/>
                <img id="prato4" src="https://i.ibb.co/9sqZn85/Blue-Cheese-Burguer.jpg"/>
            </div>
            <div id="aside"></div>
            <div id="info"></div>
        </Conteudo>
    )
}

export default Main;