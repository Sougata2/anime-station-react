function Recommended({ data }) {
  return (
    <>
      {data.map((anime) => (
        <div key={anime.id}>
          <img src={anime.poster} alt="" />
          <div>{anime.name}</div>
          <div>{anime.duration}</div>
          <div>{anime.episodes.sub}</div>
          <div>{anime.episodes.dub}</div>
          <div>{anime.rating}</div>
          <div>{anime.type}</div>
        </div>
      ))}
    </>
  );
}

export default Recommended;
