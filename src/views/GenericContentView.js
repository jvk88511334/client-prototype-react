import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import GenericContentView from './GenericContentView';

function ContentDisplayView() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch('/data/genericContent.json')
            .then(response => response.json())
            .then(data => setContents(data.contents))
            .catch(error => console.error('Error loading content:', error));
    }, []);

    if (contents.length === 0) return <div>Chargement...</div>;

    return (
        <>
            {contents.map(item => {
                let content;
                switch(item.type) {
                    case 'article':
                        content = (
                            <>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {item.content.date}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {item.content.headline}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                                    Par {item.content.authors.join(', ')}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    {item.content.body}
                                </Typography>
                            </>
                        );
                        break;
                    case 'book':
                        content = (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    {item.content.title}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Par {item.content.author}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Publié en {item.content.publicationYear}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {item.content.description}
                                </Typography>
                            </>
                        );
                        break;
                    case 'album':
                        content = (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    {item.content.title}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Par {item.content.artist}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Sorti en {item.content.releaseYear}
                                </Typography>
                                <List sx={{ mt: 2 }}>
                                    {item.content.tracks.map(track => (
                                        <ListItem key={track.number} disablePadding>
                                            <ListItemText
                                                primary={`${track.number}. ${track.title}`}
                                                secondary={track.duration}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        );
                        break;
                    case 'radio':
                        content = (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    {item.content.name}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Catégorie : {item.content.category}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    {item.content.description}
                                </Typography>
                            </>
                        );
                        break;
                    default:
                        content = <Typography>Contenu non reconnu</Typography>;
                }

                return (
                    <GenericContentView
                        key={item.id}
                        title={item.title}
                        content={content}
                        borderColor={item.borderColor}
                    />
                );
            })}
        </>
    );
}

export default ContentDisplayView;