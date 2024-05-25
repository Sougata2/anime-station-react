import styled from "styled-components";

const StyledScore = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

function Score({ children }) {
  return <StyledScore>{children?.toFixed(1)}</StyledScore>;
}

export default Score;
