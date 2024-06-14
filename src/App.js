import HomeView from './views/HomeView';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="App">
          <Navbar />
        <header className="App-header">
          <HomeView />
        </header>
      </div>
  );
}

export default App;
