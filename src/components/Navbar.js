import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Navbar({ toggleTheme }) {
    const theme = useTheme();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const handleLogout = () => {
        // Logique de déconnexion (à implémenter plus tard avec un backend)
        setIsLoggedIn(false);
    };

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.text.primary}` }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Nom de l'Application
                    </Typography>
                    <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 1 }}>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <Button color="inherit" component={RouterLink} to="/login">
                        Connexion
                    </Button>
                    {isLoggedIn && (
                        <Button color="inherit" onClick={handleLogout}>
                            Déconnexion
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <SideDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
        </>
    );
}

export default Navbar;