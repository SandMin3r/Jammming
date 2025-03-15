import React, {useState} from 'react';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
    { id: 2, name: "Shape of You", artist: "Ed Sheeran", album: "Divide" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" }
  ]);
  const [playlist, setPlaylist] = useState([]);
  
  function addToPlaylist(track) {
    setPlaylist([...playlist, track]);
  };

  function removeFromPlaylist(trackID) {
    setPlaylist(playlist.filter(track => track.id !== trackID));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span class="purpleM">mmm</span>ing</h1>
        <SearchBar />
      </header>
      <main>
        <div id="boxGrid">
          <div id="results">
            <TrackList searchResults={searchResults} addToPlaylist={addToPlaylist} />
          </div>
          <div id="playlist">
            <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
