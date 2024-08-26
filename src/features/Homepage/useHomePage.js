import { getHomePage } from "../../services/animeApi";
import { useQuery } from "@tanstack/react-query";

function useHomePage() {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ["home-page"],
    queryFn: getHomePage,
  });
  return { isLoading, isRefetching, data };
}

export default useHomePage;
