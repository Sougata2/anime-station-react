import RelatedAnime from "../../ui/RelatedAnime";
import styled from "styled-components";

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
  flex-direction: column;
  gap: 15px;
`;

function Related({ data }) {
  return (
    <>
      <Title>Related Anime</Title>
      <Container>
        {data.map((anime) => (
          <RelatedAnime anime={anime} key={anime.id} />
        ))}
      </Container>
    </>
  );
}

export default Related;
