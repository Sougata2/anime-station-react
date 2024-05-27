import { formatTime } from "../services/dateApi";

import styled from "styled-components";
import Modal from "./Modal";
import Card from "./Card";

const ListItem = styled.li`
  font-family: "Poetsen One", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e384ff;
  color: white;
  border-radius: 100px;
  padding: 0 20px;
  margin-bottom: 1rem;
  position: relative;
`;

const Time = styled.p`
  background-color: white;
  color: #e384ff;
  position: absolute;
  right: 17px;
  padding: 4px 7px;
  border-radius: 14px;
`

function RecentEpisode({ anime }) {
  return (
    <Modal>
      <Modal.Open>
        <ListItem>
          <p>{anime.name}</p>
          <Time>{formatTime(anime.time)}</Time>
        </ListItem>
      </Modal.Open>
      <Modal.Window>
        <Card animeId={anime.id} />
      </Modal.Window>
    </Modal>
  );
}

export default RecentEpisode;
