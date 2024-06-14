import styled from "styled-components";
import Episode from "./Episode";

const StyledEpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

function EpisodeList({data}) {

  return (
    <StyledEpisodeList>
      {data.episodes.map((episode) => (
        <Episode key={episode.episodeId} episode={episode} />
      ))}
    </StyledEpisodeList>
  );
}

export default EpisodeList;
