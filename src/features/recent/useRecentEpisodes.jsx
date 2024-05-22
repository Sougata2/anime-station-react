import { reacentEpisodesApi } from "../../services/animeApi";
import { useQuery } from "@tanstack/react-query";

function useRecentAnime(offset) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["recent-episodes"],
    queryFn: () => reacentEpisodesApi(offset),
  });

  return { isPending, isRefetching, data, error };
}

export { useRecentAnime };
