// RadioPlayer.js
import React from 'react';
import { useTheme } from '@mui/material/styles';
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

const RadioPlayer = ({ radios = [] }) => {
    const { currentRadio, isPlaying, currentTrack, playRadio, togglePlay } = useAudio();
    const theme = useTheme();

    const playerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#000000',
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.mode === 'light' ? 'black' : 'white'}`,
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
    };

    return (
        <>
            <RadioList radios={radios} onRadioSelect={playRadio} />
            <div style={playerStyle}>
                <div>
                    <div style={{ fontWeight: 'bold' }}>{currentRadio?.name || 'Aucune radio sélectionnée'}</div>
                    <div style={{ fontSize: '0.875rem' }}>{currentTrack || 'Titre inconnu'}</div>
                </div>
                <button onClick={togglePlay} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    {isPlaying ? <PauseIcon color={theme.palette.text.primary} /> : <PlayIcon color={theme.palette.text.primary} />}
                </button>
            </div>
        </>
    );
};

export default RadioPlayer;