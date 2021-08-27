import styled from 'styled-components'

const Menu = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,100;1,400&display=swap');
display: flex;
background: #0F1E1D;

nav {
    width: 100%;
    padding: 25px;
    justify-content: space-around;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
}
li a {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    color: #5AEBD1;
}
#resiliapub {
    font-weight: bold;
   
}
`;

export default Menu;