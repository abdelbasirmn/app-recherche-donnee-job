import React, { useState } from 'react';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import '../index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Rediriger ou afficher un message de succès
        } catch (error) {
            setError(error.message);
        }
    };

    const verifyEmail = async () => {
        if (!email) {
            setError("Veuillez entrer votre adresse e-mail.");
            return;
        }
        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if (signInMethods.length > 0) {
                setEmailVerified(true);
                setError('');
            } else {
                setError("Aucun compte trouvé pour cette adresse e-mail.");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.");
            setIsResettingPassword(false);
            setEmailVerified(false);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            {!isResettingPassword ? (
                <>
                    <h1>Connexion</h1>
                    <form onSubmit={handleLogin}>
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
                        <button type="submit">Se connecter</button>
                        {error && <p>{error}</p>}
                    </form>
                    <a href="#!" onClick={() => setIsResettingPassword(true)}>Mot de passe oublié</a>
                </>
            ) : (
                <>
                    <h1>Réinitialiser le mot de passe</h1>
                    {!emailVerified ? (
                        <>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={verifyEmail}>Vérifier l'Email</button>
                            {error && <p>{error}</p>}
                        </>
                    ) : (
                        <>
                            <form onSubmit={handlePasswordReset}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    readOnly
                                />
                                <button type="submit">Envoyer le lien de réinitialisation</button>
                            </form>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Login;
