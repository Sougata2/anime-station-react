import HLSPlayer from "./HlsPlayer";
import useVideo from "../../features/Episodes/useVideo";
import styled from "styled-components";
import Spinner from "../Spinner";

const PlayerContainer = styled.div`
  height: 500px;
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 200px;
  }
`;

function VideoPlayer() {
  const { isPending, isRefetching, data, error } = useVideo();
  if (isPending || isRefetching) return <Spinner />;
  return (
    <PlayerContainer>
      <HLSPlayer src={data?.sources?.at(0).url} />
    </PlayerContainer>
  );
}
// data.sources.url
export default VideoPlayer;
