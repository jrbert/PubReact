import React from 'react';
import { Conteudo } from './Main.styles.js';

const Main = () => {
    return (
        <Conteudo>
            <div id="imagemprincipal">
                <img id="foto" src="https://i.ibb.co/5BsNQCW/Resilia-Pubedit-SL.png" />
                <figcaption id="legenda">Resilia Pub</figcaption>
                <figcaption id="legenda1">Músicas boas</figcaption>
                <figcaption id="legenda2">Atendimento de qualidade</figcaption>
                <figcaption id="legenda3">Pratos deliciosos</figcaption>
            </div>
            <div id="subtitulo"> <h2 class="prato">Pratos Principais</h2> </div> 
            <div id="subtitulo2"> <h2 class="bebida">Bebidas</h2> </div>
            <div class="linha1"><div id="linha"></div></div>
            <div id="pratos1e2">
                <img id="prato1" src="https://i.ibb.co/23CFZrP/Roast-Beef.jpg"/>
                <img id="prato2" src="https://i.ibb.co/wsvbxNg/Fish-And-Chips.jpg"/>
            </div>
                <div id="pratos3e4">
                <img id="prato3" src="https://i.ibb.co/K6SCyZt/Bangers-And-Mash.jpg"/>
                <img id="prato4" src="https://i.ibb.co/9sqZn85/Blue-Cheese-Burguer.jpg"/>
            </div>
        
            <div class="aside">
                <div id="bebidas">
                    <img id="be1" src="https://i.ibb.co/0rLwX5W/Pina-Colada.png"/>
                    <p id="tb">Piña Colada</p>
                    <img id="be2" src="https://i.ibb.co/mHFq8xf/Mojito.png"/>
                    <p id="tb">Mojito</p>
                    <img id="be3" src="https://i.ibb.co/hHJQJtC/Cuba-Libre.png"/>
                    <p id="tb">Cuba Libre</p>
                    <img id="be4" src="https://i.ibb.co/X2x0mDP/Bloody-Mary.png"/>
                    <p id="tb">Bloody Mary</p>
                </div>
            </div>
            <div id="info"></div>
        </Conteudo>
    )
}

export default Main;