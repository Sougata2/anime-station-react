import styled from "styled-components";

const StyledSpan = styled.span`
    color: #3333339d;
`
function Label({ children }) {
  return <StyledSpan>{children}{" "}</StyledSpan>;
}

export default Label;
