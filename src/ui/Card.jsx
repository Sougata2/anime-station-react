import { useEffect, useState } from "react";
import { animeAboutInfoApi } from "../services/animeApi";

import Spinner from "./Spinner";
import styled from "styled-components";

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f7f7;
  border-radius: 10px;
  width: 20rem;
  z-index: 10;
  padding: 1rem;
  margin-top: 5px;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  border-radius: 100%;
  border: none;
  transform: translate(10px, -10px);
  cursor: pointer;
`;

function Card({ animeId, onClose }) {
  const [anime, setAnime] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      async function getAnime() {
        const data = await animeAboutInfoApi(animeId);
        setAnime(data?.anime?.info);
        setIsLoading(false);
      }
      getAnime();
    },
    [animeId]
  );

  // extra with isLoading : not to show the card when isLoadin
  // false but data is undefined.
  if (isLoading || Object.keys(anime).length === 0) return <Spinner />;

  return (
    <StyledCard>
      <Button onClick={onClose}>✖️</Button>
      <img src={anime?.poster} alt="" />
      <p>{anime?.name}</p>
    </StyledCard>
  );
}
export default Card;
