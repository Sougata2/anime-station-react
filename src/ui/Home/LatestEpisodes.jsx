import styled from "styled-components";
import LatestEpisode from "./LatestEpisode";

const StyledLatestEpisodes = styled.div`
  font-family: "Poetsen One", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionHeading = styled.div`
  font-size: 40px;
  color: #e384ff;
`;

const LatestEpisodeList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  color: #333333b6;
`;

function LatestEpisodes({ animes }) {
  return (
    <StyledLatestEpisodes>
      <SectionHeading>Latest Episodes</SectionHeading>
      <LatestEpisodeList>
        {animes.map((anime) => (
          <LatestEpisode key={anime.id} anime={anime} />
        ))}
      </LatestEpisodeList>
    </StyledLatestEpisodes>
  );
}

export default LatestEpisodes;
