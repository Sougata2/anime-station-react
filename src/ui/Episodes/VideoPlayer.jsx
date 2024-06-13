import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import ErrorVideo from "./ErrorVideo";
import HLSPlayer from "./HlsPlayer";
import useVideo from "../../features/Episodes/useVideo";
import Spinner from "../Spinner";
import Servers from "./Servers";
import styled from "styled-components";
import toast from "react-hot-toast";

const PlayerContainer = styled.div`
  display: inline-block;
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
