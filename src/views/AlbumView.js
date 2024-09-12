import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';

function AlbumView() {
    const [album, setAlbum] = useState(null);
    const [error, setError] = useState(null);
    const { identifier } = useParams();

    useEffect(() => {
        fetch('/data/albums.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                let selectedAlbum;
                if (isNaN(identifier)) {
                    selectedAlbum = data.albums.find(a => a.title.toLowerCase() === identifier.toLowerCase());
                } else {
                    const index = parseInt(identifier) - 1;
                    if (Array.isArray(data.albums) && index >= 0 && index < data.albums.length) {
                        selectedAlbum = data.albums[index];
                    }
                }
                if (!selectedAlbum) {
                    throw new Error('Album not found');
                }
                setAlbum(selectedAlbum);
            })
            .catch(error => {
                console.error('Error loading album:', error);
                setError(error.message);
            });
    }, [identifier]);

    if (error) return <div>Erreur : {error}</div>;
    if (!album) return <div>Chargement...</div>;

    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #1DB954',
                            display: 'block',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                            Album
                        </Typography>
                    </Box>
                    <Typography variant="h4" gutterBottom>
                        {album.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {album.artists.join(', ')}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Année de parution : {album.releaseYear}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                        Compositeurs : {album.composers.join(', ')}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Titres
                    </Typography>
                    <List>
                        {album.tracks.map((track, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`${track.number}. ${track.title}`}
                                    secondary={`Durée : ${track.duration}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={3} sx={{ bgcolor: 'none' }}></Grid>
        </Grid>
    );
}

export default AlbumView;