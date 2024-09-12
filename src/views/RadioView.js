import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';

function RadioView() {
    const [radios, setRadios] = useState([]);
    const [error, setError] = useState(null);
    const { identifier } = useParams();

    useEffect(() => {
        fetch('/data/radios.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data.radios) || data.radios.length === 0) {
                    throw new Error('No radios found');
                }
                setRadios(data.radios);
            })
            .catch(error => {
                console.error('Error loading radios:', error);
                setError(error.message);
            });
    }, []);

    if (error) return <div>Erreur : {error}</div>;
    if (radios.length === 0) return <div>Chargement...</div>;

    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #FF4500',
                            display: 'block',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                            Radios
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                        Découvrez notre sélection de radios classées par catégorie.
                    </Typography>
                    <List>
                        {radios.map((radio, index) => (
                            <ListItem key={radio.id}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6">
                                            {radio.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="subtitle1">
                                                Catégorie : {radio.category}
                                            </Typography>
                                            {radio.description && (
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {radio.description}
                                                </Typography>
                                            )}
                                        </>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={3} sx={{ bgcolor: 'none' }}></Grid>
        </Grid>
    );
}

export default RadioView;