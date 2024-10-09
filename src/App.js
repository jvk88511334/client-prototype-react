// App.js
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RadioView from './views/RadioView';
import { AudioProvider } from './AudioContext';

function App() {
    const [mode] = useState('dark');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            primary: {
                                main: '#1976d2',
                            },
                            background: {
                                default: '#ffffff',
                            },
                            text: {
                                primary: '#000000',
                            },
                        }
                        : {
                            primary: {
                                main: '#ffffff',
                            },
                            background: {
                                default: '#000000',
                                paper: '#000000',
                            },
                            text: {
                                primary: '#e3d5ca',
                                secondary: '#e3d5ca',
                            },
                        }),
                },
            }),
        [mode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AudioProvider>
                <Router>
                    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <main style={{ flex: 1, paddingBottom: '60px' }}>
                            <Routes>
                                <Route path="/" element={<RadioView />} />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </AudioProvider>
        </ThemeProvider>
    );
}

export default App;