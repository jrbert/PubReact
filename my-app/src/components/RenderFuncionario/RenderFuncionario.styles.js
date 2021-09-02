import styled from 'styled-components';

export const Main = styled.main`
    background-color: #0F1E1D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 90vh;
    width: 100%;

`
export const Fotos = styled.div`
    background-color: #0F1E1D;
    color:#5AEBD1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
        font-size: 18px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        font-family: 'Playfair Display', sans-serif;
        font-weight: bold; 
        color:#5AEBD1;
        border-style: solid;
        border-color: white;
        height: 25vh;
        width: 100%;
        justify-content: center;
    }

    #nossosquadros {
        display: flex;
    }

    #fotosequipe {
        display: flex;
        flex-direction: inline;
        flex-wrap: nowrap;
        justify-content: center;
        height: 25vh; 
        width: 100%;
        
    }
`

export const Dados = styled.div`
    display: flex;
    flex-direction: row;
   
    img {
        width: 12vw;
        height: 25vh;
        padding-bottom: 2vh;
    }
`