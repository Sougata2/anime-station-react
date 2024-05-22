import { useQueryClient } from "@tanstack/react-query";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0 2%;
`;

function List({ children }) {
  const queryClient = useQueryClient();
  const isLoading = queryClient.isFetching();

  if (isLoading) return <Spinner />;

  return <StyledList>{children}</StyledList>;
}

export default List;
