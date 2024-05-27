import { useQuery } from "@tanstack/react-query";
import { getFavourites } from "../../services/favouritesApi";

function useFavourites() {
  const { isPending, isRefetching, data, error } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });

  return { isPending, isRefetching, data, error };
}

export { useFavourites };
