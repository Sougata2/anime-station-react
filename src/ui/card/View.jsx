import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";

const StyledView = styled.div`
  position: absolute;
  right: 60px;
  bottom: 19px;
  font-size: 23px;
  color: #3333;
  &:hover {
    color: #03030373;
  }
`;
function View({ handleClick }) {
  return (
    <StyledView onClick={handleClick}>
      <i className="fa-solid fa-eye"></i>
    </StyledView>
  );
}

export default View;
