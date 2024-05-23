import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
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

const Button = styled.button`
  position: absolute;
  right: 0;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen((open) => true);
  const close = () => setIsOpen((open) => false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open() });
}
function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => close() });
}

function Window({ children }) {
  const { isOpen, close } = useContext(ModalContext);
  if (!isOpen) return null;
  return createPortal(
    <>
      <Overlay onClick={close} />
      {cloneElement(children, { onClose: close })}
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
