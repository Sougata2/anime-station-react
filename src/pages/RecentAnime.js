import { Link } from "react-router-dom";
import { useRecentAnime } from "../contexts/RecentAnimeContext";

function RecentAnime() {
  const { animeList, isLoading, nextPage, prevPage, date } = useRecentAnime();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <p>{date}</p>
      {animeList?.scheduledAnimes?.map((anime) => (
        <div key={anime.id}>
          <p>{anime.name}</p>
          <p>{anime.time}</p>
          <Link to={`/anime/${anime.id}`}>
            <p>{anime.id}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => prevPage()}>Prev</button>
      <button onClick={() => nextPage()}>Next</button>
    </div>
  );
}

export default RecentAnime;
