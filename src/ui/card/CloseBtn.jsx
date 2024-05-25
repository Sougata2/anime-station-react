import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Poetsen One", sans-serif;
  position: absolute;
  bottom: 20px;
  font-size: 20px;
  color: #e384ff;
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 1px 10px;
  transition: all 200ms ease-out;
  &:hover{
    background-color: #dc7ff9;
    color: white;
  }
`;

function CloseBtn({ handleClick, children }) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

export default CloseBtn;
