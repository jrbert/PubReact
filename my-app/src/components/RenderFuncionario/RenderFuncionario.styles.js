import styled from 'styled-components';
export const Box = styled.div`
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
    background-color: #0F1E1D;
    color:#5AEBD1;
    display: flex;
    justify-content: center;

    
    
    h1 {
        margin-top: 10px;
        font-family: 'PT Serif', serif;
        font-weight: 700;
        font-size: 10vh;
        margin-bottom: 10vh;
    }
`

export const Main = styled.main`
    background-color: #0F1E1D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //vertical-align: middle;
    height: 85vh;
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
    width: 100%;
    margin-bottom: 3vh;
   
    img {
        width: 12vw;
        height: 25vh;
        padding-bottom: 2vh;
    }
`