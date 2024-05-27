import { useQuery } from "@tanstack/react-query";
import { animeAboutInfoApi } from "../../services/animeApi";

function useAnimeInfo(animeId) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["current-anime"],
    queryFn: () => animeAboutInfoApi(animeId),
  });
  return { isPending, isRefetching, data, error };
}

export { useAnimeInfo };
