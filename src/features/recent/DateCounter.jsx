import { createContext, useContext } from "react";
import { formatDate, getDate } from "../../services/dateApi";
import { useQueryClient } from "@tanstack/react-query";

import styled from "styled-components";

const StyledDate = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;
const StyledButton = styled.button`
  background-color: white;
  border: none;
  font-size: 2rem;
  padding: 0;
  margin: 0;
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
      ▶️
    </StyledButton>
  );
}

function Yesterday() {
  const { previousDay, isLoading } = useContext(DateContext);
  return (
    <StyledButton onClick={previousDay} disabled={isLoading}>
      ◀️
    </StyledButton>
  );
}
function Reset() {
  const { offset, resetDay, isLoading } = useContext(DateContext);
  return (
    offset !== 0 && (
      <StyledButton onClick={resetDay} disabled={isLoading}>
        🔄️
      </StyledButton>
    )
  );
}

DateCounter.Date = Date;
DateCounter.Tomorrow = Tomorrow;
DateCounter.Yesterday = Yesterday;
DateCounter.Reset = Reset;

export default DateCounter;
