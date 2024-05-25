import { createContext, useContext } from "react";
import { formatDate, getDate } from "../../services/dateApi";
import { useQueryClient } from "@tanstack/react-query";

import styled from "styled-components";

const StyledDate = styled.p`
  font-size: 1.3rem;
  @media (max-width: 800px) {
    font-size: 1rem;
    width: 95px;
  }
`;
const StyledButton = styled.button`
  background-color: inherit;
  border: none;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;
const StyledIcons = styled.i`
  color: #3333;
  &:hover {
    color: #333;
  }
`;
const DateContext = createContext();

function DateCounter({ offset, setOffset, children }) {
  const queryClient = useQueryClient();
  const isLoading = queryClient.isFetching();
  const nextDay = () => setOffset((offset) => offset + 1);
  const previousDay = () => setOffset((offset) => offset - 1);
  const resetDay = () => setOffset(0);

  return (
    <DateContext.Provider
      value={{
        offset,
        nextDay,
        previousDay,
        resetDay,
        isLoading,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

function Date() {
  const { offset } = useContext(DateContext);
  return <StyledDate>{formatDate(getDate(offset))}</StyledDate>;
}

function Tomorrow() {
  const { nextDay, isLoading } = useContext(DateContext);
  return (
    <StyledButton onClick={nextDay} disabled={isLoading}>
      <StyledIcons className="fa-solid fa-arrow-right"></StyledIcons>
    </StyledButton>
  );
}

function Yesterday() {
  const { previousDay, isLoading } = useContext(DateContext);
  return (
    <StyledButton onClick={previousDay} disabled={isLoading}>
      <StyledIcons className="fa-solid fa-arrow-left"></StyledIcons>
    </StyledButton>
  );
}
function Reset() {
  const { offset, resetDay, isLoading } = useContext(DateContext);
  return (
    offset !== 0 && (
      <StyledButton onClick={resetDay} disabled={isLoading}>
        <StyledIcons className="fa-solid fa-arrows-rotate"></StyledIcons>
      </StyledButton>
    )
  );
}

DateCounter.Date = Date;
DateCounter.Tomorrow = Tomorrow;
DateCounter.Yesterday = Yesterday;
DateCounter.Reset = Reset;

export default DateCounter;
