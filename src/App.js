import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView1 from './views/HomeView1';
import HomeView2 from './views/HomeView2';
import HomeView3 from './views/HomeView3';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginView from "./views/LoginView";

function App() {
    return (
        <Router>
            <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<HomeView1 />} />
                        <Route path="/view2" element={<HomeView2 />} />
                        <Route path="/view3" element={<HomeView3 />} />
                        <Route path="/login" element={<LoginView />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;