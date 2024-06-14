import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function SideDrawer({ open, onClose }) {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                <ListItem button>
                    <ListItemText primary="Lien 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Lien 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Lien 3" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;