

function TrackList({searchResults, addToPlaylist}) {
    console.log(searchResults);
    return (
        <div>
            <h2>Results</h2>
            {searchResults.length > 0 ? (
                searchResults.map(track => (
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