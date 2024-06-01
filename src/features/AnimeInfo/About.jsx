import HorizontalBox from "../../ui/HorizontalBox";
import VerticleBox from "../../ui/VerticleBox";

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
    <HorizontalBox gap={"40px"}>
      <VerticleBox>
        <img src={poster} alt="" />
      </VerticleBox>
      <VerticleBox gap={"20px"} width={"700px"}>
        <div>{name}</div>
        <HorizontalBox gap={"5px"}>
          <div>{rating}</div>
          <div>{quality}</div>
          <div>{sub}</div>
          <div>{dub}</div>
          <div>{type}</div>
          <div>{duration}</div>
        </HorizontalBox>
        <HorizontalBox gap={"10px"}>
          <button>Watch Now</button>
          <button>Add to Favourites</button>
        </HorizontalBox>
        <div>{description}</div>
      </VerticleBox>
      <VerticleBox gap={"15px"} width={"300px"}>
        <div>{japanese}</div>
        <div>{name}</div>
        <div>{aired}</div>
        <div>{premiered}</div>
        <div>{duration}</div>
        <div>{status}</div>
        <div>{malscore}</div>
        <HorizontalBox $gap={"5px"}>
          {genres.map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </HorizontalBox>
        <div>{studios}</div>
        <div>{producers}</div>
      </VerticleBox>
    </HorizontalBox>
  );
}

export default About;
