import styled from "styled-components";

const StyledDescription = styled.div`
  padding: 10px 0;
`;
function Description({ children }) {
  return (
    <StyledDescription>
      {children?.slice(0, 150)}
      {children?.length >= 99 ? "..." : ""}
    </StyledDescription>
  );
}

export default Description;
