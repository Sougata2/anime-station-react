import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: white;
  border: none;
  border-radius: 100%;
  transform: translate(15px, -15px);
  cursor: pointer;
`;

const initialState = {
  isOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    default:
      throw new Error("Unknown Action in Modal Context");
  }
}
const ModalContext = createContext();

function Modal({ children }) {
  const [{ isOpen }, dispatch] = useReducer(reducer, initialState);
  const open = () => dispatch({ type: "open" });
  const close = () => dispatch({ type: "close" });
  return (
    <ModalContext.Provider value={{ isOpen, dispatch, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Close() {
  const { close } = useContext(ModalContext);
  return <CloseButton onClick={() => close()}>✖️</CloseButton>;
}

function useModalContext() {
  const context = useContext(ModalContext);
  return context;
}

Modal.Close = Close;
export { useModalContext };

export default Modal;
