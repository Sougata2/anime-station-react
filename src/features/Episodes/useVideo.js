import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getEpisodeStreamingLinks } from "../../services/animeApi";

function useVideo() {
  const [searchParam] = useSearchParams();
  const epId = searchParam.get("epId");
  const category = searchParam.get("category");
  const server = searchParam.get("server");

  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["episode"],
    queryFn: () => getEpisodeStreamingLinks(epId, category, server),
  });
  return { isPending, isRefetching, data, error };
}

export default useVideo;
