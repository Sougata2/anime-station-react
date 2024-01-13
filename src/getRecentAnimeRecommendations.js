import React from "react";

const url = "https://api.jikan.moe/v4/recommendations/anime";

export default class GetRecentAnimeRecommendations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        DataisLoaded: false,
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
    render() {
      const {
        items: { data, pagination },
        DataisLoaded,
      } = this.state;
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
            <h1>Recent Anime Recommendations</h1>
          </div>
        </div>
      );
    }
  }