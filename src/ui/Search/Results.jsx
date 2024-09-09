function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <div>
            <img src={result.poster} alt="" />
          </div>
          <div>
            <a href={`/anime/${result.id}`}>{result.name}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
