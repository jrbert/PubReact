import React, {useEffect, useState} from 'react';
import Musicas from '../Music/Musica.jsx';
import api from '../../service/api.js'

function RenderMusic(){
    
    const [musicas, setMusicas] = useState([]);
    
    useEffect(()=>{
        api.get('musicas').then(({data})=>{
            setMusicas(data);
            console.log(musicas);
        })

        //estint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <main>
            {musicas?musicas.map((musica)=>{
                return(
                <Musicas
                key={musica.ID}
                id={musica.ID}
                nome={musica.NOME_DA_MUSICA}
                cantor={musica.CANTOR}
                estilo={musica.ESTILO}
                />)
            
            }): "Não deu bom"}
        </main>
    )
}

export default RenderMusic;