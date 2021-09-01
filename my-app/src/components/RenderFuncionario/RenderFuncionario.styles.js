import styled from 'styled-components';

export const Main = styled.main`
    background-color: #0F1E1D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    color: white;
    height: 65vh;
    width: 100%;
    font-size: 1vh 1vw;

   
`
export const Fotos = styled.div`
    background-color: #0F1E1D;
    color:#5AEBD1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    h1 {
        font-size: 10vh;
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
        border-style: solid;
        border-color: white;
    }
`

export const Dados = styled.div`
    display: flex;
    flex-direction: row;
`