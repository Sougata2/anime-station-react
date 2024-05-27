import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const animationDuration = 550;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
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
  z-index: 1;
  ${(props) =>
    props.$rotate &&
    css`
      animation: ${rotateAnimation} ${animationDuration}ms linear;
    `}
  &:hover {
    background-color: #d968fc;
  }
  @media (max-width: 800px) {
    right: 12px;
    bottom: 8px;
    padding: 6px 10px;
    &:hover {
      background-color: #d968fc;
    }
  }
`;

const StyledIcon = styled.i``;

function CalenderButton({ callback }) {
  const [rotate, setRotate] = useState(false);

  function handleClick() {
    // animation
    setRotate(true);
    setTimeout(() => setRotate(false), animationDuration);
    // function for open the dateCounter
    callback();
  }

  return (
    <StyledButton onClick={handleClick} $rotate={rotate}>
      <StyledIcon className="fa-solid fa-calendar-days"></StyledIcon>
    </StyledButton>
  );
}

export default CalenderButton;
