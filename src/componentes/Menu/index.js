import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from '../componentes/ButtonLink';
import Button from '../Button';

function Menu() {
 return (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="Logo da YllionFlix" />
        </Link>

        <Button as= {Link} className="ButtonLink" to="cadastro/video">
            RANKING MM
        </Button>
    </nav>
    )
}
export default Menu
