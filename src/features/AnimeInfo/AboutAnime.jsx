import { useAnimeInfoById } from "./useAnime";
import { useParams } from "react-router-dom";

import VerticleBox from "../../ui/VerticleBox";
import Recommended from "./Recommended";
import Spinner from "../../ui/Spinner";
import Related from "./Related";
import About from "./About";

function AboutAnime() {
  const { id } = useParams();
  const { isPending, data } = useAnimeInfoById(id);
  if (isPending) return <Spinner />;
  const { anime, recommendedAnimes, relatedAnimes } = data;
  return (
    <VerticleBox gap={"50px"}>
      <About data={anime} />
      <Related data={relatedAnimes} />
      <Recommended data={recommendedAnimes} />
    </VerticleBox>
  );
}

export default AboutAnime;
