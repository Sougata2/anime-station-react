import styled from "styled-components";

const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
function Image({ height, width, borderRadius, children }) {
  return (
    <ImageContainer
      $height={height}
      $width={width}
      $borderRadius={borderRadius}
    >
      <Img src={children} alt="" />
    </ImageContainer>
  );
}

export default Image;
