import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import CenteredView from '../components/CenteredView';

function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de connexion (à implémenter plus tard avec un backend)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <CenteredView>
            <Typography variant="h4" align="center" gutterBottom>
                Connexion
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Se connecter
                </Button>
            </form>
        </CenteredView>
    );
}

export default LoginView;