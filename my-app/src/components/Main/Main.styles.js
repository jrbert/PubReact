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
        grid-column-start: 1;
        grid-column-end: 4;
        height: 78vh;
    
    }
    #foto {
        width: 100%;
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
        margin-right: 10vh;
            
    }

    .prato {
        padding-top: 4vh;
        padding-left: 7vh;
    }

    .bebida {
        padding-top: 4vh;
    }

    .pratos {
        display: flex;
        flex-wrap: wrap;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 5;
        grid-row-end: 7;
        background-color: #0F1E1D;
        height: 92vh;
        padding-left: 10vh;
        padding-right: 10vh;
        
    }

    #prato1 {
        
        display: flex;
        width: 82vh;
        height: 43vh;
        padding-right: 3vh;
    }

    #prato2 {
        
        display: flex;
        width: 56vh;
        height: 43vh;
        
    }

    #prato3 {
        padding-right: 3vh;
        display: flex;
        width: 56vh;
        height: 43vh;
        
    }

    #prato4 {
        display: flex;
        width: 82vh;
        height: 43vh;
    }

    #aside {
        display: flex;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 8;
        background: blue;
        padding-right: 20px;
        
    }

    #info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 7;
        grid-row-end: 8;
        background: pink;
        height: 100px;
    }
`


