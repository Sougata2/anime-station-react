import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";

function AboutAnime() {
  const { id } = useParams();
  const { currentAnime, isLoading, getAnime } = useAnime();
  console.log(currentAnime)

  useEffect(
    function () {
      getAnime(id);
    },
    [id]
  );
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{currentAnime?.anime?.info.id}</p>
      <p>{currentAnime?.anime?.info.name}</p>
      <img src={currentAnime?.anime?.info.poster} alt="Anime Logo" />
      <p>{currentAnime?.anime?.info.description}</p>
      <p>{currentAnime?.anime?.info?.stats.duration}</p>
      <p>{currentAnime?.anime?.info?.stats.episodes.sub}</p>
      <p>{currentAnime?.anime?.info?.stats.type}</p>
      <p>{currentAnime?.anime?.info?.stats.rating}</p>
    </div>
  );
}

export default AboutAnime;
