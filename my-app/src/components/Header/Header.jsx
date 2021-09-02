//packages
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Header.styles.js';

const Header = () => {
    return (
        <Menu>
            <nav>
                <ul>
                    <li id='resiliapub'><Link to="/">Resilia Pub</Link></li>
                    <li><Link to="/cardapio">Cardápio</Link></li>
                    <li><Link to="/musicas">Músicas</Link></li>
                    <li><Link to="/equipe">Nossa Equipe</Link></li>
                </ul>
            </nav>
        </Menu>

    )
}

export default Header;