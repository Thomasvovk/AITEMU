import "../Search/Search.scss";
import React, { useState } from "react";
import axios from "axios";
import { apiSearch } from "../../pages/Utilities/API";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(apiSearch);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    // For demonstration purposes, using a static array as the search results
    const staticResults = [
      "Result 1",
      "Result 2",
      "Result 3",
      "Apple",
      "Bottle",
      "Thomas",
    ];
    setResults(staticResults);
  };

  return (
    <div className="search__search">
      <form className="search__search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search__search-input"
          placeholder="Search..."
          onClick={handleSearch}
        />
        {results.length > 0 && (
          <ul className="search__search-output">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
