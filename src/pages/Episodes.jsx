import { useParams, useSearchParams } from "react-router-dom";
import { getAnimeInfo } from "../services/localStorage";
import { useEpisodes } from "../features/Episodes/useEpisodes";
import { useEffect } from "react";

import StyledEpisodes from "../ui/Episodes/StyledEpisodes";
import EpisodeList from "../ui/Episodes/EpisodeList";
import VideoPlayer from "../ui/Episodes/VideoPlayer";
import useEpisode from "../features/Episodes/useEpisode";
import Servers from "../ui/Episodes/Servers";
import Spinner from "../ui/Spinner";

function Episodes() {
  const { id: animeId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isRefetching, data } = useEpisodes();
  const { mutate: episode, isPending: gettingEpisode } = useEpisode();
  useEffect(
    function () {
      if (searchParams.get("epId") === null && data) {
        let id;
        const savedAnime = getAnimeInfo(animeId);
        console.log(savedAnime);
        if (savedAnime !== null) {
          id = savedAnime.epId;
        } else {
          id = data.episodes.at(0).episodeId;
        }
        searchParams.set("epId", id);
        searchParams.set("server", "vidstreaming");
        searchParams.set("category", "sub");
        setSearchParams(searchParams);
        episode({ epId: id, category: "sub", server: "vidstreaming" });
      }
    },
    [data, searchParams, setSearchParams, episode, animeId]
  );
  if (isLoading || isRefetching || gettingEpisode) return <Spinner />;
  return (
    <StyledEpisodes>
      <VideoPlayer />
      <Servers />
      <EpisodeList data={data} />
    </StyledEpisodes>
  );
}

export default Episodes;
