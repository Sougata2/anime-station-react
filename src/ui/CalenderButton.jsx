import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 4rem;
  bottom: 3rem;
  padding: 14px 18px;
  border: none;
  border-radius: 100%;
  font-size: 1.6rem;
  background-color: #e384ff;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 300ms;
  &:hover {
    background-color: #d968fc;
    padding: 18px 22px;
    transform: translate(5px, 5px);
  }
  @media (max-width: 800px) {
    right: 12px;
    bottom: 8px;
    padding: 6px 10px;
    &:hover {
      background-color: #d968fc;
      padding: 8px 12px;
      transform: translate(-5px, -5px);
    }
  }
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
