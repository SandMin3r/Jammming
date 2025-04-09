const clientId = "ce94848da8844c0ab955dfb896523c44";  //Spotify Client ID
//use following line for netlify
const redirectUri = "https://jammmingsand.netlify.app/";
//following line used for local development
//const redirectUri = 'http://localhost:3000/callback';
const scopes = [
    "playlist-modify-public",
    "playlist-modify-private",
    "user-read-private"
];

export const getSpotifyAuthUrl = () => {
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}`;
};

export function getAccessTokenFromUrl() {
    const hash = window.location.hash.substring(1);  
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}

export async function searchSpotify(query, accessToken) {
    if (!query) return [];

    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    const data = await response.json();
    return data.tracks ? data.tracks.items : [];
}