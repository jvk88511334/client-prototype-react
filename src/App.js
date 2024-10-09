// App.js
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RadioView from './views/RadioView';
import { AudioProvider } from './AudioContext';

function App() {
    const [mode, setMode] = useState('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'dark'
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
                                primary: '#d5bdaf',
                                secondary: '#e3d5ca',
                            },
                        }),
                },
            }),
        [mode]
    );

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AudioProvider>
                <Router>
                    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        {/*<Navbar toggleTheme={toggleTheme} />*/}
                        {/*<SubNavbar />*/}
                        {/*<Breadcrumb />*/}
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