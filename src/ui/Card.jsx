import { useEffect, useState } from "react";
import { animeAboutInfoApi } from "../services/animeApi";
import { addToDb } from "../features/Favourite/addToDb";

import EpisodesNumber from "./card/EpisodesNumber";
import Description from "./card/Description";
import Favourite from "./card/Favourite";
import Duration from "./card/Duration";
import CloseBtn from "./card/CloseBtn";
import Spinner from "./Spinner";
import Rating from "./card/Rating";
import styled from "styled-components";
import Image from "./card/Image";
import Title from "./card/Title";
import Score from "./card/Score";
import View from "./card/View";

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #d09cfa;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 510px;
  z-index: 10;
  padding: 1rem;
  margin-top: 5px;
  font-family: "Poetsen One", sans-serif;
`;
const CardBody = styled.div`
  position: relative;
  top: -70px;
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
      <Image>{anime?.poster}</Image>
      <CardBody>
        <Title $canTakeFullWidth={anime?.moreInfo?.malscore}>
          {anime?.name}
        </Title>
        <Score>{anime?.moreInfo?.malscore}</Score>
        <Description>{anime?.description}</Description>
        <EpisodesNumber>{anime?.stats?.episodes?.sub}</EpisodesNumber>
        <Rating>{anime?.stats?.rating}</Rating>
        <Duration>{anime?.stats?.duration}</Duration>
      </CardBody>
      <CloseBtn handleClick={onClose}>Close</CloseBtn>
      <Favourite anime={anime} />
      <View />
    </StyledCard>
  );
}

export default Card;
