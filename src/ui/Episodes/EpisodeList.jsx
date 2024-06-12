import Episode from "./Episode";

function EpisodeList({data}) {

  return (
    <>
      {data.episodes.map((episode) => (
        <Episode key={episode.episodeId} episode={episode} />
      ))}
    </>
  );
}

export default EpisodeList;
