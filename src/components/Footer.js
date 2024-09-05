import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Footer({ toggleTheme }) {
    const theme = useTheme();

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ top: 'auto', bottom: 0, borderTop: `1px solid ${theme.palette.text.primary}` }}>
            <Toolbar>
                <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
                    © {new Date().getFullYear()} Nom de l'Application. Tous droits réservés.
                </Typography>
                <Link component={RouterLink} to="/" color="inherit" sx={{ marginRight: 2 }}>
                    Lien 1
                </Link>
                <Link component={RouterLink} to="/view2" color="inherit" sx={{ marginRight: 2 }}>
                    Lien 2
                </Link>
                <Link component={RouterLink} to="/view3" color="inherit" sx={{ marginRight: 2 }}>
                    Lien 3
                </Link>
                <Button color="inherit" onClick={toggleTheme}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;