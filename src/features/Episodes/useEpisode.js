import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getEpisodeStreamingLinks } from "../../services/animeApi";

import toast from "react-hot-toast";
import { useParams, useSearchParams } from "react-router-dom";
import { saveAnimeInfo } from "../../services/localStorage";

export default function useEpisode() {
  const { id: animeId } = useParams();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ epId, category, server }) =>
      getEpisodeStreamingLinks(epId, category, server),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["episode"],
      });
      saveAnimeInfo(animeId, searchParams.get("epId"));
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { mutate, isPending };
}
