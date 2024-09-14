import { useNavigate } from "react-router-dom";
import { formatName } from "../../helper/format";
import Spinner from "../Spinner";
import styled from "styled-components";

const ResultsList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  font-family: "Poetsen One", sans-serif;
`;

const ResultsItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  max-width: 150px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  padding: 5px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PrevBtn = styled.button`
  border: none;
  padding: 4px 15px;
  background-color: #e384ff;
  font-family: "Poetsen One", sans-serif;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;
const NextBtn = styled.button`
  border: none;
  padding: 4px 15px;
  background-color: #e384ff;
  font-family: "Poetsen One", sans-serif;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

function Results({
  results,
  isLoading,
  handlePrev,
  handleNext,
  hasNextPage,
  page,
}) {
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  return (
    <>
      <ResultsList>
        {results.map((result) => (
          <ResultsItem
            key={result.id}
            onClick={() => navigate(`/anime/${result.id}`)}
          >
            <ImageWrapper>
              <Image src={result.poster} alt="" />
            </ImageWrapper>
            <Text>
              <div>{formatName(result.name, 30)}</div>
            </Text>
          </ResultsItem>
        ))}
      </ResultsList>
      {results.length > 0 && (
        <Pagination>
          {page > 1 && <PrevBtn onClick={handlePrev}>Prev</PrevBtn>}
          {hasNextPage && <NextBtn onClick={handleNext}>Next</NextBtn>}
        </Pagination>
      )}
    </>
  );
}

export default Results;
