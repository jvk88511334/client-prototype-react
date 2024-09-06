// App.js
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomeView from './views/HomeView';
import HomeView1 from './views/HomeView1';
import HomeView2 from './views/HomeView2';
import HomeView3 from './views/HomeView3';
import SubNavbar from './components/SubNavbar';
import Navbar from './components/Navbar';
import LoginView from "./views/LoginView";
import RegisterView from './views/RegisterView';
import ForgotPasswordView from './views/ForgotPasswordView';
import Breadcrumb from './components/Breadcrumb';
import { AudioProvider } from './AudioContext';

function App() {
    const [mode, setMode] = useState('light');

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
                                primary: '#ffffff',
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
                        <Navbar toggleTheme={toggleTheme} />
                        <SubNavbar />
                        <Breadcrumb />
                        <main style={{ flex: 1, paddingBottom: '60px' }}>
                            <Routes>
                                <Route path="/" element={<HomeView1 />} />
                                <Route path="/view" element={<HomeView />} />
                                <Route path="/view3" element={<HomeView3 />} />
                                <Route path="/login" element={<LoginView />} />
                                <Route path="/register" element={<RegisterView />} />
                                <Route path="/forgot-password" element={<ForgotPasswordView />} />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </AudioProvider>
        </ThemeProvider>
    );
}

export default App;