import ErrorVideo from "./ErrorVideo";
import HLSPlayer from "./HlsPlayer";
import useVideo from "../../features/Episodes/useVideo";
import Spinner from "../Spinner";
import styled from "styled-components";

const PlayerContainer = styled.div`
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

function VideoPlayer() {
  const { isPending, isRefetching, data } = useVideo();

  if (isPending || isRefetching) return <Spinner />;

  return (
    <>
      <PlayerContainer>
        {Object.keys(data).includes("status") ? (
          <ErrorVideo />
        ) : (
          <HLSPlayer url={data.sources.at(0).url} trks={data.tracks} />
        )}
      </PlayerContainer>
    </>
  );
}

export default VideoPlayer;
