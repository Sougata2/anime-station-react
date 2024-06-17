import styled from "styled-components";
import Modal from "./Modal";
import Card from "./Card";

const Box = styled.div`
  font-family: "Poetsen One", sans-serif;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    hsla(205.71428571428572, 5.51181102362205%, 24.901960784313726%, 0.15) 0px
      1px 3px 1px;
  width: 450px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const ImageBox = styled.div`
  display: inline-block;
  height: 200px;
  width: 150px;
  border-radius: 10px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 110px;
    height: 100px;
  }
`;
const AnimeBox = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  padding: 15px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Name = styled.div`
  font-size: 25px;
  color: #333333db;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Details = styled.div`
  display: flex;
  gap: 2px;
  border-radius: 5px;
  overflow: hidden;
  & div {
    padding: 1px 5px;
  }
`;
function RelatedAnime({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <Box>
          <AnimeBox key={anime.id}>
            <ImageBox>
              <img src={anime.poster} alt="" />
            </ImageBox>
            <Body>
              <Name>{anime.name}</Name>
              <Details>
                <div style={{ backgroundColor: "#8fff8d" }}>
                  <i className="fa-solid fa-closed-captioning"></i>{" "}
                  {anime.episodes.sub}
                </div>
                <div style={{ backgroundColor: "#A7E6FF" }}>
                  <i className="fa-solid fa-microphone"></i>{" "}
                  {anime.episodes.dub}
                </div>
                <i
                  className="fa-solid fa-circle"
                  style={{
                    fontSize: "8px",
                    margin: "auto 0",
                    color: "#6f6f6f",
                    marginLeft: "3px",
                  }}
                ></i>
                <div style={{ color: "#333333db" }}>{anime.type}</div>
              </Details>
            </Body>
          </AnimeBox>
        </Box>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default RelatedAnime;
