import styled from "styled-components";

const StyledTitle = styled.div`
  position: relative;
  font-size: 20px;
  width: ${({ $canTakeFullWidth }) => ($canTakeFullWidth ? "200px" : "100%")};
  margin-top: 7px;
  margin-bottom: 2px;
`;

function Title({ canTakeFullWidth, children }) {
  return (
    <StyledTitle $canTakeFullWidth={canTakeFullWidth}>
      {children?.length > 50 ? children.slice(0, 50) + "..." : children}
    </StyledTitle>
  );
}
export default Title;
