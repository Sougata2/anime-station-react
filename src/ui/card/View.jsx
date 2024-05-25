import styled from "styled-components";

const StyledView = styled.div`
    position: absolute;
    right: 60px;
    bottom: 19px;
    font-size: 23px;
    color: #3333;
    &:hover{
        color: #03030373;
    }
`;
function View() {
  return (
    <StyledView>
      <i className="fa-solid fa-eye"></i>
    </StyledView>
  );
}

export default View;
