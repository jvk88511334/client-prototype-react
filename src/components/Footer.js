import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 6,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Nom de l'Application
                        </Typography>
                        <Typography variant="body2">
                            Description de l'application ou slogan.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Liens
                        </Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" color="inherit" variant="body2">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit" variant="body2">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit" variant="body2">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Adresse : 123 Rue Exemple, Ville, Pays
                        </Typography>
                        <Typography variant="body2">
                            Email : info@example.com
                        </Typography>
                        <Typography variant="body2">
                            Téléphone : +1 234 567 890
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Typography variant="body2" align="center">
                        &copy; {new Date().getFullYear()} Nom de l'Application. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;