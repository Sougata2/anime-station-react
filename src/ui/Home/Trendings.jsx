import Trending from "./Trending";
import styled from "styled-components";

const StyledTrendings = styled.div`
  font-family: "Poetsen One", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionHeading = styled.div`
  font-size: 40px;
  color: #e384ff;
`;

const TrendingList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  color: #333333b6;
`;

function Trendings({ animes }) {
  return (
    <StyledTrendings>
      <SectionHeading>Trending</SectionHeading>
      <TrendingList>
        {animes.map((anime) => (
          <Trending key={anime.id} anime={anime} />
        ))}
      </TrendingList>
    </StyledTrendings>
  );
}

export default Trendings;
