import styled from "styled-components";

const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  top: -70px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

function Image({ children }) {
  return (
    <ImageContainer>
      <StyledImage src={children} alt="" />
    </ImageContainer>
  );
}

export default Image;
