import styled from "styled-components";

const StyledSlideText = styled.div`
  font-family: "Poetsen One", sans-serif;
  color: #4e4e4ecc;
  position: absolute;
  bottom: 30%;
  left: 3%;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 800px) {
    width: 190px;
    bottom: 10%;
  }
`;
const StyledTitle = styled.div`
  font-size: 30px;
  color: #e384ff;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
const StyledDescription = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
function SlideText({ name, description, episodes }) {
  return (
    <StyledSlideText>
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>{description.slice(0, 150) + "..."}</StyledDescription>
    </StyledSlideText>
  );
}

export default SlideText;
