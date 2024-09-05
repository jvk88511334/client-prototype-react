import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
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
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid black' }}>
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