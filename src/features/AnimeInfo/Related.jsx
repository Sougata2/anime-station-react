function Related({ data }) {
  return (
    <>
      {data.map((anime) => (
        <div key={anime.id}>
          <img src={anime.poster} alt="" />
          <div>
            <div>{anime.episodes.sub}</div>
            <div>{anime.episodes.dub}</div>
            <div>{anime.name}</div>
            <div>{anime.type}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Related;
