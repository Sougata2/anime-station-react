import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
function HorizontalBox({ gap, height, width, children }) {
  return (
    <Box $gap={gap} $height={height} $width={width}>
      {children}
    </Box>
  );
}

export default HorizontalBox;
