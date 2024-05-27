import styled from "styled-components";

const StyledScore = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

function Score({ children }) {
  return <StyledScore>{children}</StyledScore>;
}

export default Score;
