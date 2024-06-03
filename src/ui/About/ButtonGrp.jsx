import styled from "styled-components";

const BtnGroup = styled.div`
  display: flex;
  gap: 30px;
  &>button{
    background-color: #e384ff;
    color: white;
    padding: 10px 27px;
    font-family: inherit;
    font-size: 1.3rem;
    border: none;
    border-radius: 30px;
    @media (max-width: 800px) {
      font-size: 13px;
      margin: auto;
      padding: 10px 25px;
    }
  }
`;

function ButtonGrp({ children }) {
  return <BtnGroup>{children}</BtnGroup>;
}

export default ButtonGrp;
