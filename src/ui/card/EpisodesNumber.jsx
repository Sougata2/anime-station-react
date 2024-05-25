import styled from "styled-components";

const StyledEpisodesNumber = styled.div`
    position: relative;
    top: -8px;
`;

function EpisodesNumber({ children }) {
  return <StyledEpisodesNumber>Ep: {children}</StyledEpisodesNumber>;
}

export default EpisodesNumber;
