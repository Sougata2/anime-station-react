import React, { useRef, useEffect } from "react";

import styled from "styled-components";
import videojs from "video.js";

const Video = styled.video`
  height: 100%;
  width: 100%;
`;

function HLSPlayer({ url, trks }) {
  const videoRef = useRef(null);
  useEffect(
    function () {
      videojs(videoRef.current, {
        controlBar: {
          skipButtons: {
            backward: 10,
            forward: 10,
          },
        },
        controls: true,
        preload: "auto",
        sources: [
          {
            src: url,
            type: "application/x-mpegURL",
          },
        ],
      });
    },
    [url]
  );

  return (
    <>
      <Video ref={videoRef} id="my-video" className="video-js">
        {trks?.map((trk, i) => (
          <track
            key={i}
            src={trk.file}
            kind={trk.kind === "captions" ? "subtitles" : trk.kind}
            label={trk.label?.split(" ").at(0)}
            srcLang={trk.label?.toLocaleLowerCase().slice(0, 2)}
            default={trk.default ? true : false}
          />
        ))}
      </Video>
    </>
  );
}

export default HLSPlayer;
