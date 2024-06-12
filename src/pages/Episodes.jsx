import { useSearchParams } from "react-router-dom";
import { useEpisodes } from "../features/Episodes/useEpisodes";
import { useEffect } from "react";

import EpisodeList from "../ui/Episodes/EpisodeList";
import VideoPlayer from "../ui/Episodes/VideoPlayer";
import Spinner from "../ui/Spinner";

function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isPending, isRefetching, data, error } = useEpisodes();
  useEffect(
    function () {
      if (searchParams.get("epId") === null && data) {
        searchParams.set("epId", data.episodes.at(0).episodeId);
        setSearchParams(searchParams);
      }
    },
    [data, searchParams, setSearchParams]
  );
  if (isPending || isRefetching) return <Spinner />;
  return (
    <>
      <VideoPlayer />
      <EpisodeList data={data} />
    </>
  );
}

export default Episodes;
