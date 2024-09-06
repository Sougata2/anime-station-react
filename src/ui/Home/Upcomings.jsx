import Upcoming from "./Upcoming";
import styled from "styled-components";

const StyledUpcomings = styled.div`
  font-family: "Poetsen One", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionHeading = styled.div`
  font-size: 40px;
  color: #e384ff;
`;

const UpcomingList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  color: #333333b6;
`;

function Upcomings({ animes }) {
  return (
    <StyledUpcomings>
      <SectionHeading>Top Upcoming</SectionHeading>
      <UpcomingList>
        {animes.map((anime) => (
          <Upcoming key={anime.id} anime={anime} />
        ))}
      </UpcomingList>
    </StyledUpcomings>
  );
}

export default Upcomings;
