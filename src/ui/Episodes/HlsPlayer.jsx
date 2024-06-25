import "@videojs/themes/dist/city/index.css";

import React, { useRef, useEffect } from "react";

import videojs from "video.js";
import styled from "styled-components";
import Hls from "hls.js";

const Video = styled.video`
  height: 100%;
  width: 100%;
  position: relative;
`;

const SkipButtonForward = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  width: 40%;
  height: 65%;
  top: 12%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    visibility: hidden;
    stroke-width: 4px;
  }
`;
const SkipButtonBackward = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  height: 65%;
  top: 12%;
  width: 40%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    visibility: hidden;
    stroke-width: 4px;
  }
`;

function HLSPlayer({ url, trks }) {
  const videoRef = useRef(null);
  const forwardRef = useRef(null);
  const backwardRef = useRef(null);
  const forwardSvgRef = useRef(null);
  const backwardSvgRef = useRef(null);

  useEffect(
    function () {
      videojs(
        videoRef.current,
        {
          controlBar: {
            pictureInPictureToggle: false,
          },
          controls: true,
          preload: "auto",
        },
        function () {
          const hls = new Hls();
          hls.loadSource(url);
          hls.attachMedia(videoRef.current);
          const player = this.player_;
          forwardRef.current.addEventListener("dblclick", function (e) {
            player.currentTime(player.currentTime() + 10);
            forwardSvgRef.current.style.visibility = "visible";
            setTimeout(() => {
              forwardSvgRef.current.style.visibility = "hidden";
            }, 500);
          });
          backwardRef.current.addEventListener("dblclick", function () {
            player.currentTime(player.currentTime() - 10);
            backwardSvgRef.current.style.visibility = "visible";
            setTimeout(() => {
              backwardSvgRef.current.style.visibility = "hidden";
            }, 500);
          });
        }
      );
    },
    [url]
  );

  return (
    <>
      <SkipButtonBackward ref={backwardRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          strokeWidth="2.5"
          stroke="#ffffff"
          fill="none"
          ref={backwardSvgRef}
          className="duration-300 transform transition-all"
          style={{ width: "20%", height: "20%" }}
        >
          <path
            strokeLinecap="round"
            d="M9.57 15.41l2.6 8.64 8.64-2.61M26.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
          ></path>
          <rect
            x="32.19"
            y="22.52"
            width="11.41"
            height="18.89"
            rx="5.7"
          ></rect>
          <path
            d="M12.14 23.94a21.91 21.91 0 11-.91 13.25"
            strokeLinecap="round"
          ></path>
        </svg>
      </SkipButtonBackward>
      <SkipButtonForward ref={forwardRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          strokeWidth="2.5"
          stroke="#ffffff"
          fill="none"
          ref={forwardSvgRef}
          className="duration-300 transform transition-all"
          style={{ width: "20%", height: "20%" }}
        >
          <path
            d="M23.93 41.41V23a.09.09 0 00-.16-.07s-2.58 3.69-4.17 4.78"
            strokeLinecap="round"
          ></path>
          <rect
            x="29.19"
            y="22.52"
            width="11.41"
            height="18.89"
            rx="5.7"
          ></rect>
          <path
            strokeLinecap="round"
            d="M54.43 15.41l-2.6 8.64-8.64-2.61M51.86 23.94a21.91 21.91 0 10.91 13.25"
          ></path>
        </svg>
      </SkipButtonForward>
      <Video
        ref={videoRef}
        id="my-video"
        className="video-js vjs-theme-city"
        controls
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
