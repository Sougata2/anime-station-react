import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr 50px;
`;

const Main = styled.main`
  position: relative;
  overflow: scroll;
  scrollbar-width: none;
  padding:0 5%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
