import { useQueryClient } from "@tanstack/react-query";
import { useAnimeCard } from "../features/AnimeInfo/useAnime";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  @keyframes slideDown {
    from {
      transform: translate(-50%, -170%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
  animation: slideDown 500ms ease-in;
`;
const CardBody = styled.div`
  position: relative;
  top: -70px;
`;

function Card({ animeId, onClose }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isPending,
    isRefetching,
    data: { anime: { info = {}, moreInfo = {} } = {} } = {},
  } = useAnimeCard(animeId);

  useEffect(
    function () {
      queryClient.invalidateQueries({
        queryKey: ["card-anime"],
      });
    },
    [animeId, queryClient]
  );

  if (isPending || isRefetching) return <Spinner />;

  return (
    <StyledCard>
      <Image>{info?.poster}</Image>
      <CardBody>
        <Title canTakeFullWidth={moreInfo?.malscore}>{info?.name}</Title>
        <Score>{moreInfo?.malscore}</Score>
        <Description>{info?.description}</Description>
        <EpisodesNumber>{info?.stats?.episodes?.sub}</EpisodesNumber>
        <Rating>{info?.stats?.rating}</Rating>
        <Duration>{info?.stats?.duration}</Duration>
      </CardBody>
      <CloseBtn handleClick={onClose}>Close</CloseBtn>
      <Favourite animeId={animeId} />
      <View handleClick={() => navigate(`/anime/${info.id}`)} />
    </StyledCard>
  );
}

export default Card;
