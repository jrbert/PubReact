import React, {useEffect, useState} from 'react';
import Musica from '../Music/Musica.jsx';
import api from '../service/api.js'
function RenderMusic(){
    
    const [musicas, setMusicas] = useState([]);
    
    useEffect(()=>{
        api.get('musicas').then(({data})=>{
            setMusicas(data.musicas);
        })
        console.log(musicas);

        //estint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(

        <main>
            {musicas?.map((musica)=>{
                <Musica
                key={musica.ID}
                id={musica.ID}
                nome={musica.NOME_DA_MUSICA}
                cantor={musica.CANTOR}
                estilo={musica.ESTILO}
                >

                </Musica>
            })}
        </main>
    )
}

export default RenderMusic;