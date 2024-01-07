import "./App.css";
const urls = {
  recent_episodes_url: "https://api.jikan.moe/v4/watch/episodes",
  anime_genres_url: "https://myanimelist.net/anime/genre/1/Action",
  anime_recomendations_url: "https://api.jikan.moe/v4/recommendations/anime",
  top_anime_url: "https://api.jikan.moe/v4/top/anime",
  season_now_anime: "https://api.jikan.moe/v4/seasons/now",
  season_anime: "https://api.jikan.moe/v4/seasons/{year}/{season}",
  random_anime: "https://api.jikan.moe/v4/random/anime",
};

function App() {
  return <div>Hello React</div>;
}

export default App;
