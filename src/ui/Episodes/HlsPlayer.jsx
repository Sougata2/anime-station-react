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
    [trks, url]
  );

  return (
    <>
      <Video
        ref={videoRef}
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        data-setup="{}"
      >
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

{
  /* <video 
controls="" 
id="video" 
class="sc-brPMkR dRXEFm" 
src="blob:http://localhost:5173/f03a4c80-1aea-48cc-a742-6c7893f6a9eb">
  <track 
  src="https://s.megastatics.com/subtitle/93a7db2cafc9b21ef71a9f58bbf61867/93a7db2cafc9b21ef71a9f58bbf61867.vtt" kind="subtitles" label="English" srclang="en" default=""><track src="https://s.megastatics.com/subtitle/02a446fe7870aec5cf8e5d6af00a5f85/eng-2.vtt" 
  kind="subtitles" 
  label="English" 
  srclang="en"></video> */
}
