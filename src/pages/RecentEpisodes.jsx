import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRecentAnime } from "../features/recent/useRecentEpisodes";

import RecentEpisode from "../ui/RecentEpisode";
import DateCounter from "../features/recent/DateCounter";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import List from "../ui/List";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Styledtitle = styled.div`
  display: flex;
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;

function RecentEpisodes() {
  const [offset, setOffset] = useState(0);
  const queryClient = useQueryClient();
  const { isPending, data: { scheduledAnimes } = [] } = useRecentAnime(offset);

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
        <h2>Recent Episodes</h2>
        <Styledtitle>
          <DateCounter offset={offset} setOffset={setOffset}>
            <DateCounter.Yesterday />
            <DateCounter.Date />
            <DateCounter.Tomorrow />
            <DateCounter.Reset />
          </DateCounter>
        </Styledtitle>
      </PageHeader>
      <div>
        <List>
          {scheduledAnimes.map((anime) => (
            <RecentEpisode anime={anime} key={anime.id} />
          ))}
        </List>
      </div>
    </>
  );
}

export default RecentEpisodes;
