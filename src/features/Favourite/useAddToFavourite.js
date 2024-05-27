import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToFavourite } from "../../services/favouritesApi";

import toast from "react-hot-toast";

function useAddToFavourite() {
  const queryClient = useQueryClient();

  const { mutate: add, isPending: isAdding } = useMutation({
    mutationFn: addToFavourite,
    onSuccess: () => {
      toast.success("Added To Favourites");
      queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
    onError: (err) => {
      toast.error("Unable to add to Favourites");
    },
  });
  return { add, isAdding };
}

export { useAddToFavourite };
