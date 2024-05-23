import { formatTime } from "../services/dateApi";

import styled from "styled-components";
import Modal from "./Modal";
import Card from "./Card";

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 100px;
  padding: 0 2%;
  margin-bottom: 1rem;
  &:hover,
  &:active {
    background-color: #eeeeee;
    color: #444444;
    margin: 0 -2rem 1rem -2rem;
    transition: all 500ms;
  }
`;

function RecentEpisode({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <ListItem>
          <p>{anime.name}</p>
          <p>{formatTime(anime.time)}</p>
        </ListItem>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default RecentEpisode;
