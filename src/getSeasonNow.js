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
    if (this.state.items.pagination.current_page === 1){
      this.setState((prevState) => ({ page: this.state.items.pagination.items.total}))
    }
    else{
      this.setState((prevState) => ({page: prevState.page - 1}))
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
      <div className="container-fluid card-list section-start">
        <div className="row row-cols-1 row-cols-md-2">
          {data.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => this.goToPrevious()}>
          prev
        </button>
        <button className="btn btn-primary" onClick={() => this.goToNext()}>
          Next
        </button>
      </div>
    );
  }
}

function AnimeCard({ anime }) {
  return (
    <div className="col">
      <img src={anime.images.jpg.image_url} alt="..." />
    </div>
  );
}
