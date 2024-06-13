import styled from "styled-components";

const Video = styled.video`
  height: 100%;
  width: 100%;
`;
function ErrorVideo() {
  return (
    <Video controls preload="auto">
      <source src="/error.mp4" />
    </Video>
  );
}

export default ErrorVideo;
