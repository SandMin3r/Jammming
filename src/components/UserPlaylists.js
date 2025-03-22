


function UserPlaylists({ playlists }) {
    //console.log(playlists);
    return (
        <div>
            <h2>Your Playlists</h2>
            {playlists.length > 0 ? (
                playlists.map((playlist) => (
                    <div key={playlist.id} class="inline">
                        {playlist.images.length > 0 ? (
                            <img 
                                src={playlist.images[0].url}
                                alt="note"></img>
                        ) : (
                            <img 
                                src={require('./images/music-note.png')}
                                alt="note"></img>
                        )}
                        <h3>{playlist.name}</h3>
                    </div>
                ))
            ) : (
                <p>No playlists found.</p>
            )}
        </div>
    );
}

export default UserPlaylists;
