import styled from 'styled-components';

export const Caixa = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap%27');
    background-color: #004E67;
    margin: 5px 10px 10px 5px;
    padding: 15px;
    height: 150px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: nowrap;
    color:#5AEBD1;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    
    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 600;
    }

    a{
        text-decoration: none;
        border-left: 3px solid #bbbbbb;
        padding-left: 10px;
        max-width: 230px;

        color: #999999;
        font-style: italic;
        align-self: start;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        transition: 0.2s ease-out;

        &:hover {
            opacity: 0.5;
        }
}
`
