import styled from "styled-components";

const StyledDuration = styled.div`
    position: absolute;
    bottom: 0;
    right: 10px;
`;
function Duration({ children }) {
  return (
    <StyledDuration>
      <i className="fa-regular fa-clock"></i> {children}
    </StyledDuration>
  );
}

export default Duration;
