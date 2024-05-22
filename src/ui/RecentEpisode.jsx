import { animeAboutInfoApi } from "../services/animeApi";
import { useAnimeContext } from "../features/AnimeInfo/AnimeInfo";
import { useModalContext } from "../features/Modal/Modal";
import { formatTime } from "../services/dateApi";

import styled from "styled-components";

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
  const { dispatch } = useAnimeContext();
  const { open: openModal } = useModalContext();

  async function handleClick() {
    openModal();
    dispatch({ type: "loading" });
    const animeInfo = await animeAboutInfoApi(anime.id);
    dispatch({ type: "loaded", payload: animeInfo });
  }
  return (
    <ListItem onClick={handleClick}>
      <p>{anime.name}</p>
      <p>{formatTime(anime.time)}</p>
    </ListItem>
  );
}

export default RecentEpisode;
