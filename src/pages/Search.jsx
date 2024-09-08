import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/url";
import Heading from "../ui/Heading";
import React, { useState, useTransition } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value.length < 2) return setSuggestions([]);
    startTransition(async () => {
      const response = await fetch(
        BASE_URL + "anime/search/suggest?q=" + query
      );
      const data = await response.json();
      setSuggestions(data.suggestions);
    });
  }

  async function handleClick() {
    setSuggestions([]);
    const url = BASE_URL + `anime/search?q=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.animes);
  }
  return (
    <>
      <Heading>Search</Heading>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {isPending ? (
        <p>Loading</p>
      ) : (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <a href={`/anime/${suggestion.id}`}>{suggestion.name}</a>
            </li>
          ))}
        </ul>
      )}
      <div>
        {results &&
          results.map((result) => (
            <div key={result.id}>
              <div>
                <img src={result.poster} alt="" />
              </div>
              <div>
                <a href={`/anime/${result.id}`}>{result.name}</a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Search;
