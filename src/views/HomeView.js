import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import MyComponent from '../components/MyComponent';
import RadioPlayer from '../components/RadioPlayer';

function HomeView() {
    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #FFD700', // Couleur jaune
                            display: 'block', // Pour que la bordure ne s'étende pas sur toute la largeur
                            pb: 1, // Padding en bas pour un peu d'espace
                            mb: 2 // Marge en bas pour séparer du contenu suivant
                        }}
                    >
                    <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Analyse
                    </Typography>
                    </Box>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        mardi 10 septembre
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        L'écologie nucléaire face à son renouvellement
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                        Par Martin Denoun et Ange Pottin
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Généralement remise à l'arrière-plan des représentations publiques du nucléaire au profit de la seule « vision réacteur », l'infrastructure massive, complexe et fragile du « cycle du combustible »...
                    </Typography>
                    {/* Ajoutez ici le reste du contenu de la vue */}
                </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={3} sx={{ bgcolor: 'none' }}></Grid>
        </Grid>
    );
}

export default HomeView;