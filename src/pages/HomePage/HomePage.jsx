import "../HomePage/HomePage.scss";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiAllGamesMetacritics } from "../utilities/API";
import Card from "../../components/Card/Card";

function HomePage() {
  const [allGames, setAllGames] = useState([]);
  const arr = [];
  useEffect(() => {
    axios.get(apiAllGamesMetacritics).then((response) => {
      arr.push(response.data.results);
      setAllGames(response.data.results);
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
      <div className="home">
        <div className="home__description-container">
          <p className="home__description">
            AITEMU. - comprehensive online platform designed to serve as a hub
            for gamers and gaming enthusiasts.
          </p>
          <p className="home__description-detailed">
            aims to provide a user-friendly and feature-rich environment where
            users can discover, explore, and manage their favorite games & and
            organize their next game they want to play across all the platforms.
          </p>
        </div>
        <div className="home__games">
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
        </div>
      </div>
    </>
  );
}

export default HomePage;
