//packages
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
//styles 
=======
>>>>>>> 2baa76c6ca7dea987b87d0136398a66c95437b5f
import { Menu } from './Header.styles.js'

const Header = () => {
    return (
        <Menu>
            <nav>
                <ul>
<<<<<<< HEAD
                    <li id="resiliapub"><Link to="/resilia-pub">Resilia Pub</Link></li>
=======
                    <li id='resiliapub'><Link to="/resilia-pub">Resilia Pub</Link></li>
>>>>>>> 2baa76c6ca7dea987b87d0136398a66c95437b5f
                    <li><Link to="/cardapio">Cardápio</Link></li>
                    <li><Link to="/musicas">Músicas</Link></li>
                    <li><Link to="/equipe">Nossa Equipe</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </Menu>

    )
}

export default Header;