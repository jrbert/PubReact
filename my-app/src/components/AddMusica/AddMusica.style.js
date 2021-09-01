import styled from 'styled-components';
import {IoAdd} from 'react-icons/io5'
export const AddMusicaButton = styled.button`
    border: 5px dashed #5AEBD1;
    background-color: rgba(0,0,0, 0.04);

    padding: 10px;
    height: 175px;
    width: 250px;
    margin-top: 5px;
    cursor: pointer;

    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const AddIcon = styled(IoAdd)`
    stroke: #5AEBD1;
    width: 64px;
    height: 64px;
`