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
    console.log("render");
  }, []);

  useEffect(() => {
    axios.get(apiAllGamesMetacritics).then((response) => {
      const list = response.data.results.map((item) => {
        const [api, imagePath] = item.background_image.split("media/");
        item.background_image = `${api}media/resize/640/-/${imagePath}`;
        return item;
      });
      list.sort((a, b) => b.metacritic - a.metacritic);
      setAllGames(list);
      console.log(list);
    });
  }, []);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <h1 className="top-metacritic__buttom-title">Top Metacritic</h1>
      <div className="top-metacritic__character-container">
        <p className="top-metacritic__character-subheader">
          Welcome to our Top Metacritic page! Discover the highest-rated games
          across genres and platforms that have captivated both critics and
          players. Explore captivating worlds, engage in strategic battles, and
          indulge in cinematic storytelling. Join our community and experience
          gaming excellence at its finest.
        </p>

        <div className="top-metacritic__character-right"></div>
      </div>

      <div className="top-metacritic__games">
        {allGames.map((item) => {
          return (
            <Link to={`/game/${item.id}`} key={item.id}>
              <Card
                name={item.name}
                image={item.background_image}
                metacritic={item.metacritic}
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
