import React from 'react'

const Header = () => {
    return (
        <Menu>
            <nav>
                <ul>
                    <li><link to="/resilia-pub">Pub Resilia</link></li>
                    <li><link to="/cardapio">Cardápio</link></li>
                    <li><link to="/musicas">Músicas</link></li>
                    <li><link to="/equipe">Nossa Equipe</link></li>
                    <li><link to="/contato">Contato</link></li>
                </ul>
            </nav>
        </Menu>
    )
}

export default Header;