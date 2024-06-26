import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/login", { replace: true });
      toast.success(`Welcome ${user.displayName}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { login, isLogingIn };
}
