import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="static">
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
                    <Button color="inherit">À propos</Button>
                    {/* Reste du contenu de la barre de navigation */}
                </Toolbar>
            </AppBar>
            <SideDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
        </>
    );
}

export default Navbar;