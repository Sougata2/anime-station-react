import styled from "styled-components";

const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
function Image({ height, width, children }) {
  return (
    <ImageContainer $height={height} $width={width}>
      <Img src={children} alt="" />
    </ImageContainer>
  );
}

export default Image;
