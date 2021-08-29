import styled from 'styled-components'

export const Conteudo = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,100;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap%27');


        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        background: #7159c1;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto;
    
    
    #imagemprincipal {
        display: inline-block;
        grid-column-start: 1;
        grid-column-end: 4;
        height: 500px;
    
    }
    #foto {
        width: 100%;
    }

    #pratos {
        grid-column-start: 1;
        grid-column-end: 2;
        background: green;
        height: 60vh;
    }

    #aside {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
        background: blue;
        
    }

    #info {
        grid-column-start: 1;
        grid-column-end: 2;
        background: pink;
        height: 100px;
}
`


