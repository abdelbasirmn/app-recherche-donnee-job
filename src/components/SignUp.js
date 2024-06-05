// src/components/SignUp.js

import React, { useState } from 'react';
import '../index.css';  // Mise à jour du chemin d'accès au fichier CSS

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique d'inscription
    };

    return (
        <div className="container">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default SignUp;
