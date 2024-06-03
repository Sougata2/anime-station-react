import styled from "styled-components";

const StyledSpan = styled.span`
    background-color: #e384ff;
    color: white;
    padding: 1px 8px;
    border-radius: 20px;
`;

function Genre({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}

export default Genre;
