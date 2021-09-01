import React, {useContext,useState} from 'react';



import {AddMusicaButton, AddIcon} from './AddMusica.style.js'

import FormModal from '../FormModal/FormModal.jsx'


function AddMusica(){
    
    const [show, setShow] = useState(false)
    
    return(
        <div>
            <AddMusicaButton  onClick={()=>setShow(true)}>
                <AddIcon/>
            </AddMusicaButton>
            <FormModal show={show} onClose={()=> setShow(false)}/>
    
            
        </div>
    )
}

export default AddMusica;