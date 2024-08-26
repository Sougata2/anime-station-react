import styled from "styled-components";
import Slider from "./Slider";

const SpotLightDiv = styled.div`
  margin-top: 2rem;
`;

function SpotLightAnimes({ animes }) {
  return (
    <SpotLightDiv>
      <Slider animes={animes} />
    </SpotLightDiv>
  );
}

export default SpotLightAnimes;
