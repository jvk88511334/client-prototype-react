import React from 'react';
import { Typography } from '@mui/material';
import CenteredView from "../components/CenteredView";
import RadioPlayer from '../components/RadioPlayer';
import radioLists from '../data/radioLists.json';

function HomeView1() {
    return (
        <CenteredView>
            <div>
                <Typography variant="h4">Vue de la Page d'Accueil 1</Typography>
                <Typography>Contenu de la Vue de la Page d'Accueil 1.</Typography>
                <RadioPlayer radios={radioLists.home} />
            </div>
        </CenteredView>
    );
}

export default HomeView1;