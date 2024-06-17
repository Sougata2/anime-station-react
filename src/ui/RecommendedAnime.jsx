import styled from "styled-components";
import Modal from "./Modal";
import Card from "./Card";

const Box = styled.div`
  cursor: pointer;
  font-family: "Poetsen One", sans-serif;
  position: relative;
  border-radius: 10px;
  width: 160px;
  padding: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    hsla(205.71428571428572, 5.51181102362205%, 24.901960784313726%, 0.15) 0px
      1px 3px 1px;

  @media (max-width: 500px) {
    margin: auto;
  }
  @media (max-width: 800px) {
    height: 210px;
  }
`;
const Rating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff7f3e;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
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
    width: 100%;
    height: 150px;
  }
`;
const Types = styled.div`
  position: absolute;
  bottom: 55px;
  display: flex;
  left: 10px;
  gap: 2px;
  border-radius: 5px;
  overflow: hidden;
  & div {
    padding: 1px 5px;
  }
  @media (max-width: 800px) {
    bottom: 60px;
  }
`;
const Name = styled.div`
  color: #333333ef;
  max-width: 15ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.div`
  display: flex;
  gap: 5px;
  color: #333333b2;
`;

function RecommendedAnime({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <Box>
          <Rating>{anime.rating}</Rating>
          <ImageBox>
            <img src={anime.poster} alt="" />
          </ImageBox>
          <Types>
            <div style={{ backgroundColor: "#8fff8d" }}>
              <i className="fa-solid fa-closed-captioning"></i>{" "}
              {anime.episodes.sub}
            </div>
            <div style={{ backgroundColor: "#A7E6FF" }}>
              <i className="fa-solid fa-microphone"></i> {anime.episodes.dub}
            </div>
          </Types>
          <Name>{anime.name}</Name>
          <Details>
            <div>{anime.type}</div>
            <i
              className="fa-solid fa-circle"
              style={{
                fontSize: "8px",
                margin: "auto 0",
                color: "#6f6f6f",
                marginLeft: "3px",
              }}
            ></i>
            <div>{anime.duration}</div>
          </Details>
        </Box>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default RecommendedAnime;
