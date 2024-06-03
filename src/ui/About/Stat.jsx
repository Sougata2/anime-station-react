import styled from "styled-components";

const StyledStat = styled.span`
  background-color: #d13ffe;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
`;
function Stat({ children }) {
  if (!children) return null;
  return <StyledStat>{children}</StyledStat>;
}

export default Stat;
