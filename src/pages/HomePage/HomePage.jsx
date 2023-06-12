import "../HomePage/HomePage.scss";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiAllGames } from "../utilities/API";
import Card from "../../components/Card/Card";

function HomePage() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    axios.get(apiAllGames).then((response) => {
      setAllGames(response.data.results);
    });
  }, []);

  useEffect(() => {
    console.log(allGames);
  }, [allGames]);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <div className="search">
        <form className="search__form">
          <input
            type="search"
            name="search"
            className="search__input"
            placeholder="Search..."
          ></input>
        </form>
      </div>
      {allGames.map((item) => {
        return (
          <Card
            name={item.name}
            image={item.background_image}
            id={item.id}
            open={openGame}
          />
        );
      })}
    </>
  );
}

export default HomePage;
