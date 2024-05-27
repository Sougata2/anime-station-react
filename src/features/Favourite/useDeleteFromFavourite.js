import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteFromFavourites } from "../../services/favouritesApi";

function useDeleteFromFavourite() {
  const queryClient = useQueryClient();
  const { mutate: deleting, isPending: isDeleting } = useMutation({
    mutationFn: deleteFromFavourites,
    onSuccess: () => {
      toast.success("Removed From Favourites");
      queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
    onError: (err) => {
      toast.error("Unable To Remove From Favourites");
    },
  });
  return { deleting, isDeleting };
}

export { useDeleteFromFavourite };
