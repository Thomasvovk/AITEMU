import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { apiRecentGamesReleases } from "../Utilities/API";
import Card from "../../components/Card/Card";
import axios from "axios";
import "../NewReleasesPage/NewReleasesPage.scss";

function NewReleasesPage() {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get(apiRecentGamesReleases).then((response) => {
      const list = response.data.results.map((item) => {
        if (item.background_image) {
          const [api, imagePath] = item.background_image.split("media/");
          item.background_image = `${api}media/resize/640/-/${imagePath}`;
        }
        return item;
      });
      setNewReleases(list);
    });
  }, []);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <h1 className="new-release__buttom-title">New Releases</h1>
      <div className="new-release__character-container">
        <p className="new-release__character-subheader">
          Discover the latest gaming sensations on our New Game Releases page.
          Stay ahead with cutting-edge adventures, innovative gameplay, and
          mesmerizing graphics. From big-budget blockbusters to indie gems, find
          something for every gamer. Explore detailed profiles, trailers, and
          reviews. Join our community, stay updated, and be part of the gaming
          revolution!
        </p>

        <div className="new-release__character-right"></div>
      </div>

      <div className="new-release__games">
        {newReleases.map((item) => {
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
      </div>
    </>
  );
}

export default NewReleasesPage;
