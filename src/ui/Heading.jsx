import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  font-family: "Poetsen One", sans-serif;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #cf48f8;
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
