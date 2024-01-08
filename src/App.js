import React from "react";
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
  return (
    <div>
      <Header />
      <AnimeList />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#712cf9" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function AnimeCard({ image_url, title, url }) {
  return (
    <div className="col" style={{ margin: "0", padding:"2rem" }}>
      <div className="card mx-auto" style={{ width: "18rem", height: "35rem" }}>
        <img src={image_url} className="card-img-top" alt="..." style={{width: "100%", height:"25rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"></p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know More &#10138;
          </a>
        </div>
      </div>
    </div>
  );
}
class AnimeList extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(urls.recent_episodes_url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const {
      DataisLoaded,
      items: { data, pagination },
    } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          {data.map((anime) => (
            <AnimeCard
              key={anime.entry.mal_id}
              image_url={anime.entry.images.jpg.image_url}
              title={anime.entry.title}
              url={anime.entry.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
