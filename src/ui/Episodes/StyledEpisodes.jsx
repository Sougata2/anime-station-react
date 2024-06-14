import styled from "styled-components";

const Div = styled.div`
    display: grid;
    margin-top: 10px;
    grid-template-rows: 500px 100px auto;
    @media (max-width: 800px) {
        grid-template-rows: 280px 80px 450px;
    }
`;
function StyledEpisodes({ children }) {
  return <Div>{children}</Div>;
}

export default StyledEpisodes;
