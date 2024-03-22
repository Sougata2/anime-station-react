import { useRecentAnime } from "../contexts/RecentAnimeContext";

function RecentAnime() {
  const { animeList, isLoading, nextPage, prevPage, date } = useRecentAnime();
  // console.log(animeList?.scheduledAnimes?.map((anime) => console.log(anime)));
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <p>{date}</p>
      {animeList?.scheduledAnimes?.map((anime) => (
        <div key={anime.id}>
          <p>{anime.id}</p>
          <p>{anime.name}</p>
          <p>{anime.time}</p>
        </div>
      ))}
      <button onClick={() => prevPage()}>Prev</button>
      <button onClick={() => nextPage()}>Next</button>
    </div>
  );
}

export default RecentAnime;
