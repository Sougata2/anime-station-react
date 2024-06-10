import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/authApi";

import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged Out successfully!");
      queryClient.removeQueries();
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  return { logout, isLoggingOut };
}

export default useLogout;
