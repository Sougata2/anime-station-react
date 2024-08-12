import { useSearchParams } from "react-router-dom";

import useEpisode from "../../features/Episodes/useEpisode";
import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

const Box = styled.div`
  cursor: pointer;
  font-family: "Poetsen One", sans-serif;
  color: #333333c3;
  display: grid;
  gap: 10px;
  grid-template-columns: 20px 1fr 70px;
  padding: 10px 0;
  padding-left: 10px;
  border-radius: 20px;
  /* background-color: ${({ $isDark }) => ($isDark ? "#3333" : "")}; */
  background-color: #f0f0f0;
  ${({ $isactive }) =>
    $isactive
      ? css`
          background-color: #e384ff;
          color: white;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        `
      : ""}
`;
const EpNumber = styled.span`
  text-align: right;
`;
const EpTitle = styled.div``;
const IsFiller = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  background-color: #e384ff;
  color: white;
  width: max-content;
  height: max-content;
  padding: 1px 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
function Episode({ episode }) {
  const [searchParams, setSearchParms] = useSearchParams();
  const episodeRef = useRef();
  const category = searchParams.get("category");
  const server = searchParams.get("server");
  const { mutate } = useEpisode();

  const { title, episodeId, isFiller, number } = episode;

  useEffect(
    function () {
      if (searchParams.get("epId") === episodeId) {
        episodeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [episodeId, searchParams]
  );

  function handleClick(e) {
    searchParams.set("epId", episodeId);
    setSearchParms(searchParams);
    mutate({ epId: episodeId, category, server });
  }
  return (
    <Box
      // $isDark={number % 2 !== 0}
      ref={episodeRef}
      onClick={handleClick}
      $isactive={searchParams.get("epId") === episodeId}
    >
      <EpNumber>{number}</EpNumber>
      <EpTitle>{title}</EpTitle>
      <IsFiller $isVisible={isFiller}>filler</IsFiller>
    </Box>
  );
}

export default Episode;
