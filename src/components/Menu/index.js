import React from 'react';
import './Menu.css';
import Logo from '../../assets/logo.png';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="MarvinFlix logo" src={Logo} />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu;