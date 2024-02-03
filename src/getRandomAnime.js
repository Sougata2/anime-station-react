import React from "react";
const url = "https://api.jikan.moe/v4/random/anime";

export default class GetRandomAnime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      refresh: false,
    };
  }

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

  componentDidUpdate(prevProp, prevState) {
    if (this.state.refresh !== prevState.refresh) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            items: json,
            DataisLoaded: true,
          });
        });
    }
  }

  render() {
    const {
      items: { data },
      DataisLoaded,
    } = this.state;
    if (!DataisLoaded) {
      return (
        <div className="section-start">
          <h1> Please wait some time.... </h1>
        </div>
      );
    }
    return (
      <div
        className="container-fluid card-list section-start"
        style={{ padding: "1rem" }}
      >
        <div className="row row-cols-1 row-cols-md-1">
          <AnimeCard anime={data} />
        </div>
        <div className="text-center">
          <i
            className="fa-solid fa-rotate-right page-btn"
            onClick={() =>
              this.setState((prevState) => ({ refresh: !prevState.refresh }))
            }
          ></i>
        </div>
      </div>
    );
  }
}

/////////////////////////////////////////////////////
///Using useEffect function with async and await.///
///////////////////////////////////////////////////
// export default function GetRandomAnime() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [random_anime, setRandomAnime] = useState([]);

//   useEffect(() => {
//     async function getResponse() {
//       setIsLoading(true);
//       const anime = await fetch(url).then((res) => res.json());
//       setRandomAnime(() => anime.data);
//       setIsLoading(false);
//     }
//     getResponse();
//   }, []);

//   return (
//     <div
//       className="container-fluid card-list section-start"
//       style={{ padding: "1rem" }}
//     >
//       {isLoading ? "Please Wait!" : <AnimeCard anime={random_anime} />}
//     </div>
//   );
// }

function AnimeCard(anime) {
  const {
    anime: {
      aired,
      airing,
      broadcast,
      duration,
      episodes,
      genres,
      images,
      rating,
      season,
      status,
      synopsis,
      title,
      trailer,
      type,
      url,
    },
  } = anime;

  const next_episode = new Date(aired?.from);
  const blur_image = { filter: "blur(8px)" };
  const is_hentai =
    genres.filter((genre) => genre.name.toLowerCase() === "hentai").length > 0;
  return (
    <div className="col">
      <div className="anime-card mx-auto">
        <div className="anime-card-left">
          <img
            src={images.jpg.image_url}
            alt=""
            className="anime-card-image"
            style={is_hentai ? blur_image : {}}
          />
          <a
            href={url}
            className="anime-card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
        <div className="anime-card-right">
          <div className="anime-card-title">{title}</div>
          <div className="anime-card-div">
            <span className="anime-card-div-key">Status : </span>
            {status}
          </div>
          {/* <div className="anime-card-div"><span>Aired : </span>{aired.string}</div> */}
          {/* <div className="anime-card-div">
            <span>Aired : </span>
            {aired.string}
          </div> */}
          {airing ?? (
            <div className="anime-card-div">
              <span>Next Episode : </span>
              {broadcast.day}, {next_episode.getHours()}:
              {next_episode.getMinutes()}{" "}
              {next_episode.getHours() >= 12 ? "PM" : "AM"}
            </div>
          )}
          <div className="anime-card-div">
            <span>Duration : </span> {duration}
          </div>
          <div className="anime-card-div">
            <span>Episodes : </span>
            {episodes}
          </div>
          <div className="anime-card-div">
            <span>Generes : </span>
            {genres.map((genre) => (
              <i className="" key={genre.mal_id}>
                {genre.name},{" "}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
