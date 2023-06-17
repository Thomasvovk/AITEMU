import "./TopMetacriticPage.scss";
import { useEffect, useState } from "react";
import { apiAllGamesMetacritics } from "../Utilities/API";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function TopMetacritic() {
  const [allGames, setAllGames] = useState([]);
  useEffect(() => {
    axios.get(apiAllGamesMetacritics).then((response) => {
      const list = response.data.results.map((item) => {
        const [api, imagePath] = item.background_image.split("media/");
        item.background_image = `${api}media/resize/640/-/${imagePath}`;
        return item;
      });
      setAllGames(list);
    });
  }, []);

  // useEffect(() => {
  //   console.log(allGames);
  // }, [allGames]);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <h1 className="home__buttom-title">Top Metacritic</h1>
      <div className="home__games">
        {allGames.map((item) => {
          return (
            <Link to={`/game/${item.id}`} key={item.id}>
              <Card
                name={item.name}
                image={item.background_image}
                id={item.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default TopMetacritic;
