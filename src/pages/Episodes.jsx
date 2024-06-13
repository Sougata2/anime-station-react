import { useSearchParams } from "react-router-dom";
import { useEpisodes } from "../features/Episodes/useEpisodes";
import { useEffect } from "react";

import EpisodeList from "../ui/Episodes/EpisodeList";
import VideoPlayer from "../ui/Episodes/VideoPlayer";
import Spinner from "../ui/Spinner";
import useEpisode from "../features/Episodes/useEpisode";
import Servers from "../ui/Episodes/Servers";

function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isRefetching, data } = useEpisodes();
  const { mutate: episode, isPending: gettingEpisode } = useEpisode();
  useEffect(
    function () {
      if (searchParams.get("epId") === null && data) {
        const id = data.episodes.at(0).episodeId;
        searchParams.set("epId", id);
        searchParams.set("server", "vidstreaming");
        searchParams.set("category", "sub");
        setSearchParams(searchParams);
        episode({ epId: id, category: "sub", server: "vidstreaming" });
      }
    },
    [data, searchParams, setSearchParams, episode]
  );
  if (isLoading || isRefetching || gettingEpisode) return <Spinner />;
  return (
    <>
      <VideoPlayer />
      <Servers />
      <EpisodeList data={data} />
    </>
  );
}

export default Episodes;
