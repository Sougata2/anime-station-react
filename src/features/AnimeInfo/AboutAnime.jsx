import { useCurrentAnime } from "./useAnime";
import { useParams } from "react-router-dom";

import Recommended from "./Recommended";
import Spinner from "../../ui/Spinner";
import Related from "./Related";
import About from "./About";

function AboutAnime() {
  const { id } = useParams();
  const { isPending, data } = useCurrentAnime(id);
  if (isPending) return <Spinner />;
  const { anime, recommendedAnimes, relatedAnimes } = data.data;
  return (
    <>
      <About data={anime} />
      <Related data={relatedAnimes} />
      <Recommended data={recommendedAnimes} />
    </>
  );
}

export default AboutAnime;
