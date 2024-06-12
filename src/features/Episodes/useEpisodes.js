import { getEpisodes } from "../../services/animeApi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export function useEpisodes() {
  const { id } = useParams();
  const { isPending, data, error, isRefetching } = useQuery({
    queryKey: ["episodes", id],
    queryFn: () => getEpisodes(id),
  });
  return { isPending, data, error, isRefetching };
}
