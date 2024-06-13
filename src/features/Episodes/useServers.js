import { useQuery } from "@tanstack/react-query";
import { getEpisodeServers } from "../../services/animeApi";

function useServers(epId) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["servers", epId],
    queryFn: () => getEpisodeServers(epId),
  });
  return { isPending, isRefetching, data, error };
}

export default useServers;
