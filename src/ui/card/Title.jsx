import styled from "styled-components";

const StyledTitle = styled.p`
  position: relative;
  font-size: 20px;
  width: ${({ $canTakeFullWidth }) => ($canTakeFullWidth ? "200px" : "100%")};
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
export default Title;
