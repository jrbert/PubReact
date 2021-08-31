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

    #foto {
        
        width: 100%;
        height: 78vh;
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
    .linha1 {
        background-color: #0F1E1D;
        grid-column-start: 1;
        grid-column-end:5;
        
    }

    #linha {
        border-top: 2px;
        border-style: solid;
        border-color: gray;
        grid-column-start: 1;
        grid-column-end:5;
        height: 10px;
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
    }

    .sobre {
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
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
    .drink {
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        //padding-left: 3vw;
    }

    #drinklgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        //padding-left: 3vw;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;
    }

    .pratos {
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        //padding-left: 3vw;
        
    }

    #pratolgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        //padding-left: 3vw;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;
    }

    .equipe {
        padding-top: 6vh;
        color: #5AEBD1;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        font-size: 20px; 
        text-align: start;
        //padding-left: 3vw;
    }

    #equipelgd {
        padding-top: 4vh;
        color: #28CCAE;
        font-family: 'Lato', sans-serif;
        font-size: 12px; 
        text-align: start;
        //padding-left: 3vw;
        letter-spacing: normal;
        letter-spacing: 0em;
        letter-spacing: 1px;
        letter-spacing: 1px;
    }
`   

