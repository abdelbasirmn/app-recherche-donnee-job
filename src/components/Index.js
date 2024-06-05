import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Index = () => {
    return (
        <div className="container">
            <h1 className="welcome-text">
                Bienvenue aux Jeux Olympiques 2024{" "}
                <span className="gold">🥇</span>{" "}
                <span className="silver">🥈</span>{" "}
                <span className="bronze">🥉</span>
            </h1>
            <div className="links">
                <p><Link to="/signup">S'inscrire</Link></p>
                <p><Link to="/login">Se connecter</Link></p>
            </div>
            <div className="background-image">
                {/* Contenu de l'autre moitié de la page */}
            </div>
        </div>
    );
};

export default Index;
