import React from 'react';
import { Button } from '@mui/material';

function MyComponent() {
    return (
        <div>
            <h1>Mon Premier Composant</h1>
            <p>Ceci est mon premier composant React.</p>
            <Button variant="contained" color="primary">
                Cliquez ici
            </Button>
        </div>
    );
}

export default MyComponent;