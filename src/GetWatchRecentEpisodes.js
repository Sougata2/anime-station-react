import React from "react";
const url = "https://api.jikan.moe/v4/watch/episodes";

function AnimeCard({ image_url, title, url, episodes }) {
  function handleEpList(e) {
    const epList = e.target
      .closest("#anime-col")
      .querySelector(".episode-list");
    epList.style.transform =
      epList.style.transform === "translateY(0px)"
        ? "translateY(-70px)"
        : "translateY(0px)";
  }
  return (
    <div className="col" id="anime-col" style={{ padding: "2rem 1rem" }}>
      <div
        className="horizontal-card card mx-auto"
        onClick={(e) => handleEpList(e)}
      >
        <div className="horizontal-card-img">
          <img src={image_url} alt="..." className="" />
        </div>
        <div className="horizontal-card-body">
          <div className="horizontal-card-text card-title">{title}</div>
          <a
            href={url}
            className="btn btn-primary horizontal-card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know More <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <EpisodeList episodes={episodes} />
    </div>
  );
}
function EpisodeList({ episodes }) {
  return (
    <div className="episode-list">
      {episodes.map((episode) => (
        <Episode episode={episode} key={episode.mal_id} />
      ))}
    </div>
  );
}
function Episode({ episode }) {
  return (
    <div className="episode">
      <a href={episode.url} target="_blank" rel="noopener noreferrer">
        {episode.title}
      </a>
      &nbsp;&nbsp;
      <span>{episode.premium ? "👑" : ""}</span>
    </div>
  );
}
export default class GetWatchRecentEpisodes extends React.Component {
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
    fetch(url)
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
      <div className="container-fluid card-list">
        <div className="row row-cols-1 row-cols-md-2">
          {data.map((anime) => (
            <AnimeCard
              key={anime.entry.mal_id}
              image_url={anime.entry.images.jpg.image_url}
              title={anime.entry.title}
              url={anime.entry.url}
              episodes={anime.episodes}
            />
          ))}
        </div>
      </div>
    );
  }
}
