import { formatName } from "../../helper/format";
import styled from "styled-components";
import Modal from "../Modal";
import Card from "../Card";

const StyledLatestEpisode = styled.div`
  border-radius: 10px;
  box-shadow: hsla(
        205.71428571428572,
        5.51181102362205%,
        24.901960784313726%,
        0.3
      )
      0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  overflow: hidden;
  @media (max-width: 800px) {
    margin: auto;
  }
`;
const ImageWrapper = styled.div`
  height: 300px;
  width: 250px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  padding: 3px 6px;
  margin-bottom: 2px;
`;

const Others = styled.div`
  padding: 3px 6px;
`;

function LatestEpisode({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <StyledLatestEpisode>
          <ImageWrapper>
            <Image src={anime.poster} alt="" />
          </ImageWrapper>
          <Title>{formatName(anime.name, 25)}</Title>
          <Others>
            {anime.type} • {anime.duration}
          </Others>
        </StyledLatestEpisode>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default LatestEpisode;
