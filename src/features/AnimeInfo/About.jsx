import { useNavigate } from "react-router-dom";

import FavouriteBtn from "../../ui/About/FavouriteBtn";
import Description from "../../ui/About/Description";
import ButtonGrp from "../../ui/About/ButtonGrp";
import styled from "styled-components";
import Image from "../../ui/Image";
import Genre from "../../ui/About/Genre";
import Label from "../../ui/About/Label";
import Stat from "../../ui/About/Stat";

const Box = styled.div`
  font-family: "Poetsen One", sans-serif;
  background-color: #ffffff;
  color: #333333e1;
  padding: 10px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 210px auto 300px;
  gap: 30px;
  margin-top: 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 2rem;
  @media (max-width: 800px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const StyledStats = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 800px) {
    margin: auto;
  }
`;

const StyledMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Genres = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const GenreBoder = styled.span`
  width: 250px;
  height: 1px;
  background-color: #d5d5d5;
`;

function About({ data }) {
  const navigate = useNavigate();
  const { info, moreInfo } = data;
  const {
    anilistId,
    charactersVoiceActors,
    promotionalVideos,
    malId,
    id,
    description,
    name,
    poster,
    stats,
  } = info;
  const {
    episodes: { sub, dub },
    duration,
    quality,
    rating,
    type,
  } = stats;

  const {
    aired,
    genres,
    japanese,
    malscore,
    premiered,
    producers,
    status,
    studios,
  } = moreInfo;
  return (
    <Box>
      <ImageContainer>
        <Image width={"200px"} height={"250px"} borderRadius={"20px"}>
          {poster}
        </Image>
      </ImageContainer>
      <StyledInfo>
        <Title>{name}</Title>
        <StyledStats>
          <Stat>{rating}</Stat>
          <Stat>{quality}</Stat>
          <Stat>{sub}</Stat>
          <Stat>{dub}</Stat>
          <Stat>{type}</Stat>
          <Stat>{duration}</Stat>
        </StyledStats>
        <ButtonGrp>
          <button onClick={() => navigate(`/episodes/${id}`)}>Watch Now</button>
          <FavouriteBtn
            data={{ id, name, poster, anilistId }}
          />
        </ButtonGrp>
        <Description>{description}</Description>
      </StyledInfo>
      <StyledMoreInfo>
        <div>
          <Label>Japanese: </Label>
          {japanese}
        </div>
        <div>
          <Label>Synonyms: </Label>
          {name}
        </div>
        <div>
          <Label>Aired: </Label>
          {aired}
        </div>
        <div>
          <Label>Premiered: </Label>
          {premiered}
        </div>
        <div>
          <Label>Duration: </Label>
          {duration}
        </div>
        <div>
          <Label>Status: </Label>
          {status}
        </div>
        <div>
          <Label>MAL Score: </Label>
          {malscore}
        </div>
        <GenreBoder />
        <Genres>
          <Label>Genres: </Label>
          {genres?.map((genre, i) => (
            <Genre key={i}>{genre}</Genre>
          ))}
        </Genres>
        <GenreBoder />
        <div>
          <Label>Studios: </Label>
          {studios}
        </div>
        <div>
          <Label>Producers: </Label>
          {producers}
        </div>
      </StyledMoreInfo>
    </Box>
  );
}

export default About;
