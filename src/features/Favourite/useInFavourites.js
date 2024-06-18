import { getFavourites } from "../../services/favouritesApi";
import { useQuery } from "@tanstack/react-query";

function useInFavourites(id) {
  const { data } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });
  return data?.filter((anime) => anime.id === id).length > 0;
}

export { useInFavourites };
