import React from 'react';
import { Container, Box } from '@mui/material';

function CenteredView({ children }) {
    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh"
            >
                {children}
            </Box>
        </Container>
    );
}

export default CenteredView;