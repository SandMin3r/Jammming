import styles from './Playlist.module.css';

function Playlist({playlist, removeFromPlaylist}) {
    return(
        <div>
            <form onSubmit={()=>{}}>
                <input 
                    type="text"
                    id="playlistName"
                    placeholder="Playlist name"
                    className={styles.form__field}
                ></input>
                {playlist.length > 0 ? (
                    playlist.map(track => (
                            <div key={track.id} class="track">
                                <div>
                                    <h3>{track.name}</h3>
                                    <p>{track.artist} - {track.album}</p>
                                </div>
                                <div class="button">
                                    <p onClick={() => {removeFromPlaylist(track.id)}}>-</p>
                                </div>
                            </div>
                    ))
                    ) : (
                    <p>No songs in playlist.</p>
                )}
                <button 
                    type="submit"
                    id="saveToSpotify"
                >Save to Spotify</button>
            </form>
        </div>
    )
};

export default Playlist