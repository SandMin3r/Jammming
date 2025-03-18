import React, {useState, useEffect} from 'react';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import {getSpotifyAuthUrl, getAccessTokenFromUrl, searchSpotify} from './components/SpotifyAuth';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('My playlist');
  const [accessToken, setAccessToken] = useState(null);

  // Get spotify token when page loads
  useEffect(() => {
    const token = getAccessTokenFromUrl();
    if (token) {
        setAccessToken(token);
        window.history.pushState({}, null, "/");  // Remove token from URL
    }
  }, []);

  // Search for songs on Spotify
  async function handleSearch(query) {
    if (!accessToken) {
        alert("Please log in to Spotify first.");
        return;
    }
    const results = await searchSpotify(query, accessToken);
    setSearchResults(results);
  };
  
  // Add song to  playlist
  function addToPlaylist(track) {
    setPlaylist([...playlist, track]);
  };

  // Remove song from playlist
  function removeFromPlaylist(trackID) {
    setPlaylist(playlist.filter(track => track.id !== trackID));
  };

  // Save playlist to spotify
  function saveToSpotify() {
    //does not do anything for now
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span class="purpleM">mmm</span>ing</h1>
        <SearchBar 
          onSearch={handleSearch} />
      </header>
      <main>
        {!accessToken ? (
          <div class="logIn-container">
            <button
              onClick={() => window.location.href = getSpotifyAuthUrl()}
              id="logIn"
            >Log in to Spotify</button>
          </div>
            ) : (
        <div id="boxGrid">
          <div id="results">
            <TrackList 
              searchResults={searchResults} 
              addToPlaylist={addToPlaylist} />
          </div>
          <div id="playlist">
            <Playlist 
              playlist={playlist} 
              removeFromPlaylist={removeFromPlaylist}
              playlistName={playlistName}
              setPlaylistName={setPlaylistName}
              saveToSpotify={saveToSpotify} />
          </div>
        </div>
            )}
      </main>
    </div>
  );
}

export default App;