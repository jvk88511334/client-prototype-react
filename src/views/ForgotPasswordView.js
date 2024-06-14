import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import CenteredView from '../components/CenteredView';

function ForgotPasswordView() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de réinitialisation du mot de passe (à implémenter plus tard avec un backend)
        console.log('Email:', email);
    };

    return (
        <CenteredView>
            <Typography variant="h4" align="center" gutterBottom>
                Mot de passe oublié
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
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                    Envoyer
                </Button>
            </form>
        </CenteredView>
    );
}

export default ForgotPasswordView;