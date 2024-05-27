import { animeAboutInfoApi } from "../../services/animeApi";
import { useQuery } from "@tanstack/react-query";

function useAnimeInfoById(animeId) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["current-anime"],
    queryFn: () => animeAboutInfoApi(animeId),
  });
  return { isPending, isRefetching, data, error };
}

function useAnimeInfo() {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["current-anime"],
  });
  return { isPending, isRefetching, data, error };
}

export { useAnimeInfoById, useAnimeInfo };