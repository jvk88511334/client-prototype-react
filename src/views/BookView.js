import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';

function BookView() {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const { identifier } = useParams();

    useEffect(() => {
        fetch('/data/books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                let selectedBook;
                if (isNaN(identifier)) {
                    selectedBook = data.books.find(b => b.title.toLowerCase() === identifier.toLowerCase());
                } else {
                    const index = parseInt(identifier) - 1;
                    if (Array.isArray(data.books) && index >= 0 && index < data.books.length) {
                        selectedBook = data.books[index];
                    }
                }
                if (!selectedBook) {
                    throw new Error('Book not found');
                }
                setBook(selectedBook);
            })
            .catch(error => {
                console.error('Error loading book:', error);
                setError(error.message);
            });
    }, [identifier]);

    if (error) return <div>Erreur : {error}</div>;
    if (!book) return <div>Chargement...</div>;

    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #4B0082',
                            display: 'block',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                            Livre
                        </Typography>
                    </Box>
                    <Typography variant="h4" gutterBottom>
                        {book.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Par {book.author}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        ISBN: {book.ISBN} | Année de publication: {book.publicationYear}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                        {book.description}
                    </Typography>
                    {book.preface && (
                        <>
                            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                Préface
                            </Typography>
                            <Typography variant="body2">{book.preface}</Typography>
                        </>
                    )}
                    {book.analysis && (
                        <>
                            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                Analyse
                            </Typography>
                            <Typography variant="body2">{book.analysis}</Typography>
                        </>
                    )}
                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Chapitres
                    </Typography>
                    <List>
                        {book.chapters.map((chapter, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={chapter.name}
                                    secondary={
                                        <List dense>
                                            {chapter.content.map((item, i) => (
                                                <ListItem key={i}>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    }
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

export default BookView;