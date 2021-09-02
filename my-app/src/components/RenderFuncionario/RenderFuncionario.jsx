import React, { useEffect, useState } from 'react';
import Funcionarios from '../Funcionarios/Funcionarios.jsx'
import api from '../../service/api.js';
import { Main, Dados, Box } from './RenderFuncionario.styles.js';


function RenderFuncionarios() {

    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        api.get('funcionarios').then(({ data }) => {
            setFuncionarios(data)
            console.log(funcionarios)
        })
        //estint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Main>
            <Box>
            <h1>Nossa Equipe</h1>
            </Box>
            <Dados>
            {funcionarios?.map((funcionario) => {
                return (<Funcionarios
                    key={funcionario.ID}
                    id={funcionario.ID}
                    nome={funcionario.Nome}
                    github={funcionario.GitHub}
                    linkedin={funcionario.Linkedin}
                    imagem={funcionario.Imagem}
                />)
            })}
            </Dados>
            <div className ="espaco"></div>
            
        </Main>

    )
}

export default RenderFuncionarios;