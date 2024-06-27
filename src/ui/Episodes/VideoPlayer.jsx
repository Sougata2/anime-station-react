import ErrorVideo from "./ErrorVideo";
// import HLSPlayer from "./HlsPlayer";
import useVideo from "../../features/Episodes/useVideo";
import styled from "styled-components";
import EpisodeLoader from "./EpisodeLoader";
import { useRef } from "react";
import Player from "./Player";

const PlayerContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
    height: 280px;
  }
`;

// const ExpandButton = styled.div`
//   cursor: pointer;
//   color: white;
//   position: absolute;
//   z-index: 11;
//   right: 10px;
//   top: 10px;
// `;

function VideoPlayer() {
  // const [fullscreen, setFullscreen] = useState(false);
  const windowRef = useRef(null);
  const { isPending, isRefetching, data } = useVideo();

  // function handleFullscreen() {
  //   if (fullscreen) {
  //     setFullscreen(false);
  //     document.exitFullscreen();
  //   } else {
  //     setFullscreen(true);
  //     windowRef.current.requestFullscreen();
  //   }
  // }

  if (isPending || isRefetching) return <EpisodeLoader />;

  return (
    <>
      <PlayerContainer ref={windowRef}>
        {/* <ExpandButton className="full-screen" onClick={handleFullscreen}>
          {fullscreen ? (
            <i className="fas fa-compress-alt"></i>
          ) : (
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          )}
        </ExpandButton> */}
        {Object.keys(data).includes("status") ? (
          <ErrorVideo />
        ) : (
          // <HLSPlayer url={data.sources.at(0).url} trks={data.tracks} />
          // <NewPlayer src={data.sources.at(0).url} trks={data.trks} />
          <Player url={data.sources.at(0).url} tracks={data.tracks} />
        )}
      </PlayerContainer>
    </>
  );
}

export default VideoPlayer;
