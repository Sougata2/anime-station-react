import { useAnimeContext } from "../features/AnimeInfo/AnimeInfo";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f7f7;
  border-radius: 10px;
  width: 20rem;
  height: 30rem;
  z-index: 100;
  padding: 1rem;
`;

function Card({ children }) {
  const { isLoading } = useAnimeContext();
  if (isLoading) return <Spinner />;
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
