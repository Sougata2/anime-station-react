import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";

function AboutAnime() {
  const { id } = useParams();
  const { currentAnime, isLoading, getAnime } = useAnime();
  // console.log("Current => ", currentAnime);

  useEffect(
    function () {
      getAnime(id);
    },
    [id, getAnime]
  );
  const {
    anime,
    mostPopularAnimes,
    recommendedAnimes,
    relatedAnimes,
    seasons,
  } = currentAnime;
  
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{anime?.info.id}</p>
      <p>{anime?.info.name}</p>
      <img src={anime?.info.poster} alt="Anime Logo" />
      <p>{anime?.info.description}</p>
      <p>{anime?.info?.stats.duration}</p>
      <p>{anime?.info?.stats.episodes.sub}</p>
      <p>{anime?.info?.stats.type}</p>
      <p>{anime?.info?.stats.rating}</p>
    </div>
  );
}

export default AboutAnime;
