import React from 'react';
import logo from '../assets/img/svg/logo-bicevida.svg';
import '../assets/css/header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid space-around">
                <h1 class="navbar-brand" href="!#">Seguros de Vida</h1>
                <img className="logo" src={logo} alt="logo"></img>
            </div>
        </nav>
    );
}

export default Header;