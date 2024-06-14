import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function SideDrawer({ open, onClose }) {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                <ListItem button component={RouterLink} to="/" onClick={onClose}>
                    <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button component={RouterLink} to="/view2" onClick={onClose}>
                    <ListItemText primary="Vue 2" />
                </ListItem>
                <ListItem button component={RouterLink} to="/view3" onClick={onClose}>
                    <ListItemText primary="Vue 3" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;