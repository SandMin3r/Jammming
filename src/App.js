import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
//import Playlist from './components/Playlist'; it does not work i dont know why

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar />
      </header>
      <main>
        <div id="boxGrid">
          <div id="results">
            <TrackList />
          </div>
          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
