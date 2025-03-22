import styles from './Playlist.module.css';

function Playlist({playlist, removeFromPlaylist, playlistName, setPlaylistName, saveToSpotify}) {
    return(
        <div>
            <input 
                type="text"
                id="playlistName"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="Playlist name"
                className={styles.form__field}
            ></input>
            {playlist.length > 0 ? (
                playlist.map(track => (
                    <div key={track.id} class="track">
                        <div class="inline">
                            <img
                                src={track.album.images[1].url}
                                alt={track.album.name}></img>
                            <div>
                                <h3>{track.name}</h3>
                                <p>{track.artists.map(artist => artist.name).join(', ')} - {track.album.name}</p>
                            </div>
                        </div>
                        <div class="button">
                            <p onClick={() => removeFromPlaylist(track.id)}>-</p>
                        </div>
                    </div>
                ))
                ) : (
                    <p>No songs in playlist.</p>
                )}
            <button 
                onClick={saveToSpotify}
                disabled={playlist.length === 0}
            >Save to Spotify</button>
        </div>
    )
};

export default Playlist