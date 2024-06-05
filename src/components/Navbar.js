// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/evenements">Événements Culturels</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
