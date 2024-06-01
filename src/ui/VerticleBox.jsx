import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
function VerticleBox({ gap, height, width, children }) {
  return (
    <Box $gap={gap} $height={height} $width={width}>
      {children}
    </Box>
  );
}

export default VerticleBox;
