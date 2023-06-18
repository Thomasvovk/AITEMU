import "../Search/Search.scss";

function Search() {
  return (
    <>
      <div className="search__search">
        <form className="search__search-form">
          <input
            type="search"
            name="search"
            className="search__search-input"
            placeholder="Search..."
          ></input>
        </form>
      </div>
    </>
  );
}

export default Search;
