import { useModalContext } from "../features/Modal/Modal";

import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1;
  transition: all 0.5s;
`;

function CardOverlay({ children }) {
  const { isOpen, close: closeModel } = useModalContext();
  return isOpen && <Overlay onClick={closeModel}>{children}</Overlay>;
}

export default CardOverlay;
