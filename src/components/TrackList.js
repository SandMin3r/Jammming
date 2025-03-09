import testResultsArray from "./SearchResults";
import { useState } from "react";


function TrackList() {
    // Example track data
    const [searchResults, setSearchResults] = useState([
        { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
        { id: 2, name: "Shape of You", artist: "Ed Sheeran", album: "Divide" },
        { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" }
    ]);

    return (
        <div>
            <h2>Results</h2>
            {searchResults.length > 0 ? (
                searchResults.map(track => (
                    <div key={track.id}>
                        <h3>{track.name}</h3>
                        <p>{track.artist} - {track.album}</p>
                        <button onClick={() => console.log("Track added:", track.name)}>+</button>
                    </div>
                ))
            ) : (
                <p>No tracks found.</p>
            )}
        </div>
    );
}

export default TrackList