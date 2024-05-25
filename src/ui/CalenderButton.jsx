import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 100%;
  font-size: 1.6rem;
  background-color: #e384ff;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledIcon = styled.i``;

function CalenderButton({ handleClick }) {
  return (
    <StyledButton onClick={handleClick}>
      <StyledIcon className="fa-solid fa-calendar-days"></StyledIcon>
    </StyledButton>
  );
}

export default CalenderButton;
