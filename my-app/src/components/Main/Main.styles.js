import styled from 'styled-components'

export const Conteudo = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,100;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap%27');


        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        background: #0F1E1D;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto;
    
    #imagemprincipal {
        display: inline-block;
        position: relative;
        grid-column-start: 1;
        grid-column-end: 4;
        
    }
    
    #legenda {
        position: absolute;
        top: 25vh;
        right: 35vw;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 75px;
        text-shadow: 0.1em 0.1em 0.1em #000000;
        animation: zoomIn 1.5s linear both;
    
    }
    #legenda:hover { 
        color: #48BCA7;
    }

    @keyframes zoomIn {
    from {
    transform: scale(0.4)
    }
    to {
    transform: scale(1);
    }
}

    #legenda1 {
        position: absolute;
        top: 40vh;
        right: 70vw;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 28px;
        text-shadow: 0.1em 0.1em 0.1em #000000;
        
    }

    #legenda1:hover {
        color: #48BCA7;
    }

    #legenda2 {
        position: absolute;
        top: 40vh;
        right: 37vw;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 28px;
        text-shadow: 0.1em 0.1em 0.1em #000000;

    }

    #legenda2:hover { 
        color: #48BCA7;
    }

    #legenda3 {
        position: absolute;
        top: 40vh;
        left: 70vw;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 28px;
        text-shadow: 0.1em 0.1em 0.1em #000000;

    }

    #legenda3:hover { 
        color: #48BCA7;
    }

    #foto {
        
        width: 100%;
        height: 78.4vh;
    }

    #subtitulo {
        display: inline-block;
        align-items: center;
        vertical-align: middle;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        height: 60px;
        background-color: #0F1E1D;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 18px;
        padding-left: 20px;
    }

    #subtitulo:hover { 
        color: #48BCA7;
    }

    #subtitulo2 {
        display: inline-block;
        align-items: center;
        vertical-align: middle;
        grid-column-start: 2;
        grid-column-end: 4;
        height: 60px;
        background-color: #0F1E1D;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 18px;

    }

    #subtitulo2:hover { 
        color: #48BCA7;
    }

    .linha1 {
        background-color: #0F1E1D;
        grid-column-start: 1;
        grid-column-end:5;
        
    }

    #linha {
        border-top: 0.4vh;
        border-style: solid;
        border-color: gray;
        grid-column-start: 1;
        grid-column-end:5;
        height: 2vh;
        background-color: #0F1E1D;
        margin-left: 10vh;
        margin-right: 13.7vh;
        padding-bottom: 1vh;
            
    }
    #linha2 {
        border-top: 0.4vh;
        border-style: solid;
        border-color: gray;
        grid-column-start: 1;
        grid-column-end:5;
        height: 2vh;
        background-color: #0F1E1D;
        margin-left: 10vh;
        margin-right: 13.7vh;
            
    }

    .prato {
        padding-top: 4vh;
        padding-left: 7vh;
    }

    .bebida {
        padding-top: 4vh;
    }
        
    #pratos1e2 {
        display: flex;
        flex-direction: row;
        width: 65vw;
        height: 45vh;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 6;
        grid-row-end: 7;
        padding-left: 10vh;
        padding-right: 10vh;
        background: #0F1E1D;

    }
    
    #pratos3e4 {
        display: flex;
        flex-direction: row;
        width: 65vw;
        height: 45vh;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 8;
        grid-row-end: 9;
        padding-left: 10vh;
        padding-right: 10vh;
        background: #0F1E1D;
    }

    #prato1 {
        display: flex;
        width: 35vw;
        height: 42vh;
        padding-right: 2vw;
        
        
    
    }

    #prato2 {
        display: flex;
        width: 32vw;
        height: 42vh;
        
    }

    #prato3 {
       
        display: flex;
        width: 32vw;
        height: 42vh;
        padding-right: 2vw;
        
    }

    #prato4 {
        display: flex;
        width: 35vw;
        height: 42vh;
        
    }

    .aside {
        display: flex;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 10;
        background: #0F1E1D;
        
    }

    #bebidas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 10;
        background: #004E67;
        width: 40vh;
        margin-bottom: 3.5vh;
        align-items: center;
        padding-bottom: 2vh;

    }

    #be1, #be2, #be3, #be4 {
        display: flex;
        width: 14vw;
        height: 24vh;
        
        
    }

    #tb {
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 15px; 
        text-align: center;

    }

    #tb:hover {
        color: #48BCA7;
    }


    #info {
        display: flex;
        flex: row;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 9;
        grid-row-end: 10;
        background-color: #0F1E1D;
        height: 23vh;
        width: 65vw;
        margin-bottom: 3.5vh;
        margin-left: 10vh;
        justify-content: space-between;
        padding-bottom: 4.2vh;
    }

    .sobre {
        padding-bottom: 2vh;
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        border-bottom: 0.4vh;
        border-style: solid;
        border-color: gray;
        margin-right: 28vh;

    }

    .sobre:hover {
        color: #48BCA7;
    }

    #sobrelgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;
        
    }

    #sobrelgd:hover {
        color: #48BCA7;
    }

    .drink {
        padding-bottom: 2vh;
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        border-bottom: 0.4vh;
        border-style: solid;
        border-color: gray;
        margin-right: 15vh;
        
    }

    .drink:hover {
        color: #48BCA7;
    }

    #drinklgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;
    }

    #drinklgd:hover {
        color: #48BCA7;
    }

    .pratos {
        padding-bottom: 2vh;
        border-bottom: 0.4vh;
        border-style: solid;
        border-color: gray;
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        margin-right: 15vh;
        
    }

    .pratos:hover {
        color: #48BCA7;
    }

    #pratolgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;

    }

    #pratolgd:hover {
        color: #48BCA7;
    }

    .equipe {
        padding-bottom: 2vh;
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        border-bottom: 0.4vh;
        border-style: solid;
        border-color: gray;
        margin-right: 8vh;

    }

    .equipe:hover {
        color: #48BCA7;
    }

    #equipelgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;

    }

    #equipelgd:hover {
        color: #48BCA7;
    }

`   


