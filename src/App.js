import React, {useState, useEffect} from 'react';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import {getSpotifyAuthUrl, getAccessTokenFromUrl, searchSpotify} from './components/SpotifyAuth';
import UserPlaylists from './components/UserPlaylists';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState([]);

  // Get spotify token when page loads
  useEffect(() => {
    const token = getAccessTokenFromUrl();
    if (token) {
        setAccessToken(token);
        window.history.pushState({}, null, "/");  // Remove token from URL
    }
  }, []);

  //Load Users Playlists
  useEffect(() => {
    if (!accessToken) return; // Don't fetch if user isn't logged in

    const fetchUserPlaylists = async () => {
        try {
            const response = await fetch("https://api.spotify.com/v1/me/playlists", {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            const data = await response.json();
            setUserPlaylists(data.items); // Store playlists in state
        } catch (error) {
            console.error("Error fetching user playlists:", error);
        }
    };

    fetchUserPlaylists();
}, [accessToken]); // Re-run when accessToken changes


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
  async function saveToSpotify() {
    if (!accessToken || playlist.length === 0) {
      alert("Please log in and add songs to your playlist.");
      return;
    }

    try {
      // Get user ID
      const userResponse = await fetch("https://api.spotify.com/v1/me", {
          headers: { Authorization: `Bearer ${accessToken}` }
      });
      const userData = await userResponse.json();
      const userId = userData.id;

      // Create a new Spotify playlist
      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: "POST",
          headers: { 
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: playlistName,
              description: "Created with Jammming",
              public: false
          })
      });

      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      // Add tracks to the newly created playlist
      const trackUris = playlist.map(track => track.uri);
      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          method: "POST",
          headers: { 
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ uris: trackUris })
      });

        alert("Playlist saved to Spotify!");
    } catch (error) {
        console.error("Error saving playlist:", error);
        alert("There was an issue saving your playlist.");
    }};



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
          <>
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
            <div id="userPlaylists">
              <UserPlaylists 
                playlists={userPlaylists} />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;