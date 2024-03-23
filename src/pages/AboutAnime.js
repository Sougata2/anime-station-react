import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";
import { current_anime } from "../components/SampleResponse";
import Spinner from "../components/Spinner";

function AboutAnime() {
  const { id } = useParams();
  const { currentAnime, isLoading, getAnime } = useAnime();
  const navigate = useNavigate();
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
  } = currentAnime ?? current_anime;

  const { info, moreInfo } = anime;

  const { id: animeId, name, poster, description, stats } = info;
  const { rating, quality, episodes, type, duration } = stats;
  const { sub, dub } = episodes;

  if (isLoading) return <Spinner />;

  return (
    <div>
      <p>{animeId}</p>
      <p>{name}</p>
      <img src={poster} alt="Anime Logo" />
      <p>{description}</p>
      <p>{duration}</p>
      <p>{sub}</p>
      <p>{type}</p>
      <p>{rating}</p>
      <p>{quality}</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default AboutAnime;
