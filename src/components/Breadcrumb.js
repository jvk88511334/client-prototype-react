import React from 'react';
import { Breadcrumbs, Link, Typography, Container, useTheme } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Breadcrumb() {
    const theme = useTheme();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Container
            maxWidth={false}
            sx={{
                borderBottom: `1px solid ${theme.palette.text.primary}`,
                py: 0.5, // Réduire la hauteur
                backgroundColor: theme.palette.background.paper,
                display: 'flex',
                justifyContent: 'center', // Centrer le contenu
            }}
        >
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{
                    '& .MuiBreadcrumbs-separator': {
                        color: theme.palette.text.primary, // Assurer que le séparateur utilise la couleur du thème
                    }
                }}
            >
                <Link
                    color="inherit"
                    component={RouterLink}
                    to="/"
                    sx={{ color: theme.palette.text.primary }} // Utiliser la couleur du texte du thème
                >
                    Accueil
                </Link>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return last ? (
                        <Typography color="text.primary" key={to}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Typography>
                    ) : (
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to={to}
                            key={to}
                            sx={{ color: theme.palette.text.primary }} // Utiliser la couleur du texte du thème
                        >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Container>
    );
}

export default Breadcrumb;