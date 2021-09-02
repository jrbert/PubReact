import styled from 'styled-components';

export const Func = styled.div`
    background-color: #0F1E1D;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    color: #5AEBD1;
    border: solid gray 0.3vh;
    padding-right: 1vh;
    padding-left: 1vh;
    width: 14.5vw;
    padding: 2vw;
    margin-left: 1vh;
    margin-right: 1vh;
    margin-bottom: 5vh;
    padding-bottom: 5vh;;

    h2 {
        
        padding-bottom: 1.5vh;
        font-size: 3vh;
    } 

    h2:hover {
        color: #5AEBD1;

    }

    #githubequipe {
        font-size: 1vw;
        flex-direction: wrap;
    }

    #linkedin {
        font-size: 1vw;
        flex-direction: wrap;
        padding-top: 2vh;
        
    }

    p:hover {
        color: #5AEBD1;
    }

    #github1 {
        text-decoration: none;
        font-style: italic;
        align-self: start;
        color: #5AEBD1;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: 0.2s ease-out;
        text-align: center;
        flex-wrap: wrap;
        padding-top: 1vh;
        font-size: 1vw;

        &:hover {
            opacity: 0.5;

        }
}

    #fotoequipe {
        display: flex;
        flex-direction: row;
        width: 15vw;
        height: 15vh;
    }

`