import React from "react";

let url = "https://api.jikan.moe/v4/seasons/now?page={%PAGE%}&&limit=1";

export default class GetSeasonNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      page: 1,
    };
  }

  componentDidMount() {
    console.log(url.replace("{%PAGE%}", this.state.page));
    fetch(url.replace("{%PAGE%}", this.state.page))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.page !== prevState.page) {
      console.log(url.replace("{%PAGE%}", this.state.page));
      fetch(url.replace("{%PAGE%}", this.state.page))
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true,
          });
        });
    }
  }
  goToNext() {
    if (this.state.items.pagination.has_next_page) {
      this.setState((prevState) => ({ page: prevState.page + 1 }));
    } else {
      this.setState((prevState) => ({ page: 1 }));
    }
  }
  goToPrevious() {
    if (this.state.items.pagination.current_page === 1) {
      this.setState((prevState) => ({
        page: this.state.items.pagination.last_visible_page,
      }));
    } else {
      this.setState((prevState) => ({ page: prevState.page - 1 }));
    }
  }
  render() {
    const {
      items: { data, pagination },
      DataisLoaded,
    } = this.state;
    // const newData = data.slice(1, data.length);
    if (!DataisLoaded) {
      return (
        <div className="section-start">
          <h1> Pleses wait some time.... </h1>
        </div>
      );
    }

    return (
      <div
        className="container-fluid card-list section-start"
        style={{ padding: "1rem" }}
      >
        <div className="row row-cols-1 row-cols-md-1">
          {data.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
        <div className="text-center">
          <i
            className="fa-solid fa-circle-chevron-left page-btn"
            onClick={() => this.goToPrevious()}
          ></i>
          <i
            className="fa-solid fa-circle-chevron-right page-btn"
            onClick={() => this.goToNext()}
          ></i>
        </div>
      </div>
    );
  }
}

function AnimeCard({
  anime: {
    aired,
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
}) {
  return (
    <div className="col">
      <div className="anime-card mx-auto">
        <div className="anime-card-left">
          <img src={images.jpg.image_url} alt="" className="anime-card-image" />
        </div>
        <div className="anime-card-right">
          <div className="anime-card-title">{title}</div>
          <div className="anime-card-div">
            <span className="anime-card-div-key">Status : </span>
            {status}
          </div>
          {/* <div className="anime-card-div"><span>Aired : </span>{aired.string}</div> */}
          <div className="anime-card-div">
            <span>Generes : </span>
            {genres.map((genre) => (
              <i className="" key={genre.mal_id}>{genre.name}, </i>
            ))}
          </div>
          <a
            href={url}
            className="anime-card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
      </div>
      {/* <div className="card mx-auto" style={{ width: "18rem", height: "35rem" }}>
        <img
          src={images.jpg.image_url}
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "20rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{synopsis}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Go <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
}
