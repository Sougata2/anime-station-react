import styled from "styled-components";

const StyledScore = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

function Score({ children }) {
  if (isNaN(children)) return null;
  return <StyledScore>{children}</StyledScore>;
}

export default Score;
