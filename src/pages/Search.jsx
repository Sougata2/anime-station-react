import React, { useState, useTransition } from "react";
import { BASE_URL } from "../config/url";

import Suggestions from "../ui/Search/Suggestions";
import Heading from "../ui/Heading";
import styled from "styled-components";
import Results from "../ui/Search/Results";

const StyledSearch = styled.input`
  font-family: "Poetsen One", sans-serif;
  width: 100%;
  padding: 9px 25px;
  font-size: 20px;
  border-radius: 60px;
  border: none;
  color: #e384ff;
  &:focus {
    outline: none;
  }
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const InputBox = styled.div`
  position: relative;
`;

const SearchButton = styled.button`
  font-size: 14px;
  padding: 8px 20px;
  border-radius: 60px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: #e384ff;
  color: white;
  font-family: "Poetsen One", sans-serif;
  cursor: pointer;
`;

function Search() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const nextPage = async () => {
    setIsLoading(true);
    setPage((prevPage) => prevPage + 1);
    const url = BASE_URL + `search?q=${query}&page=${page + 1}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.data.animes);
    setIsLoading(false);
    setHasNextPage(data.data.hasNextPage);
  };
  const prevPage = async () => {
    setIsLoading(true);
    setPage((prevPage) => prevPage - 1);
    const url = BASE_URL + `search?q=${query}&page=${page - 1}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.data.animes);
    setIsLoading(false);
    setHasNextPage(data.data.hasNextPage);
  };

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value.length < 2) return setSuggestions([]);
    startTransition(async () => {
      const response = await fetch(BASE_URL + "search/suggestion?q=" + query);
      const data = await response.json();
      setSuggestions(data.data.suggestions);
    });
  }

  async function handleClick() {
    setSuggestions([]);
    if (query.length === 0) return;
    const url = BASE_URL + `search?q=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.data.animes);
  }

  return (
    <>
      <Heading>Search</Heading>
      <InputBox>
        <StyledSearch type="text" value={query} onChange={handleChange} />
        <SearchButton onClick={handleClick}>Search</SearchButton>
      </InputBox>
      <Suggestions suggestions={suggestions} isPending={isPending} />
      <Results
        page={page}
        results={results}
        isLoading={isLoading}
        handlePrev={prevPage}
        handleNext={nextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}

export default Search;
