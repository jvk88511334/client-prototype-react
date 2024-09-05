import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ top: 'auto', bottom: 0, borderTop: '1px solid black' }}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                        &copy; {new Date().getFullYear()} Nom de l'Application. Tous droits réservés.
                    </Typography>
                    <Box>
                        <Link component={RouterLink} to="/" color="inherit" sx={{ marginRight: 2 }}>
                            Lien 1
                        </Link>
                        <Link component={RouterLink} to="/view2" color="inherit" sx={{ marginRight: 2 }}>
                            Lien 2
                        </Link>
                        <Link component={RouterLink} to="/view3" color="inherit">
                            Lien 3
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;