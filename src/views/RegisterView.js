import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import CenteredView from '../components/CenteredView';

function RegisterView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'inscription (à implémenter plus tard avec un backend)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <CenteredView>
            <Typography variant="h4" align="center" gutterBottom>
                Inscription
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
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                    S'inscrire
                </Button>
            </form>
        </CenteredView>
    );
}

export default RegisterView;