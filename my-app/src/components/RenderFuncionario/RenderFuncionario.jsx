import React, {useEffect, useState} from 'react';
import Funcionarios from '../Funcionarios/Funcionarios.jsx'
import api from '../../service/api.js';
import {Main} from './RenderFuncionario.styles.js';
import {Fotos} from './RenderFuncionario.styles';

function RenderFuncionarios(){
   
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(()=>{
        api.get('funcionarios').then(({data})=>{
            setFuncionarios(data)
            console.log(funcionarios)
        })
        //estint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   
    return( 
        <div>
            <Fotos>
                <div id="equipetitulo"><h1>Nosso time</h1></div>
                <div id="nossosquadros">
                    <div id="fotosequipe">
                    <img src="https://i.ibb.co/xSQfptS/22406083-1199902370153648-1535514617940215523-n.jpg(Glauco)" />
                    <img src="https://i.ibb.co/GR85rFb/32900257-1712367858823159-2344562835171835904-n.jpg"/>
                    <img src="https://i.ibb.co/6BCTFf2/IMG-20210831-WA0024.jpg(Bruna)"/>
                    <img src="https://i.ibb.co/NSFSGnZ/IMG-20210831-WA0023.jpg(Pedro)"/>
                    <img src="https://i.ibb.co/dsvF0v2/43676322-2249110561827294-4028607782377750528-n-1.jpg(Junior)"/>
                    </div>
                </div>
            </Fotos>
        <Main>
           {funcionarios?.map((funcionario)=> {
               return(<Funcionarios 
                    key={funcionario.ID}
                    id={funcionario.ID}
                    nome={funcionario.Nome}
                    github={funcionario.GitHub}
                    linkedin={funcionario.Linkedin}
               />)
           })}
       </Main>
    </div>   
   ) 
}

export default RenderFuncionarios;