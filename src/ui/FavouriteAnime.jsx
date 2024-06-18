import styled from "styled-components";
import Trash from "./Trash";
import Modal from "./Modal";
import Card from "./Card";

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ImageContainer = styled.div`
  display: inline;
  width: 10rem;
  height: 10rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  position: relative;
  font-family: "Poetsen One", sans-serif;
  color: #333333c5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 8px;
  padding-top: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
const Label = styled.span`
  color: #3333338f;
`;

function FavouriteAnime({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <ListItem>
          <ImageContainer>
            <Image src={anime.poster} alt="" />
          </ImageContainer>
          <Body>
            <Name>{anime.name}</Name>
            <div>
              <Label>Anilist-id:</Label> {anime.anilistId}
            </div>
            <Trash anilistId={anime.id} />
          </Body>
        </ListItem>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default FavouriteAnime;
