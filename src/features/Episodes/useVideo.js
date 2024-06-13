import { getEpisodeStreamingLinks } from "../../services/animeApi";
import { useQuery } from "@tanstack/react-query";

function useVideo(epId, categoryName, serverName) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["episode", epId, categoryName, serverName],
    queryFn: async () => {
      const resObj = await getEpisodeStreamingLinks(
        epId,
        categoryName,
        serverName
      );
      if (resObj.status) throw new Error(resObj.message);
      return resObj;
    },
  });
  return { isPending, isRefetching, data, error };
}

export default useVideo;
