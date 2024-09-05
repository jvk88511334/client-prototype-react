import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomeView1 from './views/HomeView1';
import HomeView2 from './views/HomeView2';
import HomeView3 from './views/HomeView3';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginView from "./views/LoginView";
import RegisterView from './views/RegisterView';
import ForgotPasswordView from './views/ForgotPasswordView';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Couleur primaire
        },
        secondary: {
            main: '#dc004e', // Couleur secondaire
        },
        background: {
            default: '#ffffff', // Couleur de fond par défaut
        },
    },
    // Vous pouvez personnaliser d'autres aspects du thème ici
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <Router>
            <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<HomeView1 />} />
                        <Route path="/view2" element={<HomeView2 />} />
                        <Route path="/view3" element={<HomeView3 />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/register" element={<RegisterView />} />
                        <Route path="/forgot-password" element={<ForgotPasswordView />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
        </ThemeProvider>
    );
}

export default App;