import HorizontalBox from "../../ui/HorizontalBox";
import VerticleBox from "../../ui/VerticleBox";

function Related({ data }) {
  return (
    <HorizontalBox>
      {data.map((anime) => (
        <HorizontalBox key={anime.id}>
          <img src={anime.poster} alt="" />
          <VerticleBox gap={"10px"}>
            <div>{anime.episodes.sub}</div>
            <div>{anime.episodes.dub}</div>
            <div>{anime.name}</div>
            <div>{anime.type}</div>
          </VerticleBox>
        </HorizontalBox>
      ))}
    </HorizontalBox>
  );
}

export default Related;
