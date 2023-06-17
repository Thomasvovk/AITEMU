import "../HomePage/HomePage.scss";
import arrowIcon from "../../assets/images/icons/right-arrow.png";
import { Link } from "react-router-dom";
import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiAllGamesMetacritics } from "../Utilities/API";
// import Card from "../../components/Card/Card";

function HomePage() {
  // const [allGames, setAllGames] = useState([]);
  // const arr = [];
  // useEffect(() => {
  //   axios.get(apiAllGamesMetacritics).then((response) => {
  //     arr.push(response.data.results);
  //     setAllGames(response.data.results);
  //   });
  // }, []);

  // // useEffect(() => {
  // //   console.log(allGames);
  // // }, [allGames]);

  // function openGame(id) {
  //   console.log(id);
  // }

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
        <div className="home__divider"> </div>
        <div className="home__directions">
          <Link className="home__direction-link" to="/top-metacritic">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Top Metacritic</h2>
                <img className="home__direction-icon" src={arrowIcon} />
              </div>
            </div>
          </Link>
          <Link className="home__direction-link" to="/platforms">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Platforms</h2>
                <img className="home__direction-icon" src={arrowIcon} />
              </div>
            </div>
          </Link>
          <Link className="home__direction-link" to="/publishers">
            <div className="home__direction-container">
              <div className="home__direction-buttom-container">
                <h2 className="home__direction-title">Publishers</h2>
                <img className="home__direction-icon" src={arrowIcon} />
              </div>
            </div>
          </Link>
        </div>
        <div className="home__divider-right"> </div>
        {/* <h1 className="home__buttom-title">Top Metacritic</h1>
        <div className="home__games">
          {allGames.map((item) => {
            return (
              <Link to={`/game/${item.id}`}>
                <Card
                  name={item.name}
                  image={item.background_image}
                  id={item.id}
                />
              </Link>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
