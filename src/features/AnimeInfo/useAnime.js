import { animeAboutInfoApi } from "../../services/animeApi";
import { useQuery } from "@tanstack/react-query";

function useAnimeCard(animeId) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["card-anime"],
    queryFn: () => animeAboutInfoApi(animeId),
  });
  return { isPending, isRefetching, data, error };
}

function useCurrentAnime(animeId) {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["current-anime", animeId],
    queryFn: () => animeAboutInfoApi(animeId),
  });
  return { isPending, isRefetching, data, error };
}

export { useCurrentAnime, useAnimeCard };
