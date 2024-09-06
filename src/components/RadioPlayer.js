// RadioPlayer.js
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Slider } from '@mui/material';
import { useAudio } from '../AudioContext';

const RadioList = ({ radios, onRadioSelect }) => {
    if (!Array.isArray(radios) || radios.length === 0) {
        return <p>Aucune radio disponible</p>;
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {radios.map(radio => (
                <li key={radio.id} style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() => onRadioSelect(radio)}
                        style={{ color: '#1976d2', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                    >
                        {radio.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

const PlayIcon = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5v14l11-7z" fill={color} />
    </svg>
);

const PauseIcon = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill={color} />
    </svg>
);

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const RadioPlayer = ({ radios = [] }) => {
    const { currentRadio, isPlaying, currentTrack, duration, currentTime, playRadio, togglePlay, seek } = useAudio();
    const theme = useTheme();

    const handleSliderChange = (event, newValue) => {
        seek(newValue);
    };

    const playerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#000000',
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.mode === 'light' ? 'black' : 'white'}`,
        padding: '0.75rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        zIndex: 1000,
    };

    const isSpecificMP3 = currentRadio?.streamUrl.toLowerCase().endsWith('.mp3') && duration > 0 && duration !== Infinity;

    return (
        <>
            <RadioList radios={radios} onRadioSelect={playRadio} />
            <div style={playerStyle}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '48px', // Utilisation de minHeight au lieu de height fixe
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            fontWeight: 'bold',
                            marginBottom: '0.25rem' // Ajout d'une marge entre le titre et les métadonnées
                        }}>
                            {currentRadio?.name || 'Aucune radio sélectionnée'}
                        </div>
                        <div style={{
                            fontSize: '0.875rem',
                            opacity: 0.7 // Légère réduction de l'opacité pour différencier visuellement
                        }}>
                            {currentTrack || 'Titre inconnu'}
                        </div>
                    </div>
                    <button
                        onClick={togglePlay}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? <PauseIcon color={theme.palette.text.primary} /> : <PlayIcon color={theme.palette.text.primary} />}
                    </button>
                </div>
                {isSpecificMP3 && (
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                        <span style={{ marginRight: '0.5rem', minWidth: '45px', textAlign: 'right' }}>{formatTime(currentTime)}</span>
                        <Slider
                            value={currentTime}
                            onChange={handleSliderChange}
                            max={duration || 100}
                            aria-labelledby="continuous-slider"
                            sx={{
                                color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                                '& .MuiSlider-thumb': {
                                    width: 12,
                                    height: 12,
                                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                    },
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark' ? 'rgb(255 255 255 / 16%)' : 'rgb(0 0 0 / 16%)'}`,
                                    },
                                    '&.Mui-active': {
                                        width: 20,
                                        height: 20,
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.28,
                                },
                            }}
                        />
                        <span style={{ marginLeft: '0.5rem', minWidth: '45px' }}>{formatTime(duration)}</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default RadioPlayer;