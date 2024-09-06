import React from 'react';
import { Toolbar, Button, Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
    { name: 'Analyse', path: '/view' },
    { name: 'Opinion', path: '/opinion' },
    { name: 'Critique', path: '/critique' },
    { name: 'Entretien', path: '/entretien' },
    { name: 'Fiction', path: '/fiction' },
    { name: 'Auteur·e·s', path: '/auteurs' },
    { name: 'Rayonnages', path: '/rayonnages' },
    { name: 'Tables', path: '/tables' },
    { name: 'Archives', path: '/archives' },
    { name: 'Librairie', path: '/librairie' },
];

function SubNavbar() {
    const theme = useTheme();
    return (
            <Toolbar sx={{ overflowX: 'auto', minHeight: '40px', justifyContent: 'center', borderBottom: `1px solid ${theme.palette.text.primary}` }} variant="dense">
                <Box sx={{ display: 'flex' }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            component={RouterLink}
                            to={item.path}
                            sx={{ color: 'inherit', textTransform: 'none', minWidth: 'auto', px: 2, py: 0.5, fontSize: '0.875rem' }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
    );
}

export default SubNavbar;