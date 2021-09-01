import React,{useState} from 'react';
import {Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CloseIcon, CheckIcon} from './ForModal.style.js'

export default function FormModal(props) {


    if(!props.show){
        return null
    }

   
    return (
        <Overlay>
            <Container>
                <Header>
                    <h1><strong>Adicione uma musica para nossa playlist</strong></h1>
                    <button type="button" onClick={props.onClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor='nome'>Nome da Musica</label>
                            <input id='nome'type='text'/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='cantor'>Nome do Cantor</label>
                            <input id='nome'type='text'/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='estilo'>Estilo da Musica</label>
                            <input id='nome'type='text'/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='link'>Link da Musica no Youtube</label>
                            <input id='link' type='text'></input>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type='submit'>
                            <CheckIcon/>
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}