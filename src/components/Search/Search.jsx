import "../Search/Search.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiSearch } from "../../pages/Utilities/API";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(apiSearch, { params: { search: searchQuery } })
        .then((response) => {
          setResults(response.data.results);
        });
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  function handleSearch() {
    setResults([]);
    setSearchQuery("");
  }

  return (
    <div className="search__search">
      <form className="search__search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search__search-input"
          placeholder="Search..."
        />
        {results.length > 0 && (
          <ul className="search__search-output">
            {results.map((result, index) => (
              <li onClick={handleSearch} key={index}>
                <Link to={`/game/${result.id}`} key={result.id}>
                  {result.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
