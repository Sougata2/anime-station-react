import Image from "../../ui/Image";
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  margin: auto;
`;

function About({ data }) {
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
        <Image width={"200px"}>{poster}</Image>
      </ImageContainer>
      <div>
        <div>{name}</div>
        <div>
          <span>{rating}</span>
          <span>{quality}</span>
          <span>{sub}</span>
          <span>{dub}</span>
          <span>{type}</span>
          <span>{duration}</span>
        </div>
        <button>Watch Now</button>
        <button>Add to Favourites</button>
        <div>{description}</div>
      </div>
      <div>
        <div>{japanese}</div>
        <div>{name}</div>
        <div>{aired}</div>
        <div>{premiered}</div>
        <div>{duration}</div>
        <div>{status}</div>
        <div>{malscore}</div>
        <div>
          {genres.map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>
        <div>{studios}</div>
        <div>{producers}</div>
      </div>
    </Box>
  );
}

export default About;
