import styled from "styled-components";
import React from "react";

const StyledHeading = styled.div`
  font-family: "Poetsen One", sans-serif;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: #333333c2;
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
