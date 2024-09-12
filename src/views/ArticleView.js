import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';

function ArticleView() {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const { identifier } = useParams();

    useEffect(() => {
        fetch('/data/articles.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                let selectedArticle;
                if (isNaN(identifier)) {
                    selectedArticle = data.articles.find(a => a.title.toLowerCase() === identifier.toLowerCase());
                } else {
                    const index = parseInt(identifier) - 1;
                    if (index >= 0 && index < data.articles.length) {
                        selectedArticle = data.articles[index];
                    }
                }
                if (!selectedArticle) {
                    throw new Error('Article not found');
                }
                setArticle(selectedArticle);
            })
            .catch(error => {
                console.error('Error loading article:', error);
                setError(error.message);
            });
    }, [identifier]);

    if (error) return <div>Erreur : {error}</div>;
    if (!article) return <div>Chargement...</div>;

    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #FFD700',
                            display: 'block',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                            {article.theme}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {new Date(article.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {article.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                        Par {article.authors.join(', ')}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {article.content}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={3} sx={{ bgcolor: 'none' }}></Grid>
        </Grid>
    );
}

export default ArticleView;