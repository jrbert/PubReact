import React, { useEffect, useState } from 'react';
import Musicas from '../Music/Music.jsx';
import api from '../../service/api.js'
import { Container, Box } from './RenderMusic.style.js'
import AddMusica from '../AddMusica/AddMusica.jsx';

function RenderMusic() {

    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        api.get('musicas').then(({ data }) => {
            setMusicas(data);
            console.log(musicas);
        })

        //estint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        
        <div>
            <Box>
            <h1>Nossa Playlist</h1>
            </Box>
            <Container>
                {musicas?.map((musica) => {
                    return (
                        <Musicas
                            key={musica.ID}
                            id={musica.ID}
                            nome={musica.Nome_da_musica}
                            cantor={musica.Cantor}
                            estilo={musica.Estilo}
                            link={musica.Link}
                        />)
                })}
                <AddMusica />
            </Container>
        </div>
        
    )
}

export default RenderMusic;