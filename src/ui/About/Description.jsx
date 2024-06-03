import { useEffect, useState } from "react";
import styled from "styled-components";

const Btn = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 100;
  color: #333333a2;
`;

const StyledDescription = styled.p`
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;
const CHAR_LIMIT = 300;
function Description({ children }) {
  const [showMore, setShowMore] = useState(false);
  const [description, setDecription] = useState("");
  useEffect(
    function () {
      if (children.length >= CHAR_LIMIT) {
        setDecription(() =>
          showMore ? children : children.slice(0, CHAR_LIMIT)
        );
      } else {
        setDecription(children);
      }
    },
    [children, showMore]
  );
  return (
    <StyledDescription>
      {description}
      {description.length >= CHAR_LIMIT && (
        <Btn onClick={() => setShowMore((showMore) => !showMore)}>
          {showMore ? "show less" : "...show more"}
        </Btn>
      )}
    </StyledDescription>
  );
}

export default Description;
