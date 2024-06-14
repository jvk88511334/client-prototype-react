import React from 'react';
import HomeView from './views/HomeView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <header className="App-header">
                    <HomeView />
                </header>
            </main>
            <Footer />
        </div>
    );
}

export default App;