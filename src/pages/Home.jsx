import SpotLightAnimes from "../ui/Home/SpotLightAnimes";
import LatestEpisodes from "../ui/Home/LatestEpisodes";
import useHomePage from "../features/Homepage/useHomePage";
import Trendings from "../ui/Home/Trendings";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import Upcomings from "../ui/Home/Upcomings";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function Home() {
  const { isLoading, isRefetching, data } = useHomePage();
  if (isLoading || isRefetching) return <Spinner />;

  return (
    <StyledHome>
      <SpotLightAnimes animes={data.data.spotlightAnimes} />
      <Trendings animes={data.data.trendingAnimes} />
      <LatestEpisodes animes={data.data.latestEpisodeAnimes} />
      <Upcomings animes={data.data.topUpcomingAnimes} />
    </StyledHome>
  );
}

export default Home;
