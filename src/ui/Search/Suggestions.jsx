import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../Spinner";

const StyledSuggestion = styled.div`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const SuggestionItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 5px 15px;
  gap: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  height: 100px;
  width: 80px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const SuggestionName = styled.div`
  font-family: "Poetsen One", sans-serif;
  color: #333333c5;
`;

function Suggestions({ suggestions, isPending }) {
  const navigate = useNavigate();
  if (isPending) return <Spinner />;

  return (
    <StyledSuggestion $hidden={suggestions.length === 0}>
      {suggestions.map((suggestion) => (
        <SuggestionItem
          key={suggestion.id}
          onClick={() => navigate(`/anime/${suggestion.id}`)}
        >
          <ImageWrapper>
            <Image src={suggestion.poster} alt="" />
          </ImageWrapper>
          <SuggestionName>{suggestion.name}</SuggestionName>
        </SuggestionItem>
      ))}
    </StyledSuggestion>
  );
}

export default Suggestions;
