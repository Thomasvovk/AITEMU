import "../PlatformsPage/PlatformsPage.scss";
import { useEffect, useState } from "react";
import { apiPlatformsList } from "../Utilities/API";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

function Platforms() {
  const [allPlatforms, setallPlatforms] = useState([]);
  const arr = [];

  useEffect(() => {
    axios.get(apiPlatformsList).then((response) => {
      arr.push(response.data.results);
      setallPlatforms(response.data.results);
    });
  }, []);
  return (
    <>
      <h1 className="platforms__buttom-title">Platforms</h1>
      <div className="platforms__character-container">
        <p className="platforms__character-subheader">
          Welcome to our Top Metacritic page! Discover the highest-rated games
          across genres and platforms that have captivated both critics and
          players. Explore captivating worlds, engage in strategic battles, and
          indulge in cinematic storytelling. Join our community and experience
          gaming excellence at its finest.
        </p>

        <div className="platforms__character-right"></div>
      </div>

      <div className="platforms__games">
        {allPlatforms.map((item) => {
          return (
            <Link to={`/platforms`}>
              <Card
                name={item.name}
                image={item.image_background}
                // id={item.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Platforms;
