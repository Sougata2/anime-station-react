import { getEpisodeStreamingLinks } from "../../services/animeApi";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function useVideo() {
  const [searchParams] = useSearchParams();
  const epId = searchParams.get("epId");
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["episode", epId],
    queryFn: () => getEpisodeStreamingLinks(epId),
  });
  return { isPending, isRefetching, data, error };
}

export default useVideo;
