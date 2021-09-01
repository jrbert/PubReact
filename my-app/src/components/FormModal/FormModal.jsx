import React, { useState } from 'react';
import { Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CloseIcon, CheckIcon } from './ForModal.style.js'
import api from '../../service/api'

export default function FormModal(props) {

    const [nome, setNome] = useState('');
    const [cantor, setCantor] = useState('');
    const [estilo, setEstilo] = useState('');
    const [link, setLink] = useState('');

    if (!props.show) {
        return null
    }

    function nomeHandler(event) {
        setNome(event.target.value)
    }
    function cantorHandler(event) {
        setCantor(event.target.value)
    }
    function estiloHandler(event) {
        setEstilo(event.target.value)
    }
    function linkHandler(event) {
        setLink(event.target.value)
    }

    function handleSubmit(event) {
        const musica = {
            nome, cantor, estilo, link
        }
        api.post('musicas', musica)
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
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                            <label htmlFor='nome' >Nome da Musica</label>
                            <input id='nome' type='text' value={nome} onChange={nomeHandler} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='cantor'>Nome do Cantor</label>
                            <input id='cantor' type='text' value={cantor} onChange={cantorHandler} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='estilo'>Estilo da Musica</label>
                            <input id='estilo' type='text' value={estilo} onChange={estiloHandler} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor='link'>Link da Musica no Youtube</label>
                            <input id='link' type='text' value={link} onChange={linkHandler}></input>
                        </InputGroup>
                    </FormMain>
                    <Footer>
                        <button type='submit'>
                            <CheckIcon />
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}