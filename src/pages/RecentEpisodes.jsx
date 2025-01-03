import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecentAnime } from "../features/recent/useRecentEpisodes";

import CalenderButton from "../ui/CalenderButton";
import RecentEpisode from "../ui/RecentEpisode";
import DateCounter from "../features/recent/DateCounter";
import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";
import List from "../ui/List";

const slideUp = keyframes`
  from {
    display: flex;
    bottom: 0;
  }
  to{
    display: flex;
    bottom: 65px;
  }
`;
const slideDown = keyframes`
  from {
    display: flex;
    bottom: 65px;
  }
  to{
    display: none;
    bottom: 0;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Styledtitle = styled.div`
  position: fixed;
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding: 0 20px;
  border-radius: 35px;
  font-family: "Poetsen One", sans-serif;
  background-color: #e384ff;
  color: white;
  display: ${({ $isvisible }) => ($isvisible ? "flex" : "none")};
  ${({ $isvisible }) =>
    $isvisible
      ? css`
          animation: ${slideUp} 200ms linear;
        `
      : css`
          animation: ${slideDown} 200ms linear;
        `}
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

function RecentEpisodes() {
  const [offset, setOffset] = useState(0);
  const [showDateCounter, setShowDateCounter] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, data } = useRecentAnime(offset);

  function toggleDateCounter() {
    setShowDateCounter(!showDateCounter);
  }
  // control over offset must be used in parent to stay sync with ["recent-episodes"]
  // that's why offset is not in DateCounter.
  useEffect(
    function () {
      queryClient.invalidateQueries({
        queryKey: ["recent-episodes"],
      });
    },
    [offset, queryClient]
  );

  if (isPending) return <Spinner />;
  return (
    <>
      <PageHeader>
        <Heading>Recent Episodes</Heading>
        <Styledtitle $isvisible={showDateCounter}>
          <DateCounter offset={offset} setOffset={setOffset}>
            <DateCounter.Yesterday />
            <DateCounter.Date />
            <DateCounter.Tomorrow />
            <DateCounter.Reset />
          </DateCounter>
        </Styledtitle>
        <CalenderButton callback={toggleDateCounter} />
      </PageHeader>
      <div>
        <List>
          {data.data.scheduledAnimes?.map((anime) => (
            <RecentEpisode anime={anime} key={anime.id} />
          ))}
        </List>
      </div>
    </>
  );
}

export default RecentEpisodes;
