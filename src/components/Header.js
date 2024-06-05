// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="menu">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/boutiques">Boutiques Officielles</Link></li>
                    <li><Link to="/sites">Sites de Compétition</Link></li>
                    <li><Link to="/parkings">Parkings Vélo</Link></li>
                    <li><Link to="/volontaires">Carte Aide Volontaire</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
