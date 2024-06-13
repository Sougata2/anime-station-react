import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getEpisodeStreamingLinks } from "../../services/animeApi";

import toast from "react-hot-toast";

export default function useEpisode() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ epId, category, server }) =>
      getEpisodeStreamingLinks(epId, category, server),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["episode"],
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { mutate, isPending };
}
