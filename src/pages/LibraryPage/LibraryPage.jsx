import Card from "../../components/Card/Card";
import "../LibraryPage/LibraryPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
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
    platform: null,
    publisher: null,
    genre: null,
  });

  // Platforms API Request
  useEffect(() => {
    axios.get(apiPlatformsList).then((response) => {
      setPlatforms(response.data.results);
    });
  }, []);

  useEffect(() => {
    const api = `${apiGameList}&platforms=${filter.platform}`;
    axios.get(api).then((response) => {
      setLibrary(response.data.results);
      const list = response.data.results.map((item) => {
        const [api, imagePath] = item.image_background.split("media/");
        item.image_background = `${api}media/resize/640/-/${imagePath}`;
        return item;
      });
      setLibrary(list);
    });
  }, [filter.platform]);

  // Publishers API Request
  useEffect(() => {
    axios.get(apiPublishersList).then((response) => {
      setPublishers(response.data.results);
    });
  }, []);

  useEffect(() => {
    const api = `${apiGameList}&publishers=${filter.publisher}`;
    axios.get(api).then((response) => {
      setLibrary(response.data.results);
    });
  }, [filter.publisher]);

  // Genre API Request
  useEffect(() => {
    axios.get(apiGenresList).then((response) => {
      setGenres(response.data.results);
    });
  }, []);

  useEffect(() => {
    const api = `${apiGameList}&genres=${filter.genre}`;
    axios.get(api).then((response) => {
      setLibrary(response.data.results);
    });
  }, [filter.genre]);

  // Platform Function Select
  function onPlatformSelect(item) {
    setFilter((state) => {
      return { ...state, platform: item.target.value };
    });
  }

  // Publishers Function Select
  function onPublisherSelect(item) {
    setFilter((state) => {
      return { ...state, publisher: item.target.value };
    });
  }

  // Genre Function Select
  function onGenreSelect(item) {
    setFilter((state) => {
      return { ...state, genre: item.target.value };
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
