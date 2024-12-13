import React, {useEffect, useRef} from "react";
import Hls from "hls.js";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledVideo = styled.video`
    background-color: #333;
`;

function HlsVideoPlayer({url, tracks}) {
    const player = useRef(null);
    useEffect(
        function () {
            try {
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(player.current);
            } catch (e) {
                toast.error(e.message);
            }
        },
        [url]
    );
    return (
        <>
            <StyledVideo
                height={"100%"}
                width={"100%"}
                crossOrigin="anonymous"
                ref={player}
                controls
            >
                {tracks?.map((track, i) => (
                    <track
                        key={i}
                        src={track.file}
                        kind={track.kind === "captions" ? "subtitles" : track.kind}
                        label={track.label?.split(" ").at(0)}
                        srcLang={track.label?.toLocaleLowerCase().slice(0, 2)}
                        default={track.default ? true : false}
                    />
                ))}
            </StyledVideo>
        </>
    );
}

export default HlsVideoPlayer;
