import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Hls from "hls.js";

const Video = styled.video`
  height: 100%;
  width: 100%;
`;

function HLSPlayer({ src }) {
  const videoRef = useRef(null);
  useEffect(
    function () {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      }
    },
    [src]
  );
  return <Video controls={true} id="video" ref={videoRef}></Video>;
}

export default HLSPlayer;
