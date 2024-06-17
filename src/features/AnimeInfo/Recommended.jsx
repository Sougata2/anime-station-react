import styled from "styled-components";
import RecommendedAnime from "../../ui/RecommendedAnime";

const Title = styled.div`
  font-family: "Poetsen One", sans-serif;
  font-size: 35px;
  margin-top: 35px;
  color: #333333db;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 10px;
`;

function Recommended({ data }) {
  return (
    <>
      <Title>Recommended For You</Title>
      <Container>
        {data.map((anime) => (
          <RecommendedAnime anime={anime} key={anime.id} />
        ))}
      </Container>
    </>
  );
}

export default Recommended;
