# 🎵 Jammming - Playlist App with the Spotify API

Jammming is a React-based application that integrates with the Spotify API to allow users to create, edit, and manage playlists directly from their Spotify account.

## 🚀 Features

- 🔐 Spotify authentication via OAuth
- 🔍 Search for songs using Spotify's database
- ➕ Add/remove tracks to/from a custom playlist
- 📝 Rename your playlist before saving
- 💾 Save playlists directly to your Spotify account
- 📂 View and edit your existing Spotify playlists

## 📚 Why I Built This

This project is a hands-on exploration of building modular and scalable React apps using third-party APIs. It helped me learn:

- How to manage component-based architecture in React
- How to fetch and handle API data effectively
- How to build a user-friendly interface with responsive updates

## 🧩 Core Components

The app is made up of the following React components:

- `App` – Main container that manages state and layout
- `SearchBar` – User input for song searches
- `TrackList` – Displays search results or playlist content
- `Playlist` – Handles playlist naming and track management
- `SpotifyAuth` – Manages user login and token access
- `UserPlaylists` – Fetches and displays user's existing playlists

## 🖱️ UI Buttons

- **Search** – Triggers a search request to the Spotify API
- **Save to Spotify** – Saves the current playlist to the user's Spotify account

## 🛠️ Future Improvements

- 🔍 Implement a "Smart SearchBar" with autocomplete
- 📉 Reduce the number of fetch requests when saving playlists
- 🎨 Improve overall UI/UX (typography, layout, and responsiveness)

---

## 🧪 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/SandMin3r/Jammming.git
cd Jammming
npm install
