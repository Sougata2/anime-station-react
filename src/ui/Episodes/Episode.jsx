import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useEpisode from "../../features/Episodes/useEpisode";

const Box = styled.div`
  cursor: pointer;
  font-family: "Poetsen One", sans-serif;
  color: #333333c3;
  display: grid;
  gap: 10px;
  grid-template-columns: 20px 1fr 40px;
  padding: 10px 0;
  background-color: ${({ $isDark }) => ($isDark ? "#3333" : "")};
`;
const EpNumber = styled.span`
  text-align: right;
`;
const EpTitle = styled.div``;
const IsFiller = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;
function Episode({ episode }) {
  
  const [searchParams, setSearchParms] = useSearchParams();
  const category = searchParams.get("category");
  const server = searchParams.get("server");
  const { mutate } = useEpisode();
  
  const { title, episodeId, isFiller, number } = episode;
  
  function handleClick() {
    searchParams.set("epId", episodeId);
    setSearchParms(searchParams);
    mutate({ epId: episodeId, category, server });
  }
  return (
    <Box $isDark={number % 2 !== 0} onClick={handleClick}>
      <EpNumber>{number}</EpNumber>
      <EpTitle>{title}</EpTitle>
      <IsFiller $isVisible={isFiller}>filler</IsFiller>
    </Box>
  );
}

export default Episode;
