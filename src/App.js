import React, { useState } from "react";
import "./App.css";
import GetWatchRecentEpisodes from "../src/GetWatchRecentEpisodes";
import GetAnimeGenres from "../src/getAnimeGenres";
import GetRandomAnime from "../src/getRandomAnime";
import GetRecentAnimeRecommendations from "../src/getRecentAnimeRecommendations";
import GetSeason from "../src/getSeason";
import GetSeasonNow from "../src/getSeasonNow";
import GetTopAnime from "../src/getTopAnime";
import ErrorPage from "../src/ErrorPage";

const urls = {
  getWatchRecentEpisodes: "https://api.jikan.moe/v4/watch/episodes",
  getAnimeGenres: "https://myanimelist.net/anime/genre/1/Action",
  getRecentAnimeRecommendations:
    "https://api.jikan.moe/v4/recommendations/anime",
  getTopAnime: "https://api.jikan.moe/v4/top/anime",
  getSeasonNow: "https://api.jikan.moe/v4/seasons/now",
  getSeason: "https://api.jikan.moe/v4/seasons/{year}/{season}",
  getRandomAnime: "https://api.jikan.moe/v4/random/anime",
};

function App() {
  let main_page;
  const [section, setSection] = useState(0);
  console.log("section -> ", section);

  switch (section) {
    case 0:
      main_page = <GetWatchRecentEpisodes />;
      break;
    case 1:
      main_page = <GetAnimeGenres />;
      break;
    case 2:
      main_page = <GetSeasonNow />;
      break;
    case 3:
      main_page = <GetSeason />;
      break;
    case 4:
      main_page = <GetRandomAnime />;
      break;
    case 5:
      main_page = <GetTopAnime />;
      break;
    case 6:
      main_page = <GetRecentAnimeRecommendations />;
      break;
    default:
      main_page = <ErrorPage />;
  }

  return (
    <div>
      <Header section={section} setSection={setSection} />
      {main_page}
    </div>
  );
}
function Header({ section, setSection }) {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#712cf9" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            type="button"
            onClick={() => setSection(0)}
          >
            Anime Station
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 0 ? "active" : ""}`}
                  aria-current="page"
                  type="button"
                  onClick={() => setSection(0)}
                >
                  Recent Episodes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 1 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(1)}
                >
                  Anime Genres
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 2 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(2)}
                >
                  Season Now
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 3 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(3)}
                >
                  Season
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 4 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(4)}
                >
                  Random Anime
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 5 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(5)}
                >
                  Top Anime
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${section === 6 ? "active" : ""}`}
                  type="button"
                  onClick={() => setSection(6)}
                >
                  Recent Anime
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default App;
