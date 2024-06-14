import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';

function Footer() {
    return (
        <AppBar position="static" component="footer" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                        &copy; {new Date().getFullYear()} Nom de l'Application. Tous droits réservés.
                    </Typography>
                    <Box>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            Lien 1
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            Lien 2
                        </Link>
                        <Link href="#" color="inherit">
                            Lien 3
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer;