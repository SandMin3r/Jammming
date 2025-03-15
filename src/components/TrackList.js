

function TrackList({searchResults, addToPlaylist}) {
    return (
        <div>
            <h2>Results</h2>
            {searchResults.length > 0 ? (
                searchResults.map(track => (
                    <div key={track.id} class="track">
                        <div>
                            <h3>{track.name}</h3>
                            <p>{track.artist} - {track.album}</p>
                        </div>
                        <div class="button">
                            <p onClick={() => addToPlaylist(track)}>+</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No tracks found.</p>
            )}
        </div>
    );
}

export default TrackList