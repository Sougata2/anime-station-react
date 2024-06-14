import Episode from "./Episode";

function EpisodeList({data}) {

  return (
    <div>
      {data.episodes.map((episode) => (
        <Episode key={episode.episodeId} episode={episode} />
      ))}
    </div>
  );
}

export default EpisodeList;
