import React, {useEffect, useState} from 'react';
import Funcionarios from '../Funcionarios/Funcionarios.jsx'
import api from '../../service/api.js';

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
       <main>
           {funcionarios?.map((funcionario)=>{
               return(<Funcionarios 
                    key={funcionario.ID}
                    id={funcionario.ID}
                    nome={funcionario.Nome}
                    github={funcionario.GitHub}
                    linkedin={funcionario.Linkedin}
               />)
           })}
       </main>
   ) 
}

export default RenderFuncionarios;