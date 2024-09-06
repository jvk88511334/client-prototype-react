// AudioContext.js
import React, { createContext, useState, useRef, useEffect, useContext } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [currentRadio, setCurrentRadio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState('');
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleMetadata = (e) => {
            if (e.type === 'metadata') {
                const metadata = e.detail;
                if (metadata.title) {
                    setCurrentTrack(metadata.title);
                }
            }
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('metadata', handleMetadata);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('metadata', handleMetadata);
        };
    }, []);

    const playRadio = (radio) => {
        if (currentRadio?.id !== radio.id) {
            audioRef.current.src = radio.streamUrl;
            setCurrentRadio(radio);
        }
        audioRef.current.play().catch(error => console.error('Erreur de lecture:', error));
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else if (currentRadio) {
            audioRef.current.play().catch(error => console.error('Erreur de lecture:', error));
        }
    };

    return (
        <AudioContext.Provider value={{
            currentRadio,
            isPlaying,
            currentTrack,
            playRadio,
            togglePlay
        }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);