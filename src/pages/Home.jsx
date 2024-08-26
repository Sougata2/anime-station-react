import useHomePage from "../features/Homepage/useHomePage";
import SpotLightAnimes from "../ui/Home/SpotLightAnimes";
import Spinner from "../ui/Spinner";

function Home() {
  const { isLoading, isRefetching, data } = useHomePage();
  if (isLoading || isRefetching) return <Spinner />;
  console.log(data.spotlightAnimes);

  return (
    <>
      <SpotLightAnimes animes={data.spotlightAnimes} />
    </>
  );
}

export default Home;
