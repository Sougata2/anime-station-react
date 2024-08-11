import styled from "styled-components";

const Div = styled.div`
    display: grid;
    grid-template-rows: 500px 100px auto;
    padding-top: 5px;
    height: 100vh;
    @media (max-width: 800px) {
        grid-template-rows: 280px auto 1fr;
    }
`;
function StyledEpisodes({ children }) {
  return <Div>{children}</Div>;
}

export default StyledEpisodes;
