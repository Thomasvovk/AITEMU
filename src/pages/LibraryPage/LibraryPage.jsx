import "../LibraryPage/LibraryPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import {
  apiPlatformsList,
  apiGameList,
  apiPublishersList,
  apiGenresList,
} from "../Utilities/API";
import { useEffect, useState } from "react";

function LibraryPage() {
  // Use States
  const [platforms, setPlatforms] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [library, setLibrary] = useState([]);
  const [filter, setFilter] = useState({
    platforms: null,
    publishers: null,
    genres: null,
  });

  // Platforms API Request
  useEffect(() => {
    Promise.all([
      axios.get(apiPlatformsList),
      axios.get(apiPublishersList),
      axios.get(apiGenresList),
    ]).then(([platforms, publishers, genres]) => {
      setPlatforms(platforms.data.results);
      setPublishers(publishers.data.results);
      setGenres(genres.data.results);
    });
  }, []);

  useEffect(() => {
    let api = apiGameList;

    Object.keys(filter).forEach((item) => {
      if (filter[item]) {
        api += `&${item}=${filter[item]}`;
      }
    });

    axios.get(api).then((response) => {
      const list = response.data.results.map((item) => {
        if (item.background_image) {
          const [api, imagePath] = item.background_image.split("media/");
          item.background_image = `${api}media/resize/640/-/${imagePath}`;
        }
        return item;
      });
      setLibrary(list);
    });
  }, [filter.platforms, filter.publishers, filter.genres]);

  // Platform Function Select
  function onPlatformSelect(item) {
    setFilter((state) => {
      return { ...state, platforms: item.target.value };
    });
  }

  // Publishers Function Select
  function onPublisherSelect(item) {
    setFilter((state) => {
      return { ...state, publishers: item.target.value };
    });
  }

  // Genre Function Select
  function onGenreSelect(item) {
    setFilter((state) => {
      return { ...state, genres: item.target.value };
    });
  }

  function openGame(id) {
    console.log(id);
  }
  return (
    <>
      <h1 className="library">Library</h1>
      <div className="library__container">
        <div className="library__filter">
          {/* Genre Section*/}
          <select
            className="library__select"
            name="genres"
            id="genres"
            onChange={onGenreSelect}
          >
            <option value="" selected>
              Select Genres
            </option>
            {genres.map((item) => {
              return (
                <option
                  className="library__option"
                  value={item.id}
                  key={item.id}
                >
                  {item.name}
                </option>
              );
            })}
          </select>

          {/* Platform Section*/}
          <select
            className="library__select"
            name="platforms"
            id="platforms"
            onChange={onPlatformSelect}
          >
            <option value="" selected>
              Select Platforms
            </option>
            {platforms.map((item) => {
              return (
                <option
                  key={item.id}
                  className="library__option"
                  value={item.id}
                >
                  {item.name}
                </option>
              );
            })}
          </select>

          {/* Publishers Section*/}
          <select
            className="library__select"
            name="publishers"
            id="publishers"
            onChange={onPublisherSelect}
          >
            <option value="" selected>
              Select Publishers
            </option>
            {publishers.map((item) => {
              return (
                <option
                  className="library__option"
                  value={item.id}
                  key={item.id}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="library__character-container">
        <p className="library__character-subheader">
          Welcome to our Gaming Library! Discover a vast collection of thrilling
          games across genres and platforms. Find blockbuster hits, indie gems,
          and timeless classics. Explore detailed descriptions, ratings, and
          reviews. Join our gaming community, stay updated with the latest news,
          and embark on unforgettable gaming journeys. Start exploring today!
        </p>

        <div className="library__character-right"></div>
      </div>

      {/* Returning Card */}

      <div className="library__games">
        {library.map((item) => {
          return (
            <Link to={`/game/${item.id}`}>
              <Card
                key={item.id}
                name={item.name}
                image={item.background_image}
                id={item.id}
                open={openGame}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default LibraryPage;
