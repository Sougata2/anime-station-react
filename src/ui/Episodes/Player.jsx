import ReactPlayer from "react-player";
import styled from "styled-components";
const StyledReactPlayer = styled(ReactPlayer)`
  background-color: #333;
`;

function Player({ url, tracks }) {
  const videoTracks = tracks.map((track) => {
    const obj = {
      kind: "subtitles",
      src: track.file,
      srcLang: track.label,
    };
    if (track.default) {
      Object.assign(obj, { default: true });
    }
    return obj;
  });

  return (
    <StyledReactPlayer
      width={"100%"}
      height={"100%"}
      controls
      url={url}
      config={{
        file: {
          attributes: {
            crossOrigin: "anonymous",
          },
          forceHLS: true,
          tracks: videoTracks,
        },
      }}
    ></StyledReactPlayer>
  );
}

export default Player;
